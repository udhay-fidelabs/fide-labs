"use client";

import type { ReactNode } from "react";
import Icon from "./Icon";

/**
 * Dependency-free Markdown renderer for documentation content.
 * Supports: headings (#, ##, ###), paragraphs, bold (**x**), inline code (`x`),
 * links ([t](u)), images (![alt](src)), unordered lists (- ), ordered lists
 * (1. ), blockquote callouts (> ), fenced code blocks (```), and tables (| … |).
 * Authored content lives as Markdown strings in lib/products.ts.
 */

// ---- inline parsing: image, bold, code, links ----
const INLINE = /(!\[[^\]]*\]\([^)]+\)|`[^`]+`|\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;

function renderInline(text: string, keyBase: string): ReactNode[] {
  const parts = text.split(INLINE).filter((p) => p !== "");
  return parts.map((part, i) => {
    const key = `${keyBase}-${i}`;
    const img = part.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
    if (img) {
      // eslint-disable-next-line @next/next/no-img-element
      return <img key={key} src={img[2]} alt={img[1]} className="docs-img" loading="lazy" />;
    }
    if (part.startsWith("`") && part.endsWith("`")) {
      return <code key={key}>{part.slice(1, -1)}</code>;
    }
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={key}>{part.slice(2, -2)}</strong>;
    }
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      return (
        <a key={key} href={link[2]}>
          {link[1]}
        </a>
      );
    }
    return <span key={key}>{part}</span>;
  });
}

const splitRow = (line: string) =>
  line.replace(/^\||\|$/g, "").split("|").map((c) => c.trim());

type Block =
  | { type: "h"; level: number; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "code"; lang: string; code: string }
  | { type: "table"; header: string[]; rows: string[][] }
  | { type: "img"; alt: string; src: string };

function parse(md: string): Block[] {
  const lines = md.replace(/\r\n/g, "\n").split("\n");
  const blocks: Block[] = [];
  let i = 0;
  const isSpecial = (t: string) =>
    t === "" ||
    /^(#{1,3})\s+/.test(t) ||
    /^>\s?/.test(t) ||
    /^[-*]\s+/.test(t) ||
    /^\d+\.\s+/.test(t) ||
    /^```/.test(t) ||
    /^\|.*\|$/.test(t);

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    if (trimmed === "") { i++; continue; }

    // Fenced code block
    if (/^```/.test(trimmed)) {
      const lang = trimmed.replace(/^```/, "").trim();
      const buf: string[] = [];
      i++;
      while (i < lines.length && !/^```/.test(lines[i].trim())) {
        buf.push(lines[i]);
        i++;
      }
      i++; // skip closing fence
      blocks.push({ type: "code", lang, code: buf.join("\n") });
      continue;
    }

    // Standalone image
    const imgMatch = trimmed.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
    if (imgMatch) {
      blocks.push({ type: "img", alt: imgMatch[1], src: imgMatch[2] });
      i++;
      continue;
    }

    // Table (header row + separator row)
    if (/^\|.*\|$/.test(trimmed) && i + 1 < lines.length && /^\|[\s:|-]+\|$/.test(lines[i + 1].trim())) {
      const header = splitRow(trimmed);
      i += 2; // skip header + separator
      const rows: string[][] = [];
      while (i < lines.length && /^\|.*\|$/.test(lines[i].trim())) {
        rows.push(splitRow(lines[i].trim()));
        i++;
      }
      blocks.push({ type: "table", header, rows });
      continue;
    }

    const heading = trimmed.match(/^(#{1,3})\s+(.*)$/);
    if (heading) {
      blocks.push({ type: "h", level: heading[1].length, text: heading[2] });
      i++;
      continue;
    }

    if (/^>\s?/.test(trimmed)) {
      const buf: string[] = [];
      while (i < lines.length && /^>\s?/.test(lines[i].trim())) {
        buf.push(lines[i].trim().replace(/^>\s?/, ""));
        i++;
      }
      blocks.push({ type: "quote", text: buf.join(" ") });
      continue;
    }

    if (/^[-*]\s+/.test(trimmed)) {
      const items: string[] = [];
      while (i < lines.length && /^[-*]\s+/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^[-*]\s+/, ""));
        i++;
      }
      blocks.push({ type: "ul", items });
      continue;
    }

    if (/^\d+\.\s+/.test(trimmed)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s+/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^\d+\.\s+/, ""));
        i++;
      }
      blocks.push({ type: "ol", items });
      continue;
    }

    // paragraph
    const buf: string[] = [];
    while (i < lines.length && !isSpecial(lines[i].trim())) {
      buf.push(lines[i].trim());
      i++;
    }
    blocks.push({ type: "p", text: buf.join(" ") });
  }
  return blocks;
}

export default function Markdown({ source }: { source: string }) {
  const blocks = parse(source);
  return (
    <>
      {blocks.map((b, i) => {
        const k = `b${i}`;
        switch (b.type) {
          case "h": {
            if (b.level === 1) return <h1 key={k} className="docs-title">{renderInline(b.text, k)}</h1>;
            if (b.level === 2) return <h2 key={k} className="docs-h2">{renderInline(b.text, k)}</h2>;
            return <h3 key={k} className="docs-h3">{renderInline(b.text, k)}</h3>;
          }
          case "p":
            return <p key={k} className="docs-p">{renderInline(b.text, k)}</p>;
          case "ul":
            return (
              <ul key={k} className="docs-list">
                {b.items.map((it, j) => (
                  <li key={j}>
                    <Icon name="check" size={14} className="docs-check" />
                    <span>{renderInline(it, `${k}-${j}`)}</span>
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={k} className="docs-steps">
                {b.items.map((it, j) => (
                  <li key={j}>
                    <span className="docs-step-n">{j + 1}</span>
                    <div>{renderInline(it, `${k}-${j}`)}</div>
                  </li>
                ))}
              </ol>
            );
          case "quote":
            return (
              <div key={k} className="docs-note">
                <Icon name="bolt" size={16} />
                <span>{renderInline(b.text, k)}</span>
              </div>
            );
          case "code":
            return (
              <div key={k} className="docs-code">
                {b.lang ? <span className="docs-code-lang">{b.lang}</span> : null}
                <pre><code>{b.code}</code></pre>
              </div>
            );
          case "img":
            // eslint-disable-next-line @next/next/no-img-element
            return <img key={k} src={b.src} alt={b.alt} className="docs-img" loading="lazy" />;
          case "table":
            return (
              <div key={k} className="docs-table-wrap">
                <table>
                  <thead>
                    <tr>{b.header.map((h, j) => <th key={j}>{renderInline(h, `${k}-h-${j}`)}</th>)}</tr>
                  </thead>
                  <tbody>
                    {b.rows.map((row, ri) => (
                      <tr key={ri}>{row.map((c, ci) => <td key={ci}>{renderInline(c, `${k}-${ri}-${ci}`)}</td>)}</tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
        }
      })}
    </>
  );
}

"use client";

import type { PageProps } from "../types";
import Icon from "../Icon";
import type { IconName } from "../Icon";

type Props = Pick<PageProps, "showPage">;

type Feature = { icon: IconName; title: string; desc: string };

const FEATURES: Feature[] = [
  { icon: "storefront", title: "Shopify Native", desc: "Built on official Shopify APIs, so it never breaks against the platform." },
  { icon: "bolt", title: "Fast Setup", desc: "One-click theme install and smart defaults get you live the same afternoon." },
  { icon: "heart", title: "Merchant First", desc: "Every feature is shaped by real merchant feedback, with none of the bloat." },
  { icon: "building", title: "Enterprise Ready", desc: "Scale from a solo store to Shopify Plus without ever switching tools." },
];

export default function WhyChooseUs({ showPage }: Props) {
  return (
    <section>
      <div className="wcu-panel reveal">
        <div className="wcu-intro">
          <span className="wcu-eyebrow">Features</span>
          <h2 className="wcu-title">Why Merchants <span className="wcu-accent">Choose Us?</span></h2>
          <p className="wcu-desc">FIDE Labs builds Shopify apps that turn quote requests into revenue. Four reasons wholesale merchants pick us over every other B2B app on the store.</p>
          <button className="btn-primary" onClick={() => showPage("product")}>Explore Products <Icon name="arrow-right" size={18} /></button>
        </div>
        <div className="wcu-features">
          {FEATURES.map((f) => (
            <div className="wcu-item" key={f.title}>
              <div className="wcu-ic"><Icon name={f.icon} size={22} /></div>
              <div>
                <h3 className="wcu-h">{f.title}</h3>
                <p className="wcu-p">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { ImageResponse } from "next/og";

export const alt = "FIDE — Request a Quote & Hide Price for Shopify";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0a0f1e 0%, #13235e 60%, #14B8A6 140%)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 18,
              background: "linear-gradient(135deg,#2F54EB,#14B8A6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 38,
              fontWeight: 800,
            }}
          >
            F
          </div>
          <div style={{ fontSize: 34, fontWeight: 700 }}>FIDE Labs</div>
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: -2,
            maxWidth: 900,
          }}
        >
          Request a Quote & Hide Price for Shopify
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 30,
            color: "rgba(255,255,255,0.82)",
            maxWidth: 880,
          }}
        >
          B2B quoting that lives in minutes — no code, no developer.
        </div>
      </div>
    ),
    { ...size }
  );
}

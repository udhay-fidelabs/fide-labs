import Icon from "../Icon";

type Testimonial = { initials: string; bg: string; name: string; role: string; quote: string; result: string };

const TESTIMONIALS: Testimonial[] = [
  { initials: "SR", bg: "linear-gradient(135deg,#2F54EB,#1a3cc7)", name: "Sarah R.", role: "Industrial Supply Co.", quote: "FIDE gets our wholesale quotes out the same day, not next week.", result: "Wholesale revenue +40%" },
  { initials: "MK", bg: "linear-gradient(135deg,#14B8A6,#0d9488)", name: "Marcus K.", role: "TechWorld B2B", quote: "Hide Price and Quote replaced our whole manual pricing flow.", result: "Live in under 10 minutes" },
  { initials: "JL", bg: "linear-gradient(135deg,#2F54EB,#14B8A6)", name: "Jennifer L.", role: "Metro Supplies", quote: "The dashboard finally gives us full visibility on every quote.", result: "Hours saved every week" },
  { initials: "DO", bg: "linear-gradient(135deg,#1a3cc7,#2F54EB)", name: "David O.", role: "Nova Industrial", quote: "Email automation chases quotes so my team doesn't have to.", result: "Quote response 3× faster" },
  { initials: "PN", bg: "linear-gradient(135deg,#0d9488,#14B8A6)", name: "Priya N.", role: "GlobalTrade Inc.", quote: "Our B2B buyers self-serve every order through the portal now.", result: "B2B orders +62%" },
  { initials: "TR", bg: "linear-gradient(135deg,#14B8A6,#2F54EB)", name: "Tomás R.", role: "Harbor Wholesale", quote: "We scaled from a solo store to Shopify Plus on the same setup.", result: "Scaled to Shopify Plus" },
];

export default function Testimonials() {
  return (
    <section className="t-section">
      <div className="text-center reveal">
        <div className="t-eyebrow"><span className="t-eyebrow-icon"><Icon name="heart" size={12} /></span>Testimonials</div>
        <div className="section-title">Our Merchants&apos; Feedback</div>
        <div className="section-sub center">See how Shopify stores grow B2B sales with FIDE</div>
      </div>
      <div className="t-grid reveal">
        {TESTIMONIALS.map((t) => (
          <div className="t-card" key={t.initials}>
            <div className="t-head">
              <div className="t-avatar" style={{ background: t.bg }}>{t.initials}</div>
              <div><div className="t-name">{t.name}</div><div className="t-role">{t.role}</div></div>
            </div>
            <div className="t-stars" aria-label="5 out of 5 stars">★★★★★</div>
            <blockquote className="t-quote">&ldquo;{t.quote}&rdquo;</blockquote>
            <div className="t-result">{t.result}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

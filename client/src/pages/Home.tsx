/**
 * Verdant Editorial: a vertical, tactile social-commerce hub using parchment,
 * forest ink, and bottle green; hierarchy is carried by editorial labels and rules.
 */
import { FormEvent, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Instagram,
  Mail,
  Music2,
  PinIcon,
  ShoppingBag,
  Sparkles,
} from "lucide-react";

type ClickEvent = {
  label: string;
  group: string;
  destination: string;
  time: string;
};

type SmartLinkProps = {
  label: string;
  eyebrow: string;
  group: string;
  href: string;
  accent?: boolean;
  icon?: "shop" | "spark" | "social";
  onTrack: (event: Omit<ClickEvent, "time">) => void;
};

const campaigns = [
  {
    edition: "Campaign 01 / August",
    title: "Objects for the daylight hours.",
    copy: "New table pieces, cut from calm material and designed to keep company with the everyday.",
    cta: "Enter the August edit",
    href: "https://example.com/august-edit",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1600&q=85",
    tone: "light",
  },
  {
    edition: "Campaign 02 / Studio",
    title: "The room, in a softer key.",
    copy: "A study in shade, placement, and the quiet charge of useful objects.",
    cta: "Visit the studio journal",
    href: "https://example.com/studio-journal",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1600&q=85",
    tone: "dark",
  },
];

const products = [
  {
    number: "01",
    name: "Amber Pourer",
    type: "Hand-blown glass",
    price: "$68",
    href: "https://example.com/amber-pourer",
    image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1000&q=85",
  },
  {
    number: "02",
    name: "Hearth Linen",
    type: "Set of four",
    price: "$42",
    href: "https://example.com/hearth-linen",
    image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1000&q=85",
  },
];

function SmartLink({ label, eyebrow, group, href, accent = false, icon, onTrack }: SmartLinkProps) {
  const Icon = icon === "shop" ? ShoppingBag : icon === "spark" ? Sparkles : ArrowUpRight;
  return (
    <a
      className={`smart-link ${accent ? "smart-link--accent" : ""}`}
      href={href}
      target="_blank"
      rel="noreferrer"
      onClick={() => onTrack({ label, group, destination: href })}
    >
      <span className="smart-link__icon" aria-hidden="true"><Icon size={17} strokeWidth={1.8} /></span>
      <span className="smart-link__copy">
        <span className="smart-link__eyebrow">{eyebrow}</span>
        <span className="smart-link__title">{label}</span>
      </span>
      <ArrowUpRight className="smart-link__arrow" size={18} strokeWidth={1.8} aria-hidden="true" />
    </a>
  );
}

export default function Home() {
  const [activeCampaign, setActiveCampaign] = useState(0);
  const [events, setEvents] = useState<ClickEvent[]>([]);
  const [email, setEmail] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState<"idle" | "success">("idle");
  const campaign = campaigns[activeCampaign];

  const recordClick = ({ label, group, destination }: Omit<ClickEvent, "time">) => {
    const event = { label, group, destination, time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) };
    setEvents((current) => [event, ...current].slice(0, 3));
    window.dispatchEvent(new CustomEvent("aurelia:smart-link", { detail: event }));
  };

  const nextCampaign = (direction: "next" | "previous") => {
    setActiveCampaign((current) => direction === "next" ? (current + 1) % campaigns.length : (current - 1 + campaigns.length) % campaigns.length);
  };

  const submitNewsletter = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email.trim()) {
      setSubscribeStatus("success");
      setEmail("");
    }
  };

  return (
    <main className="aurelia-page">
      <div className="aurelia-noise" aria-hidden="true" />
      <a className="skip-main" href="#top-links">Skip featured campaign</a>

      <aside className="identity-rail" aria-label="Aurelia brand identity">
        <div className="identity-rail__top">
          <span className="brand-mark" role="img" aria-label="Aurelia open-ring symbol" />
          <p className="brand-name">Aurelia<span>Studio</span></p>
        </div>
        <div className="identity-rail__bottom">
          <span>01—08 / 2026</span>
          <span>Made for the everyday</span>
        </div>
      </aside>

      <div className="content-rail">
        <header className="intro">
          <div className="intro__line"><span>Independent objects</span><span>New York / Everywhere</span></div>
          <div className="intro__main">
            <div className="identity-mobile">
              <span className="brand-mark" role="img" aria-label="Aurelia open-ring symbol" />
              <span>Aurelia Studio</span>
            </div>
            <p className="intro__kicker">This is the current room.</p>
            <h1>A quiet place for the things we are making, keeping, and noticing.</h1>
            <p className="intro__description">Aurelia makes considered objects and useful rituals for the daylight hours. Follow the thread that suits you.</p>
          </div>
        </header>

        <section className="campaign-section" id="campaigns" aria-labelledby="campaign-heading">
          <div className="section-heading section-heading--light">
            <div>
              <span className="section-heading__number">01</span>
              <p id="campaign-heading">Featured / now showing</p>
            </div>
            <div className="campaign-controls">
              <span aria-live="polite" className="campaign-position">{String(activeCampaign + 1).padStart(2, "0")} / {String(campaigns.length).padStart(2, "0")}</span>
              <button type="button" onClick={() => nextCampaign("previous")} aria-label="Show previous campaign"><ArrowLeft size={19} /></button>
              <button type="button" onClick={() => nextCampaign("next")} aria-label="Show next campaign"><ArrowRight size={19} /></button>
            </div>
          </div>

          <article className={`campaign-card campaign-card--${campaign.tone}`}>
            <img src={campaign.image} alt="" className="campaign-card__image" />
            <div className="campaign-card__scrim" aria-hidden="true" />
            <div className="campaign-card__body" aria-live="polite">
              <p>{campaign.edition}</p>
              <h2>{campaign.title}</h2>
              <span>{campaign.copy}</span>
              <a href={campaign.href} target="_blank" rel="noreferrer" onClick={() => recordClick({ label: campaign.cta, group: "Featured campaign", destination: campaign.href })}>
                {campaign.cta}<ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>
          </article>
        </section>

        <section className="link-cluster" id="top-links" aria-labelledby="priority-heading">
          <div className="section-heading">
            <div><span className="section-heading__number">02</span><p id="priority-heading">Priority paths</p></div>
            <span>Choose a direction</span>
          </div>
          <div className="link-stack">
            <SmartLink label="Shop new arrivals" eyebrow="Objects / shop" group="Priority paths" href="https://example.com/new-arrivals" icon="shop" accent onTrack={recordClick} />
            <SmartLink label="Read the field notes" eyebrow="Editorial / journal" group="Priority paths" href="https://example.com/field-notes" icon="spark" onTrack={recordClick} />
          </div>
        </section>

        <section className="shop-section" aria-labelledby="shop-heading">
          <div className="section-heading">
            <div><span className="section-heading__number">03</span><p id="shop-heading">Shoppable / selected pieces</p></div>
            <a href="https://example.com/collection" target="_blank" rel="noreferrer" onClick={() => recordClick({ label: "View full collection", group: "Shop", destination: "https://example.com/collection" })}>View full collection <ArrowUpRight size={14} /></a>
          </div>
          <div className="product-film">
            {products.map((product) => (
              <article className="product-card" key={product.number}>
                <a href={product.href} target="_blank" rel="noreferrer" onClick={() => recordClick({ label: product.name, group: "Shoppable gallery", destination: product.href })} className="product-card__image-link">
                  <img src={product.image} alt={`${product.name}, ${product.type.toLowerCase()}`} />
                  <span className="product-card__number">{product.number}</span>
                  <span className="product-card__shop"><ShoppingBag size={16} /> View piece</span>
                </a>
                <div className="product-card__details"><div><h3>{product.name}</h3><p>{product.type}</p></div><strong>{product.price}</strong></div>
              </article>
            ))}
            <a className="collection-card" href="https://example.com/collection" target="_blank" rel="noreferrer" onClick={() => recordClick({ label: "The complete collection", group: "Shoppable gallery", destination: "https://example.com/collection" })}>
              <span>All / objects</span>
              <strong>The complete collection</strong>
              <ArrowUpRight size={21} />
            </a>
          </div>
        </section>

        <section className="link-cluster link-cluster--quiet" aria-labelledby="explore-heading">
          <div className="section-heading">
            <div><span className="section-heading__number">04</span><p id="explore-heading">Further in</p></div>
            <span>Stories, care, conversations</span>
          </div>
          <div className="link-stack">
            <SmartLink label="Visit the studio journal" eyebrow="Stories / process" group="Further in" href="https://example.com/studio-journal" onTrack={recordClick} />
            <SmartLink label="Care for your objects" eyebrow="Guides / practical" group="Further in" href="https://example.com/care-guide" onTrack={recordClick} />
            <SmartLink label="Arrange a private visit" eyebrow="Appointments / New York" group="Further in" href="https://example.com/private-visit" onTrack={recordClick} />
          </div>
        </section>

        <section className="newsletter" aria-labelledby="newsletter-heading">
          <div className="newsletter__copy">
            <span className="newsletter__number">05 / Correspondence</span>
            <h2 id="newsletter-heading">Occasional notes from the studio.</h2>
            <p>New objects, field notes, and a few things worth keeping close. Sent with restraint.</p>
          </div>
          <form className="newsletter__form" onSubmit={submitNewsletter}>
            <label htmlFor="email">Email address</label>
            <div className="newsletter__row">
              <input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" value={email} onChange={(event) => setEmail(event.target.value)} required />
              <button type="submit" aria-label="Subscribe to Aurelia correspondence"><ArrowUpRight size={21} /></button>
            </div>
            <p className="newsletter__privacy">By subscribing, you agree to receive considered correspondence. Unsubscribe at any time.</p>
            <p className="newsletter__status" role="status" aria-live="polite">{subscribeStatus === "success" && <><Check size={16} /> You’re on the studio list.</>}</p>
          </form>
        </section>

        <footer className="site-footer">
          <div className="social-links" aria-label="Social channels">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" onClick={() => recordClick({ label: "Instagram", group: "Social", destination: "https://instagram.com" })}><Instagram size={17} />Instagram</a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer" onClick={() => recordClick({ label: "TikTok", group: "Social", destination: "https://tiktok.com" })}><Music2 size={16} />TikTok</a>
            <a href="mailto:studio@example.com" onClick={() => recordClick({ label: "Email studio", group: "Social", destination: "mailto:studio@example.com" })}><Mail size={17} />Email studio</a>
          </div>
          <p>© 2026 Aurelia Studio. Built in a quieter register.</p>
        </footer>

        <aside className="tracking-drawer" aria-label="Analytics event preview">
          <div><span className="tracking-drawer__dot" /><span>Analytics-ready events</span></div>
          {events.length === 0 ? <p>Activate a link to preview its event.</p> : <ul>{events.map((event, index) => <li key={`${event.label}-${index}`}><span>{event.time}</span><strong>{event.label}</strong><em>{event.group}</em></li>)}</ul>}
        </aside>
      </div>
    </main>
  );
}

import Link from 'next/link';
import ContactForm from './contact-form';
import { siteContact } from '../content/siteInfo';
import { SERVICES, STOCK_IMAGES } from '../content/siteData';

export function HomePage() {
  return (
    <>
      <section className="home-hero section-reveal">
        <div className="hero-copy">
          <p className="eyebrow">DnD Software</p>
          <h1>AI and software solutions built for business outcomes.</h1>
          <p>
            We provide end-to-end AI and software consulting, from strategy and architecture to
            implementation and continuous improvement.
          </p>
          <div className="hero-actions">
            <Link href="/contact" className="btn btn-primary">
              Book a strategy call
            </Link>
          </div>
        </div>

        <div className="hero-image">
          <img src={STOCK_IMAGES.hero} alt="Enterprise team in strategy workshop" />
        </div>
      </section>

      <section className="section section-reveal">
        <header className="section-head">
          <p className="eyebrow">Core Services</p>
          <h2>Capabilities aligned to enterprise delivery requirements</h2>
        </header>

        <div className="service-list">
          {SERVICES.map((service) => (
            <article key={service.id} className="service-list-row">
              <h3>{service.name}</h3>
              <p>{service.focus}</p>
              <Link href={service.href}>View details</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-reveal">
        <header className="section-head">
          <p className="eyebrow">Our Approach</p>
          <h2>Every engagement follows the same discipline.</h2>
          <p>Three commitments we make to every client.</p>
        </header>

        <div className="approach-grid">
          <article className="approach-card">
            <span>01</span>
            <h3>Scope to outcomes, not hours</h3>
            <p>We agree on what success looks like before any work begins. Every milestone ties to a result your business cares about — not a list of features no one asked for.</p>
          </article>
          <article className="approach-card">
            <span>02</span>
            <h3>Build in the open</h3>
            <p>You see working software regularly, not just at the end. Progress, risks, and every major decision are shared as they happen — no black boxes, no surprises.</p>
          </article>
          <article className="approach-card">
            <span>03</span>
            <h3>Leave you stronger</h3>
            <p>We build systems your team can own and operate without us. That means clear documentation, knowledge transfer, and decisions designed for the long term.</p>
          </article>
        </div>
      </section>

      <section className="section section-reveal">
        <div className="feature-split why-us-split">
          <div className="feature-media">
            <img src={STOCK_IMAGES.operations} alt="Operations command center" />
          </div>
          <div className="feature-copy">
            <p className="eyebrow">Why Us</p>
            <h2>Proven delivery without enterprise overhead.</h2>
            <p>
              You should not need a global-consultancy budget to ship quality software. We keep
              teams lean, timelines short, and every engagement tailored to your business context.
            </p>
            <div className="why-us-grid">
              <article className="why-us-card">
                <span>01</span>
                <h3>Affordable by design</h3>
                <p>Senior-level delivery with no enterprise price tag and no bloated consultancy overhead.</p>
              </article>
              <article className="why-us-card">
                <span>02</span>
                <h3>Fast to meaningful output</h3>
                <p>Weeks to first delivery, not months of discovery. We move quickly without cutting corners on quality.</p>
              </article>
              <article className="why-us-card">
                <span>03</span>
                <h3>Personalized to your project</h3>
                <p>A dedicated team that understands your business, not a rotating bench of unfamiliar faces.</p>
              </article>
              <article className="why-us-card">
                <span>04</span>
                <h3>Industry experience that matters</h3>
                <p>Hands-on delivery across AI, cloud platforms, and enterprise operations reduces ramp-up risk.</p>
              </article>
            </div>
            <div className="why-us-footer">
              <Link href="/about" className="why-us-link">Read more about us &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export function AboutPage() {
  return (
    <>
      <section className="section section-reveal">
        <div className="feature-split">
          <div className="feature-media">
            <img src={STOCK_IMAGES.consulting} alt="Modern office building exterior" />
          </div>
          <div className="feature-copy">
            <p className="eyebrow">About DnD Software</p>
            <h1>A reliable partner for high-quality AI and software implementation.</h1>
            <p>
              We are an AI-first firm that helps organisations implement relevant, practical
              solutions aligned with what actually works in their operations, without the buzz or
              hype.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-reveal">
        <div className="feature-split">
          <div className="feature-copy">
            <p className="eyebrow">Who We Are</p>
            <h2>A knowledgeable team delivering results you can trust with fast, cost-efficient execution.</h2>
            <p>
              Founded by early-career engineers and consultants, we bring a fresh perspective to
              practical, high-impact delivery. Building in South Africa has shown us how often
              teams are held back by tight budgets, infrastructure gaps, and limited access to
              modern tools, and that reality shapes how we work.
              {' '}
              <Link href="/contact" className="accent-link">
                Book a call
              </Link>
              {' '}
              and see for yourself.
            </p>
          </div>
          <div className="feature-media">
            <img src={STOCK_IMAGES.about} alt="Professional consulting session" />
          </div>
        </div>
      </section>

    </>
  );
}

export function ServicesPage() {
  return (
    <>
      <section className="page-hero section-reveal">
        <p className="eyebrow">Services</p>
        <h1>Consulting and implementation services for enterprise-scale technology goals.</h1>
        <p>
          Our team supports the full delivery lifecycle from strategy to production systems and
          ongoing operational optimization.
        </p>
      </section>

      <section className="section section-reveal">
        <header className="section-head">
          <p className="eyebrow">Service Portfolio</p>
          <h2>How we support client teams</h2>
        </header>

        <div className="table-wrap">
          <table className="services-table">
            <thead>
              <tr>
                <th>Service</th>
                <th>Focus</th>
                <th>Typical Deliverables</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {SERVICES.map((service) => (
                <tr key={service.id}>
                  <td>{service.name}</td>
                  <td>{service.focus}</td>
                  <td>{service.deliverables}</td>
                  <td>
                    <Link href={service.href}>Open</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section section-reveal">
        <header className="section-head">
          <p className="eyebrow">Engagement Structures</p>
          <h2>Flexible delivery models</h2>
        </header>

        <div className="engagement-list">
          <article>
            <h3>Advisory Sprint</h3>
            <p>Short, focused engagements for opportunity mapping and strategic direction.</p>
          </article>
          <article>
            <h3>Implementation Program</h3>
            <p>Milestone-driven delivery with architecture, build, and deployment phases.</p>
          </article>
          <article>
            <h3>Managed Optimization</h3>
            <p>Post-launch support focused on performance, adoption, and roadmap expansion.</p>
          </article>
        </div>
      </section>

    </>
  );
}

export function ServiceDetailPage({ eyebrow, title, summary, image, examples }) {
  return (
    <>
      <section className="detail-hero section-reveal">
        <div className="detail-copy">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{summary}</p>
          <div className="hero-actions">
            <Link href="/contact" className="btn btn-primary">
              Get in touch
            </Link>
          </div>
        </div>
        <div className="detail-image">
          <img src={image} alt={`${title} stock visual`} />
        </div>
      </section>

      <section className="section section-reveal">
        <div className="section-head">
          <h2>Solution Areas</h2>
        </div>
        <div className="service-example-grid">
          {examples.map((item) => (
            <article key={item.title} className="service-example-card">
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

    </>
  );
}

export function ContactPage() {
  return (
    <>
      <section className="page-hero section-reveal">
        <p className="eyebrow">Contact</p>
        <h1>Speak with our team about your project goals.</h1>
        <p>
          We help organisations scope initiatives clearly and move from planning to delivery with
          confidence.
        </p>
      </section>

      <section className="contact-layout section-reveal">
        <aside className="contact-aside">
          <img src={STOCK_IMAGES.contact} alt="Business district office towers" />
          <div className="contact-aside-content">
            <h3>Direct Contact</h3>
            <ul>
              <li>
                <span>Email</span>
                <a href={`mailto:${siteContact.email}`}>{siteContact.email}</a>
              </li>
              <li>
                <span>Availability</span>
                <p>Monday to Friday, standard business hours</p>
              </li>
            </ul>
          </div>
        </aside>

        <ContactForm />
      </section>
    </>
  );
}

export function LegalPage({ eyebrow, title, body }) {
  return (
    <section className="page-hero section-reveal legal-page">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p>{body}</p>
    </section>
  );
}

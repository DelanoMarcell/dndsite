import Link from 'next/link';
import ContactForm from './contact-form';
import { siteContact } from '../content/siteInfo';
import { SERVICES, STOCK_IMAGES } from '../content/siteData';

function ContactPanel() {
  return (
    <section className="contact-panel section-reveal">
      <div>
        <p className="eyebrow">Contact</p>
        <h2>Plan your next AI or software initiative with DnD Software.</h2>
        <p>
          Share your priorities and timeline. We will respond with practical next steps and a
          recommended engagement structure.
        </p>
      </div>

      <div className="contact-panel-actions">
        <a href={`mailto:${siteContact.email}`} className="btn btn-primary">
          {siteContact.email}
        </a>
        <a href={`tel:${siteContact.phoneHref}`} className="btn btn-secondary">
          {siteContact.phoneDisplay}
        </a>
      </div>
    </section>
  );
}

export function HomePage() {
  return (
    <>
      <section className="home-hero section-reveal">
        <div className="hero-copy">
          <p className="eyebrow">DnD Software</p>
          <h1>Enterprise AI and software delivery with accountability at every milestone.</h1>
          <p>
            We partner with leadership and technical teams to plan, build, and operate reliable
            AI-enabled systems that improve operations and customer experience.
          </p>
          <div className="hero-actions">
            <Link href="/contact" className="btn btn-primary">
              Book a strategy call
            </Link>
            <Link href="/services" className="btn btn-secondary">
              View services
            </Link>
          </div>
          <ul className="hero-notes">
            <li>Advisory and implementation under one team</li>
            <li>Structured milestone delivery with executive visibility</li>
            <li>Post-launch optimization and support</li>
          </ul>
        </div>

        <div className="hero-image">
          <img src={STOCK_IMAGES.hero} alt="Enterprise team in strategy workshop" />
        </div>
      </section>

      <section className="proof-strip section-reveal" aria-label="Delivery proof points">
        <article>
          <span>Delivery Model</span>
          <strong>Strategy to production</strong>
        </article>
        <article>
          <span>Engagement Flexibility</span>
          <strong>Advisory, build, and managed support</strong>
        </article>
        <article>
          <span>Coverage</span>
          <strong>AI systems and product engineering</strong>
        </article>
        <article>
          <span>Operating Focus</span>
          <strong>Reliability, governance, measurable outcomes</strong>
        </article>
      </section>

      <section className="client-strip section-reveal" aria-label="Industries">
        <p>Working across operationally complex industries:</p>
        <ul>
          <li>Financial Services</li>
          <li>Professional Services</li>
          <li>Logistics</li>
          <li>Healthcare</li>
          <li>Property & Facilities</li>
          <li>E-commerce</li>
        </ul>
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
              <p>{service.deliverables}</p>
              <Link href={service.href}>View details</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-reveal">
        <header className="section-head">
          <p className="eyebrow">Delivery Framework</p>
          <h2>How we execute engagements</h2>
        </header>

        <div className="execution-rows">
          <article>
            <span>01</span>
            <div>
              <h3>Assess</h3>
              <p>Clarify business objectives, technical constraints, and measurable success metrics.</p>
            </div>
          </article>
          <article>
            <span>02</span>
            <div>
              <h3>Design</h3>
              <p>Define architecture, operating model, governance controls, and rollout approach.</p>
            </div>
          </article>
          <article>
            <span>03</span>
            <div>
              <h3>Implement</h3>
              <p>Deliver in accountable milestones with regular demonstrations and risk visibility.</p>
            </div>
          </article>
          <article>
            <span>04</span>
            <div>
              <h3>Scale</h3>
              <p>Support adoption, optimize performance, and expand scope based on measured outcomes.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="section section-reveal">
        <div className="feature-split">
          <div className="feature-media">
            <img src={STOCK_IMAGES.operations} alt="Operations command center" />
          </div>
          <div className="feature-copy">
            <p className="eyebrow">Operational Excellence</p>
            <h2>Built for teams that need predictable delivery, not experimentation theatre.</h2>
            <p>
              Our engagements are structured around business outcomes, operating constraints,
              compliance expectations, and adoption support.
            </p>
            <ul>
              <li>Clear ownership model for delivery and governance</li>
              <li>Documentation and handover for internal teams</li>
              <li>Roadmap continuity beyond initial deployment</li>
            </ul>
          </div>
        </div>
      </section>

      <ContactPanel />
    </>
  );
}

export function AboutPage() {
  return (
    <>
      <section className="page-hero section-reveal">
        <p className="eyebrow">About DnD Software</p>
        <h1>A delivery-focused technology partner for ambitious organizations.</h1>
        <p>
          We combine advisory rigor and implementation capability to help companies modernize
          operations through software engineering and practical AI adoption.
        </p>
      </section>

      <section className="section section-reveal">
        <div className="feature-split">
          <div className="feature-copy">
            <p className="eyebrow">Who We Are</p>
            <h2>Cross-functional teams that understand business, technology, and execution risk.</h2>
            <p>
              DnD Software works with decision-makers and delivery teams to align initiatives with
              measurable outcomes and long-term maintainability.
            </p>
            <ul>
              <li>Executive-ready communication and reporting</li>
              <li>Engineering decisions tied to operational impact</li>
              <li>Pragmatic rollout planning with adoption support</li>
            </ul>
          </div>
          <div className="feature-media">
            <img src={STOCK_IMAGES.about} alt="Professional consulting session" />
          </div>
        </div>
      </section>

      <section className="section section-reveal">
        <header className="section-head">
          <p className="eyebrow">Operating Principles</p>
          <h2>What clients can expect during every engagement</h2>
        </header>

        <div className="execution-rows">
          <article>
            <span>01</span>
            <div>
              <h3>Outcome-first planning</h3>
              <p>Scope is always tied to business impact, not just technical output.</p>
            </div>
          </article>
          <article>
            <span>02</span>
            <div>
              <h3>Engineering quality</h3>
              <p>Solutions are built for stability, security, and long-term maintainability.</p>
            </div>
          </article>
          <article>
            <span>03</span>
            <div>
              <h3>Delivery transparency</h3>
              <p>Stakeholders receive clear progress updates, risks, and tradeoff decisions.</p>
            </div>
          </article>
          <article>
            <span>04</span>
            <div>
              <h3>Continuous improvement</h3>
              <p>Support continues post-launch through optimization and roadmap extension.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="section section-reveal">
        <div className="two-col-table">
          <div>
            <h3>What sets DnD Software apart</h3>
            <p>Balanced advisory and implementation capability under one accountable team.</p>
          </div>
          <div>
            <ul>
              <li>Business-aligned AI strategy and execution</li>
              <li>Custom software delivery for core operations</li>
              <li>Governance-minded systems architecture</li>
              <li>Long-term partnership model</li>
            </ul>
          </div>
        </div>
      </section>

      <ContactPanel />
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

      <ContactPanel />
    </>
  );
}

export function ServiceDetailPage({ eyebrow, title, summary, image, outcomes, deliverables, stack }) {
  return (
    <>
      <section className="detail-hero section-reveal">
        <div className="detail-copy">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{summary}</p>
          <div className="hero-actions">
            <Link href="/contact" className="btn btn-primary">
              Discuss this service
            </Link>
            <Link href="/services" className="btn btn-secondary">
              Back to all services
            </Link>
          </div>
        </div>
        <div className="detail-image">
          <img src={image} alt={`${title} stock visual`} />
        </div>
      </section>

      <section className="section section-reveal">
        <div className="two-col-table">
          <div>
            <h3>Business outcomes</h3>
            <ul>
              {outcomes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Scope of delivery</h3>
            <ul>
              {deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-reveal">
        <header className="section-head">
          <p className="eyebrow">Typical Program Structure</p>
          <h2>Execution phases</h2>
        </header>

        <div className="phase-grid">
          <article>
            <span>01</span>
            <h3>Discovery</h3>
            <p>Requirements mapping and scope alignment.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Architecture</h3>
            <p>Solution design, controls, and integration planning.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Delivery</h3>
            <p>Build and validation in milestone increments.</p>
          </article>
          <article>
            <span>04</span>
            <h3>Operate</h3>
            <p>Enablement, monitoring, and continuous optimization.</p>
          </article>
        </div>
      </section>

      <section className="section section-reveal">
        <header className="section-head">
          <p className="eyebrow">Technology Familiarity</p>
          <h2>Platforms and tools we work with</h2>
        </header>

        <div className="stack-list" aria-label="Technology stack">
          {stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <ContactPanel />
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
          We help organizations scope initiatives clearly and move from planning to delivery with
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
                <span>Phone</span>
                <a href={`tel:${siteContact.phoneHref}`}>{siteContact.phoneDisplay}</a>
              </li>
              <li>
                <span>Availability</span>
                <p>Monday to Friday, standard business hours</p>
              </li>
              <li>
                <span>Delivery</span>
                <p>Remote-first engagement across global teams</p>
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

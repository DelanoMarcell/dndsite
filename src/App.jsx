import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, Outlet, Route, Routes, useLocation } from 'react-router-dom';

const STOCK_IMAGES = {
  hero: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1720&q=80',
  operations: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1400&q=80',
  about: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1500&q=80',
  consulting: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80',
  software: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80',
  generative: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80',
  contact: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80',
};

const SERVICES = [
  {
    id: 'generative-ai',
    name: 'Generative AI & Agents',
    focus: 'AI assistants and workflow automation for internal and customer-facing operations',
    deliverables: 'RAG systems, agent orchestration, guardrails, observability, governance',
    href: '/services/generative-ai',
  },
  {
    id: 'consulting',
    name: 'AI Consulting & Strategy',
    focus: 'Executive advisory, roadmap definition, and implementation planning',
    deliverables: 'Opportunity mapping, business case modeling, risk planning, rollout roadmap',
    href: '/services/consulting',
  },
  {
    id: 'software',
    name: 'Software Development',
    focus: 'Custom product and platform engineering aligned to business operations',
    deliverables: 'Web applications, API integrations, cloud architecture, performance hardening',
    href: '/services/software',
  },
];

function useSectionReveal(trigger) {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll('.section-reveal'));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );

    nodes.forEach((node) => {
      node.classList.remove('is-visible');
      observer.observe(node);
    });

    return () => observer.disconnect();
  }, [trigger]);
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"
        fill="currentColor"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
        fill="currentColor"
      />
    </svg>
  );
}

function navClass(isActive) {
  return `nav-link${isActive ? ' active' : ''}`;
}

function SiteLayout() {
  const location = useLocation();
  const navRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useSectionReveal(location.pathname);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!navRef.current?.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <div className="header-meta">
          <div className="meta-shell">
            <p>Enterprise AI and software partner</p>
            <div>
              <a href="mailto:info@dndsoftware.com">info@dndsoftware.com</a>
              <span>•</span>
              <a href="tel:+1234567890">+1 (234) 567-890</a>
            </div>
          </div>
        </div>

        <div className="header-main" ref={navRef}>
          <Link className="brand" to="/" aria-label="DnD Software home">
            <img src="/assets/logo_500px_500px_black.svg" alt="DnD Software logo" />
            <div className="brand-copy">
              <strong>DnD Software</strong>
              <span>AI Consulting and Product Engineering</span>
            </div>
          </Link>

          <button
            className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            aria-controls="nav-panel"
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>

          <div id="nav-panel" className={`nav-panel ${menuOpen ? 'open' : ''}`}>
            <nav className="main-nav" aria-label="Primary">
              <NavLink to="/" end className={({ isActive }) => navClass(isActive)} onClick={closeMenu}>
                Home
              </NavLink>
              <NavLink to="/about" className={({ isActive }) => navClass(isActive)} onClick={closeMenu}>
                About
              </NavLink>
              <NavLink to="/services" className={({ isActive }) => navClass(isActive)} onClick={closeMenu}>
                Services
              </NavLink>
              <a
                href="https://chatbotz.co.za"
                target="_blank"
                rel="noreferrer noopener"
                className="nav-link"
                onClick={closeMenu}
              >
                Product
              </a>
              <NavLink to="/contact" className={({ isActive }) => navClass(isActive)} onClick={closeMenu}>
                Contact
              </NavLink>
            </nav>

            <NavLink to="/contact" className="btn btn-primary nav-cta" onClick={closeMenu}>
              Book a Call
            </NavLink>
          </div>
        </div>
      </header>

      <main className="site-main">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="footer-shell">
          <div className="footer-callout">
            <div>
              <p className="eyebrow">Start a Conversation</p>
              <h2>Discuss your AI and software priorities with DnD Software.</h2>
            </div>
            <Link to="/contact" className="btn btn-primary">
              Speak with our team
            </Link>
          </div>

          <div className="footer-grid">
            <div className="footer-brand">
              <img src="/assets/logo_500px_500px_white.svg" alt="DnD Software" className="footer-logo" />
              <p>
                DnD Software delivers enterprise AI and custom software solutions with strong
                planning, accountable delivery, and long-term support.
              </p>
              <div className="footer-social">
                <a
                  href="https://linkedin.com/company/dndsoftware"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon />
                </a>
                <a href="https://x.com/dndsoftware" target="_blank" rel="noreferrer noopener" aria-label="X">
                  <XIcon />
                </a>
              </div>
            </div>

            <div className="footer-col">
              <h4>Services</h4>
              <ul>
                <li>
                  <Link to="/services/generative-ai">Generative AI & Agents</Link>
                </li>
                <li>
                  <Link to="/services/software">Software Development</Link>
                </li>
                <li>
                  <Link to="/services/consulting">AI Consulting & Strategy</Link>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li>
                  <Link to="/about">About DnD Software</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <a href="https://chatbotz.co.za" target="_blank" rel="noreferrer noopener">
                    Chatbotz Platform
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Contact</h4>
              <ul>
                <li>
                  <a href="mailto:info@dndsoftware.com">info@dndsoftware.com</a>
                </li>
                <li>
                  <a href="tel:+1234567890">+1 (234) 567-890</a>
                </li>
                <li>Monday to Friday</li>
                <li>Global remote delivery</li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} DnD Software. All rights reserved.</p>
            <div className="footer-legal">
              <Link to="/privacy-policy">Privacy Policy</Link>
              <span>•</span>
              <Link to="/terms">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

function HomePage() {
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
            <Link to="/contact" className="btn btn-primary">
              Book a strategy call
            </Link>
            <Link to="/services" className="btn btn-secondary">
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
              <Link to={service.href}>View details</Link>
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

function AboutPage() {
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

function ServicesPage() {
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
                    <Link to={service.href}>Open</Link>
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

function ServiceDetailPage({ eyebrow, title, summary, image, outcomes, deliverables, stack }) {
  return (
    <>
      <section className="detail-hero section-reveal">
        <div className="detail-copy">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{summary}</p>
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-primary">
              Discuss this service
            </Link>
            <Link to="/services" className="btn btn-secondary">
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
        <a href="mailto:info@dndsoftware.com" className="btn btn-primary">
          info@dndsoftware.com
        </a>
        <a href="tel:+1234567890" className="btn btn-secondary">
          +1 (234) 567-890
        </a>
      </div>
    </section>
  );
}

function ContactPage() {
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
                <a href="mailto:info@dndsoftware.com">info@dndsoftware.com</a>
              </li>
              <li>
                <span>Phone</span>
                <a href="tel:+1234567890">+1 (234) 567-890</a>
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

        <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
          <div>
            <label htmlFor="name">Full name</label>
            <input id="name" name="name" type="text" required />
          </div>
          <div>
            <label htmlFor="email">Work email</label>
            <input id="email" name="email" type="email" required />
          </div>
          <div>
            <label htmlFor="company">Company</label>
            <input id="company" name="company" type="text" />
          </div>
          <div>
            <label htmlFor="service">Service needed</label>
            <select id="service" name="service" defaultValue="">
              <option value="" disabled>
                Select an option
              </option>
              <option value="strategy">AI Consulting & Strategy</option>
              <option value="ai">Generative AI & Agents</option>
              <option value="software">Software Development</option>
              <option value="unsure">Not sure yet</option>
            </select>
          </div>
          <div>
            <label htmlFor="message">Project brief</label>
            <textarea id="message" name="message" rows="6" required />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit enquiry
          </button>
        </form>
      </section>
    </>
  );
}

function LegalPage({ eyebrow, title, body }) {
  return (
    <section className="page-hero section-reveal legal-page">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p>{body}</p>
    </section>
  );
}

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="services" element={<ServicesPage />} />

        <Route
          path="services/generative-ai"
          element={
            <ServiceDetailPage
              eyebrow="Generative AI & Agents"
              title="Deploy intelligent assistants and workflows grounded in your business data"
              summary="We design and operationalize AI systems that retrieve trusted information, complete multi-step tasks, and integrate with the platforms your teams already use."
              image={STOCK_IMAGES.generative}
              outcomes={[
                'Reduced repetitive manual effort across core workflows',
                'Higher consistency in internal and customer support responses',
                'Faster decision support with role-specific AI copilots',
              ]}
              deliverables={[
                'Knowledge integration and RAG architecture design',
                'Agent workflow orchestration and control patterns',
                'Evaluation methodology, guardrails, and observability setup',
                'Operational governance and handover documentation',
              ]}
              stack={['OpenAI', 'Anthropic', 'Google', 'LangChain', 'n8n', 'Vector Databases']}
            />
          }
        />

        <Route
          path="services/consulting"
          element={
            <ServiceDetailPage
              eyebrow="AI Consulting & Strategy"
              title="Build a practical AI roadmap with clear priorities and measurable value"
              summary="We work with leadership teams to identify high-impact use cases, align stakeholders, and define an executable plan for implementation and adoption."
              image={STOCK_IMAGES.consulting}
              outcomes={[
                'Clear prioritization of near-term and long-term AI opportunities',
                'Reduced delivery risk through staged rollout planning',
                'Improved alignment between business and technical teams',
              ]}
              deliverables={[
                'Readiness assessment and opportunity discovery',
                'Business value modeling and initiative ranking',
                'Governance, risk, and compliance framework recommendations',
                'Delivery roadmap and change management plan',
              ]}
              stack={['Roadmapping', 'Governance', 'Risk Management', 'Change Enablement']}
            />
          }
        />

        <Route
          path="services/software"
          element={
            <ServiceDetailPage
              eyebrow="Software Development"
              title="Engineer reliable software platforms that support operational growth"
              summary="From custom applications to integrated ecosystems, we build and modernize systems that are maintainable, scalable, and aligned to business-critical operations."
              image={STOCK_IMAGES.software}
              outcomes={[
                'Modernized systems with improved scalability and resilience',
                'Better operational visibility through integrated platforms',
                'Faster delivery cycles supported by robust engineering practices',
              ]}
              deliverables={[
                'Custom web and platform application development',
                'Systems integration and API orchestration',
                'Cloud architecture and deployment enablement',
                'Performance, reliability, and security hardening',
              ]}
              stack={['React', 'Node.js', 'Python', 'AWS', 'Docker', 'PostgreSQL', 'GraphQL']}
            />
          }
        />

        <Route path="contact" element={<ContactPage />} />

        <Route
          path="privacy-policy"
          element={
            <LegalPage
              eyebrow="Privacy"
              title="Privacy Policy"
              body="DnD Software processes information responsibly and uses client data only for agreed service delivery, communication, and compliance requirements."
            />
          }
        />

        <Route
          path="terms"
          element={
            <LegalPage
              eyebrow="Legal"
              title="Terms of Service"
              body="Commercial terms, service scope, responsibilities, and delivery commitments are agreed formally before any project work begins."
            />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;

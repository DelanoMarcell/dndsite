'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteContact, siteUpdates, siteUpdateSettings } from '../content/siteInfo';

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

function useSectionReveal(pathname) {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll('.section-reveal'));
    if (!nodes.length) {
      return undefined;
    }

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
  }, [pathname]);
}

function navClass(isActive) {
  return `nav-link${isActive ? ' active' : ''}`;
}

function normalizePath(path) {
  if (!path || path === '/') {
    return '/';
  }

  return path.endsWith('/') ? path.slice(0, -1) : path;
}

function isActivePath(pathname, href, { includeChildren = false } = {}) {
  const normalizedPathname = normalizePath(pathname);
  const normalizedHref = normalizePath(href);

  if (normalizedHref === '/') {
    return normalizedPathname === '/';
  }

  if (includeChildren) {
    return (
      normalizedPathname === normalizedHref ||
      normalizedPathname.startsWith(`${normalizedHref}/`)
    );
  }

  return normalizedPathname === normalizedHref;
}

function isExternalHref(href) {
  return typeof href === 'string' && /^https?:\/\//.test(href);
}

function AnnouncementAction({ update }) {
  if (!update.ctaHref || !update.ctaLabel) {
    return null;
  }

  if (update.external || isExternalHref(update.ctaHref)) {
    return (
      <a href={update.ctaHref} className="announcement-link" target="_blank" rel="noreferrer noopener">
        {update.ctaLabel}
      </a>
    );
  }

  return (
    <Link href={update.ctaHref} className="announcement-link">
      {update.ctaLabel}
    </Link>
  );
}

export default function SiteLayoutClient({ children }) {
  const pathname = usePathname() || '/';
  const navRef = useRef(null);
  const footerRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [carouselTransitionEnabled, setCarouselTransitionEnabled] = useState(true);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  const activeUpdates = siteUpdateSettings.enabled
    ? siteUpdates.filter((update) => update && update.message)
    : [];
  const rotatingUpdates =
    activeUpdates.length > 1 ? [...activeUpdates, activeUpdates[0]] : activeUpdates;
  const activeDotIndex = activeUpdates.length > 0 ? carouselIndex % activeUpdates.length : 0;

  useSectionReveal(pathname);

  useEffect(() => {
    setMenuOpen(false);
    setProductsOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setCarouselIndex(0);
    setCarouselTransitionEnabled(true);
  }, [activeUpdates.length]);

  useEffect(() => {
    if (!siteUpdateSettings.autoRotate || activeUpdates.length < 2) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      if (carouselIndex >= activeUpdates.length) {
        setCarouselTransitionEnabled(false);
        setCarouselIndex(0);
        window.requestAnimationFrame(() => {
          window.requestAnimationFrame(() => {
            setCarouselTransitionEnabled(true);
            setCarouselIndex(1);
          });
        });
        return;
      }

      setCarouselTransitionEnabled(true);
      setCarouselIndex((value) => value + 1);
    }, siteUpdateSettings.intervalMs);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [
    activeUpdates.length,
    carouselIndex,
    siteUpdateSettings.autoRotate,
    siteUpdateSettings.intervalMs,
  ]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!navRef.current?.contains(event.target)) {
        setMenuOpen(false);
        setProductsOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        setProductsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle('has-bottom-sticky-updates', activeUpdates.length > 0);

    return () => {
      document.body.classList.remove('has-bottom-sticky-updates');
    };
  }, [activeUpdates.length]);

  useEffect(() => {
    const footerNode = footerRef.current;
    if (!footerNode) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsFooterVisible(Boolean(entry?.isIntersecting));
      },
      { threshold: 0.02 }
    );

    observer.observe(footerNode);

    return () => {
      observer.disconnect();
      setIsFooterVisible(false);
    };
  }, [pathname]);

  const closeMenu = () => {
    setMenuOpen(false);
    setProductsOpen(false);
  };

  return (
    <>
      <header className="site-header">
        <div className="header-main" ref={navRef}>
          <Link className="brand" href="/" aria-label="DnD Software home">
            <img src="/assets/logo_500px_500px_black.svg" alt="DnD Software logo" />
            <div className="brand-copy">
              <strong>DnD Software</strong>
              <span>AI and Software Consulting</span>
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
              <Link
                href="/"
                className={navClass(isActivePath(pathname, '/'))}
                aria-current={isActivePath(pathname, '/') ? 'page' : undefined}
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={navClass(isActivePath(pathname, '/about'))}
                aria-current={isActivePath(pathname, '/about') ? 'page' : undefined}
                onClick={closeMenu}
              >
                About
              </Link>
              <Link
                href="/services"
                className={navClass(isActivePath(pathname, '/services', { includeChildren: true }))}
                aria-current={
                  isActivePath(pathname, '/services', { includeChildren: true }) ? 'page' : undefined
                }
                onClick={closeMenu}
              >
                Services
              </Link>
              <div className={`nav-dropdown ${productsOpen ? 'open' : ''}`}>
                <button
                  type="button"
                  className="nav-link nav-dropdown-trigger"
                  aria-expanded={productsOpen}
                  aria-controls="products-dropdown"
                  onClick={() => setProductsOpen((value) => !value)}
                >
                  Products
                  <span className="nav-caret" aria-hidden="true">
                    ▾
                  </span>
                </button>
                <div id="products-dropdown" className="nav-dropdown-menu">
                  <a
                    href="https://chatbotz.co.za"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="nav-dropdown-item"
                    onClick={closeMenu}
                  >
                    Chatbotz Platform
                  </a>
                </div>
              </div>
            </nav>

            <Link href="/contact" className="btn btn-primary nav-cta" onClick={closeMenu}>
              Contact Us
            </Link>
          </div>
        </div>
      </header>

      <main className="site-main">{children}</main>

      {activeUpdates.length > 0 ? (
        <div
          className={`header-meta header-meta-bottom-sticky${isFooterVisible ? ' on-footer' : ''}`}
        >
          <div className="announcement-bar">
            <div className="meta-shell announcement-shell">
              <div className="announcement-viewport" aria-live="polite">
                <div
                  className="announcement-track"
                  style={{
                    transform: `translateX(-${carouselIndex * 100}%)`,
                    transition: carouselTransitionEnabled ? undefined : 'none',
                  }}
                >
                  {rotatingUpdates.map((update, index) => (
                    <div className="announcement-slide" key={`${update.id || 'update'}-${index}`}>
                      <div className="announcement-copy">
                        {update.tag ? <span className="announcement-tag">{update.tag}</span> : null}
                        <p>{update.message}</p>
                      </div>

                      <AnnouncementAction update={update} />
                    </div>
                  ))}
                </div>
              </div>

              {activeUpdates.length > 1 ? (
                <div className="announcement-controls" aria-label="Announcement controls">
                  {activeUpdates.map((update, index) => (
                    <button
                      key={update.id || update.message}
                      type="button"
                      className={`announcement-dot ${index === activeDotIndex ? 'active' : ''}`}
                      aria-label={`Show update ${index + 1}`}
                      aria-current={index === activeDotIndex ? 'true' : undefined}
                      onClick={() => {
                        setCarouselTransitionEnabled(false);
                        setCarouselIndex(index);
                        window.requestAnimationFrame(() => {
                          window.requestAnimationFrame(() => {
                            setCarouselTransitionEnabled(true);
                          });
                        });
                      }}
                    />
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}

      <footer className="site-footer" ref={footerRef}>
        <div className="footer-shell">
          <div className="footer-callout">
            <div>
              <p className="eyebrow">Start a Conversation</p>
              <h2>Discuss your AI and software priorities with DnD Software.</h2>
            </div>
            <Link href="/contact" className="btn btn-primary">
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
                  <Link href="/services/generative-ai">Generative AI & Agents</Link>
                </li>
                <li>
                  <Link href="/services/software">Software Development</Link>
                </li>
                <li>
                  <Link href="/services/consulting">AI Consulting & Strategy</Link>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li>
                  <Link href="/about">About DnD Software</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
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
                  <a href={`mailto:${siteContact.email}`}>{siteContact.email}</a>
                </li>
                <li>
                  <a href={`tel:${siteContact.phoneHref}`}>{siteContact.phoneDisplay}</a>
                </li>
                <li>Monday to Friday</li>
                <li>Global remote delivery</li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} DnD Software. All rights reserved.</p>
            <div className="footer-legal">
              <Link href="/privacy-policy">Privacy Policy</Link>
              <span>•</span>
              <Link href="/terms">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

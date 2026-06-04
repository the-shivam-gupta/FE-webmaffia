"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const HEADER_OFFSET = 100;
const MANUAL_SCROLL_LOCK_MS = 900;

export default function BlogStickyNav({ links }) {
  const [activeHref, setActiveHref] = useState(links[0]?.href ?? "");
  const isManualScrollRef = useRef(false);
  const manualScrollTimerRef = useRef(null);

  const setActiveHrefIfChanged = useCallback((href) => {
    setActiveHref((prev) => (prev === href ? prev : href));
  }, []);

  const lockManualScroll = useCallback(() => {
    isManualScrollRef.current = true;

    if (manualScrollTimerRef.current) {
      clearTimeout(manualScrollTimerRef.current);
    }

    manualScrollTimerRef.current = setTimeout(() => {
      isManualScrollRef.current = false;
      manualScrollTimerRef.current = null;
    }, MANUAL_SCROLL_LOCK_MS);
  }, []);

  const scrollToSection = useCallback(
    (href) => {
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (!el) return;

      lockManualScroll();
      setActiveHrefIfChanged(href);

      const top =
        el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      window.scrollTo({
        top,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });

      window.history.replaceState(null, "", href);

      if (!prefersReducedMotion && "onscrollend" in window) {
        const onScrollEnd = () => {
          isManualScrollRef.current = false;
          if (manualScrollTimerRef.current) {
            clearTimeout(manualScrollTimerRef.current);
            manualScrollTimerRef.current = null;
          }
        };

        window.addEventListener("scrollend", onScrollEnd, { once: true });
      }
    },
    [lockManualScroll, setActiveHrefIfChanged]
  );

  const handleLinkClick = useCallback(
    (event, href) => {
      event.preventDefault();
      scrollToSection(href);
    },
    [scrollToSection]
  );

  useEffect(() => {
    if (!links.length) return undefined;

    const stickyArticle = document.querySelector(
      ".sticky_article_container .sticky_article"
    );
    const blogServices = document.querySelector(
      ".blog_section .blog_services"
    );
    const blogSection = document.querySelector(".blog_section");
    const headerOffset = HEADER_OFFSET;

    const stickyContainer = document.querySelector(
      ".sticky_article_container"
    );

    const onStickyPosition = () => {
      if (!stickyArticle || !blogServices || !blogSection) return;
      const servicesBottom = blogServices.getBoundingClientRect().bottom;
      const sectionBottom = blogSection.getBoundingClientRect().bottom;
      const navHeight = stickyArticle.offsetHeight;
      const shouldFix =
        servicesBottom <= headerOffset &&
        sectionBottom > navHeight + headerOffset + 80;
      stickyArticle.classList.toggle("active", shouldFix);
      if (stickyContainer) {
        stickyContainer.style.minHeight = shouldFix
          ? `${navHeight}px`
          : "";
      }
    };

    onStickyPosition();
    window.addEventListener("scroll", onStickyPosition, { passive: true });

    const sections = links
      .map((link) => {
        const id = link.href.replace("#", "");
        const el = document.getElementById(id);
        return el ? { href: link.href, el } : null;
      })
      .filter(Boolean);

    const onScroll = () => {
      if (!sections.length || isManualScrollRef.current) return;
      const offset = window.innerHeight * 0.25;
      let current = sections[0].href;

      for (const section of sections) {
        if (section.el.getBoundingClientRect().top <= offset) {
          current = section.href;
        }
      }
      setActiveHrefIfChanged(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", onStickyPosition);
      stickyArticle?.classList.remove("active");
      if (manualScrollTimerRef.current) {
        clearTimeout(manualScrollTimerRef.current);
      }
    };
  }, [links, setActiveHrefIfChanged]);

  if (!links.length) return null;

  return (
    <>
      <div className="sticky_top" />
      <div className="sticky_article_container">
        <div className="sticky_article">
          {links.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className={`h6 sticky_link${activeHref === link.href ? " selected" : ""}`}
              onClick={(event) => handleLinkClick(event, link.href)}
            >
              <span className="sticky_link_num">{index + 1}.</span>
              <span className="sticky_link_text">{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

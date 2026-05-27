"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STATIC_PANEL_VW = 62;

/**
 * Mirrors public/assets/js/common.js (PHP homepage GSAP block).
 * Pins main_horizontal, slides hs1 left, service slides into the viewport center.
 */
export function useHomeScrollAnimations(mainHorizontalRef) {
  useEffect(() => {
    const el = mainHorizontalRef.current;
    if (!el) return;

    /** Enough scroll to finish the reveal; capped to limit pin-spacer gap before our_work. */
    const pinScrollDistance = () =>
      Math.min(720, Math.round(window.innerHeight * 0.62));

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 541px)", () => {
        const hs1 = el.querySelector(".hs1");
        const slides = el.querySelectorAll(".ourService-swiper .swiper-slide");
        if (!hs1 || !slides.length) return;

        gsap.set(slides, { left: "auto", right: "-50vw", x: 0 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            pin: true,
            pinSpacing: true,
            start: "top top",
            end: () => `+=${pinScrollDistance()}`,
            scrub: 1.2,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });

        tl.to(hs1, { left: `-${STATIC_PANEL_VW}vw`, duration: 0.5, ease: "none" });
        tl.to(
          slides,
          {
            right: "0",
            left: "auto",
            x: `-${(STATIC_PANEL_VW / 2).toFixed(2)}vw`,
            duration: 0.5,
            ease: "none",
          },
          "<"
        );

        return () => tl.scrollTrigger?.kill();
      });

      mm.add("(max-width: 540px)", () => {
        const hs1 = el.querySelector(".hs1");
        const slides = el.querySelectorAll(".ourService-swiper .swiper-slide");
        if (!hs1 || !slides.length) return;

        gsap.set(slides, { right: "-60vw", top: "50vw" });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            pin: true,
            pinSpacing: true,
            start: "top top",
            end: () => `+=${pinScrollDistance()}`,
            scrub: 2,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });

        tl.to(hs1, { left: "-80vw", duration: 0.5, ease: "none" });
        tl.to(
          slides,
          { right: "0", top: "10vw", duration: 1, ease: "none" },
          "<"
        );

        return () => tl.scrollTrigger?.kill();
      });
    }, el);

    const refresh = () => ScrollTrigger.refresh();
    refresh();
    window.addEventListener("load", refresh);
    window.addEventListener("resize", refresh);

    return () => {
      window.removeEventListener("load", refresh);
      window.removeEventListener("resize", refresh);
      ctx.revert();
    };
  }, [mainHorizontalRef]);
}

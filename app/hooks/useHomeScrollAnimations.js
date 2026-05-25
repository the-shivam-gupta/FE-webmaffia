"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Mirrors public/assets/js/common.js (PHP homepage GSAP block).
 */
export function useHomeScrollAnimations(mainHorizontalRef) {
  useEffect(() => {
    const el = mainHorizontalRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 541px)", () => {
        gsap.set(el.querySelectorAll(".ourService-swiper .swiper-slide"), {
          right: "-50vw",
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            pin: true,
            start: "top top",
            end: "+=3000",
            scrub: 2,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });

        const hs1 = el.querySelector(".hs1");
        const slides = el.querySelectorAll(".ourService-swiper .swiper-slide");
        if (!hs1 || !slides.length) return;

        tl.to(hs1, { left: "-62vw", duration: 0.5, ease: "none" });
        tl.to(slides, { right: 0, duration: 0.5, ease: "none" }, "<");

        return () => tl.kill();
      });

      mm.add("(max-width: 540px)", () => {
        gsap.set(el.querySelectorAll(".ourService-swiper .swiper-slide"), {
          right: "-60vw",
          top: "50vw",
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            pin: true,
            start: "top top",
            end: "+=3000",
            scrub: 2,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });

        const hs1 = el.querySelector(".hs1");
        const slides = el.querySelectorAll(".ourService-swiper .swiper-slide");
        if (!hs1 || !slides.length) return;

        tl.to(hs1, { left: "-80vw", duration: 0.5, ease: "none" });
        tl.to(slides, { right: 0, top: "10vw", duration: 1, ease: "none" }, "<");

        return () => tl.kill();
      });
    }, el);

    const refresh = () => ScrollTrigger.refresh();
    refresh();
    window.addEventListener("load", refresh);

    return () => {
      window.removeEventListener("load", refresh);
      ctx.revert();
    };
  }, [mainHorizontalRef]);
}

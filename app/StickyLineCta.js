"use client";

import { useEffect, useState } from "react";

export default function StickyLineCta() {
  const [isVisible, setIsVisible] = useState(false);
  const [dockTop, setDockTop] = useState(null);

  useEffect(() => {
    const topCta = document.querySelector(".line-cta-shell");

    if (!topCta) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.05
      }
    );

    observer.observe(topCta);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    let frame = 0;

    const updateDockPosition = () => {
      window.cancelAnimationFrame(frame);

      frame = window.requestAnimationFrame(() => {
        const cta = document.querySelector(".sticky-line-cta");
        const stop = document.querySelector(".sticky-line-stop");
        const shell = document.querySelector(".page-shell");

        if (!cta || !stop || !shell) {
          setDockTop(null);
          return;
        }

        const bottomOffset = 10;
        const ctaHeight = cta.getBoundingClientRect().height;
        const fixedTop = window.scrollY + window.innerHeight - bottomOffset - ctaHeight;
        const stopTop = window.scrollY + stop.getBoundingClientRect().top;
        const shellTop = window.scrollY + shell.getBoundingClientRect().top;

        setDockTop(fixedTop >= stopTop ? stopTop - shellTop : null);
      });
    };

    updateDockPosition();
    window.addEventListener("scroll", updateDockPosition, { passive: true });
    window.addEventListener("resize", updateDockPosition);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateDockPosition);
      window.removeEventListener("resize", updateDockPosition);
    };
  }, []);

  return (
    <a
      className={`sticky-line-cta${isVisible ? " is-visible" : ""}${dockTop !== null ? " is-docked" : ""}`}
      href="https://lin.ee/sxHqCyh"
      aria-label="LINE友だち追加"
      style={dockTop !== null ? { top: `${dockTop}px` } : undefined}
    >
      <img src="/assets/line-friend-button-trimmed.png" alt="LINE友だち追加" />
    </a>
  );
}

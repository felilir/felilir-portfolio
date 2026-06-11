"use client";

import { useEffect, useRef } from "react";

export default function CursorFollower() {
  const dotRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Respect prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    const dot = dotRef.current;
    if (!dot) return;

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const onEnterInteractive = () => dot.classList.add("on-interactive");
    const onLeaveInteractive = () => dot.classList.remove("on-interactive");

    window.addEventListener("mousemove", onMove);

    // Attach hover listeners to interactive elements
    const attachListeners = () => {
      const interactives = document.querySelectorAll(
        "a, button, [data-interactive]"
      );
      interactives.forEach((el) => {
        el.addEventListener("mouseenter", onEnterInteractive);
        el.addEventListener("mouseleave", onLeaveInteractive);
      });
    };

    attachListeners();

    // Observe DOM for new interactive elements
    const observer = new MutationObserver(attachListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    let animFrame: number;
    const lerp = 0.1;

    const animate = () => {
      current.current.x += (pos.current.x - current.current.x) * lerp;
      current.current.y += (pos.current.y - current.current.y) * lerp;
      if (dot) {
        dot.style.transform = `translate(${current.current.x - 12}px, ${
          current.current.y - 12
        }px)`;
      }
      animFrame = requestAnimationFrame(animate);
    };

    animFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(animFrame);
      observer.disconnect();
    };
  }, []);

  return <div ref={dotRef} className="cursor-dot hidden md:block" />;
}

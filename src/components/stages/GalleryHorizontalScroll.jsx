import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import "./GalleryHorizontalScroll.css";

gsap.registerPlugin(ScrollTrigger);

// Generic, network-free placeholder items (no real photography needed to
// demo this stage — swap `items` for real images in your own config.js).
const DEFAULT_ITEMS = [
  { label: "Demo image 1", hue: 200 },
  { label: "Demo image 2", hue: 260 },
  { label: "Demo image 3", hue: 320 },
  { label: "Demo image 4", hue: 20 },
  { label: "Demo image 5", hue: 80 },
  { label: "Demo image 6", hue: 140 },
];

export default function GalleryHorizontalScroll({ items }) {
  const rootRef = useRef(null);
  const data = Array.isArray(items) && items.length ? items : DEFAULT_ITEMS;

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const cleanups = []; // <- store listener removals etc.

    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(root);

      // Horizontal scroll section
      const horizontalSections = gsap.utils.toArray(q(".horiz-gallery-wrapper"));
      horizontalSections.forEach((sec) => {
        const pinWrap = sec.querySelector(".horiz-gallery-strip");
        if (!pinWrap) return;

        const refresh = () => {
          const pinWrapWidth = pinWrap.scrollWidth;
          const horizontalScrollLength = pinWrapWidth - window.innerWidth;

          ScrollTrigger.getAll()
            .filter((t) => t.trigger === sec)
            .forEach((t) => t.kill());

          gsap.to(pinWrap, {
            x: -horizontalScrollLength,
            ease: "none",
            // ScrollTrigger key options:
            // - start/end: controls when the horizontal scroll begins/ends
            // - scrub: links animation to scroll position (true = smooth)
            // - pin: keeps the section fixed while the strip moves
            // - invalidateOnRefresh: recompute sizes on resize
            scrollTrigger: {
              trigger: sec,
              pin: sec,
              scrub: true,
              start: "center center",
              end: () => `+=${pinWrapWidth}`,
              invalidateOnRefresh: true,
            },
          });
        };

        refresh();
        ScrollTrigger.addEventListener("refreshInit", refresh);
        cleanups.push(() => ScrollTrigger.removeEventListener("refreshInit", refresh));
      });

      ScrollTrigger.refresh();
    }, rootRef);

    return () => {
      // remove any listeners we attached manually
      cleanups.forEach((fn) => fn());

      // kill all gsap/ScrollTrigger things created inside this context
      ctx.revert();
    };
  }, []);

  return (
    <div className="stage-combo" ref={rootRef}>
      <section id="portfolio">
        <div className="container-fluid">
          <div className="horiz-gallery-wrapper">
            <div className="horiz-gallery-strip">
              {data.map((item, i) => (
                <div className="project-wrap" key={item.src || item.label || i}>
                  {item.src ? (
                    <img src={item.src} alt={item.alt || item.label || ''} />
                  ) : (
                    <div
                      className="project-placeholder"
                      style={{ background: `hsl(${item.hue ?? i * 45}, 55%, 45%)` }}
                    >
                      {item.label || `Demo image ${i + 1}`}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

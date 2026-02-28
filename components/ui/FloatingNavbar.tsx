"use client";

import React, { useEffect, useMemo, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string; // "#about" "#projects"...
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  // visible in hero
  const [visible, setVisible] = useState(true);
  const [active, setActive] = useState<string>("#about");

  // ids from navItems
  const sections = useMemo(
    () =>
      navItems
        .map((n) => (n.link || "").replace("#", ""))
        .filter(Boolean),
    [navItems]
  );

  // show/hide on scroll direction
  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const prev = scrollYProgress.getPrevious() ?? 0;
      const direction = current - prev;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  // ✅ active section observer (SSR safe)
  useEffect(() => {
    if (typeof window === "undefined") return; // ✅ SSR guard
    if (!sections.length) return;

    const els = sections
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        // choose the most visible entry
        const visibleEntries = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0)
          );

        if (visibleEntries[0]?.target?.id) {
          setActive(`#${visibleEntries[0].target.id}`);
        }
      },
      {
        root: null,
        threshold: [0.2, 0.35, 0.5],
      }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [sections]);

  // ✅ smooth scroll (SSR safe)
  const goTo = (hash: string) => {
    if (typeof window === "undefined") return; // ✅ SSR guard
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth", block: "start" });

    // update URL hash without jump
    window.history.replaceState(null, "", hash);
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-10 py-5 rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-4",
          className
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.75)",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        {navItems.map((navItem, idx) => {
          const isActive = active === navItem.link;

          return (
            <button
              key={`link=${idx}`}
              type="button"
              onClick={() => goTo(navItem.link)}
              className={cn(
                "relative flex items-center space-x-1 text-sm font-medium !cursor-pointer transition-colors",
                "text-neutral-200/90 hover:text-white",
                isActive && "text-white"
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="text-sm !cursor-pointer">{navItem.name}</span>

              {isActive && (
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-6 h-[2px] rounded-full bg-purple-400" />
              )}
            </button>
          );
        })}
      </motion.div>
    </AnimatePresence>
  );
};
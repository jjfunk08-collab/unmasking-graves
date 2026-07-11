"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BiohavenLogo } from "./BiohavenLogo";

const NAV = [
  { href: "/#about", label: "About Graves'" },
  { href: "/#symptoms", label: "Symptoms" },
  { href: "/#impact", label: "Impact" },
  { href: "/#treatment", label: "Treatment gap" },
  { href: "/stories", label: "Stories" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on Escape.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled
          ? "border-navy/10 bg-paper/90 backdrop-blur"
          : "border-transparent bg-paper"
      }`}
    >
      <div className="container-wide flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center"
          aria-label="Unmask Graves' Disease — home"
          onClick={() => setOpen(false)}
        >
          <BiohavenLogo variant="full-color" className="h-6 w-auto" />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-navy/80 transition-colors hover:text-navy"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/share"
            className="rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-700"
          >
            Share your story
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-navy lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Primary mobile"
          className="border-t border-navy/10 bg-paper lg:hidden"
        >
          <ul className="container-wide flex flex-col py-3">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-3 text-base font-medium text-navy"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/share"
                className="block rounded-full bg-navy px-5 py-3 text-center text-base font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                Share your story
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

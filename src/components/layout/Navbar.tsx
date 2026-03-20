"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/team", label: "Team" },
  { href: "/evenementen", label: "Evenementen" },
  { href: "/resultaten", label: "Resultaten" },
  { href: "/galerij", label: "Galerij" },
  { href: "/routes", label: "Routes" },
  { href: "/sponsoren", label: "Sponsoren" },
  { href: "/over-ons", label: "Over Ons" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <Image
            src="/images/emte.runningteam.logo-removebg-preview.png"
            alt="EMTE Running Team"
            width={600}
            height={260}
            className="h-28 w-auto sm:h-36"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-emte-green"
                    : "text-emte-gray-700 hover:text-emte-green"
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-emte-yellow"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg text-emte-gray-700 transition-colors hover:bg-emte-gray-100 md:hidden"
          aria-label={mobileOpen ? "Menu sluiten" : "Menu openen"}
        >
          <div className="flex w-5 flex-col gap-[5px]">
            <span
              className={`block h-[2px] rounded-full bg-current transition-all duration-300 ${
                mobileOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[2px] rounded-full bg-current transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[2px] rounded-full bg-current transition-all duration-300 ${
                mobileOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-emte-gray-200 bg-white/95 backdrop-blur-md md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05, duration: 0.25 }}
                >
                  <Link
                    href={link.href}
                    className={`block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                      isActive(link.href)
                        ? "bg-emte-green/5 text-emte-green"
                        : "text-emte-gray-700 hover:bg-emte-gray-50 hover:text-emte-green"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {isActive(link.href) && (
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-emte-yellow" />
                      )}
                      {link.label}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

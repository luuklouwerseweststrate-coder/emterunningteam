import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/team", label: "Team" },
  { href: "/evenementen", label: "Evenementen" },
  { href: "/sponsoren", label: "Sponsoren" },
  { href: "/over-ons", label: "Over Ons" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "Strava", href: "#" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-emte-green-dark text-white">
      {/* Yellow accent bar */}
      <div className="h-1 bg-gradient-to-r from-emte-yellow via-emte-yellow-light to-emte-yellow" />

      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Branding */}
        <div className="mb-12">
          <span className="text-2xl font-extrabold tracking-tight">
            <span className="text-white">EMTE</span>
            <span className="text-emte-yellow">.</span>
            <span className="ml-1 text-lg font-semibold text-white/80">
              Running Team
            </span>
          </span>
          <p className="mt-2 text-sm italic text-white/50">
            Sneller dan de bezorgservice
          </p>
        </div>

        {/* Columns */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-emte-yellow">
              Over Ons
            </h3>
            <p className="text-sm leading-relaxed text-white/70">
              EMTE Running Team is een hardloopteam dat staat voor passie,
              doorzettingsvermogen en plezier. Samen trainen we voor de mooiste
              wedstrijden van Nederland.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-emte-yellow">
              Navigatie
            </h3>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-emte-yellow"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-emte-yellow">
              Contact
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-white/70">
              <li>info@emterunningteam.nl</li>
              <li>+31 6 12345678</li>
              <li>
                Sportlaan 1<br />
                1234 AB Amsterdam
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-emte-yellow">
              Volg Ons
            </h3>
            <ul className="flex flex-col gap-2">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    className="text-sm text-white/70 transition-colors hover:text-emte-yellow"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/40">
            &copy; {year} EMTE Running Team. Alle rechten voorbehouden.
          </p>
          <p className="text-xs text-white/30">
            Met trots gebouwd in Nederland
          </p>
        </div>
      </div>
    </footer>
  );
}

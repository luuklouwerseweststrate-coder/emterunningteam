import Link from "next/link";
import Image from "next/image";
import WestkapelleTower from "@/components/ui/WestkapelleTower";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/team", label: "Team" },
  { href: "/evenementen", label: "Evenementen" },
  { href: "/resultaten", label: "Resultaten" },
  { href: "/galerij", label: "Galerij" },
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
    <footer className="bg-emte-green-dark text-white relative overflow-hidden">
      {/* Yellow accent bar */}
      <div className="h-1 bg-gradient-to-r from-emte-yellow via-emte-yellow-light to-emte-yellow" />

      {/* Tower silhouette - decorative */}
      <div className="absolute right-8 bottom-0 opacity-[0.04] pointer-events-none">
        <WestkapelleTower height={320} color="white" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16">
        {/* Branding */}
        <div className="mb-12">
          <Link href="/">
            <Image
              src="/images/emte.runningteam.logo-removebg-preview.png"
              alt="EMTE Running Team"
              width={320}
              height={140}
              className="h-24 w-auto"
            />
          </Link>
          <p className="mt-2 text-sm italic text-white/50">
            Zaterdag in de kroeg, zondag in de hardloopschoenen
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
              EMTE Running Team is een groep hybride atleten uit Westkapelle.
              Wij combineren zaterdagavonden in de kroeg met zondagochtend-duurlopen.
              Bier en kilometers, dat is onze sport.
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
                Westkapelle<br />
                Zeeland, Nederland
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
            Met trots gebouwd in Westkapelle, Zeeland
          </p>
        </div>
      </div>
    </footer>
  );
}

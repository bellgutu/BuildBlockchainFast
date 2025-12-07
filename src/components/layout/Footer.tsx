import Link from "next/link";
import { Rocket, Twitter, Linkedin } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#proof", label: "Our Work" },
  { href: "#process", label: "Process" },
  { href: "#pricing", label: "Pricing" },
  { href: "#about", label: "About" },
];

export function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 py-8 md:flex-row">
        <div className="flex flex-col items-center gap-4 md:items-start">
          <Link href="#home" className="flex items-center gap-2">
            <Rocket className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold">BuildBlockchainFast</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            hello@buildblockchainfast.com
          </p>
        </div>
        <nav className="flex flex-wrap justify-center gap-4 text-sm font-medium md:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <Twitter className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
      <div className="border-t border-border/40 py-4">
        <p className="text-center text-xs text-muted-foreground">
          © 2025 BuildBlockchainFast. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

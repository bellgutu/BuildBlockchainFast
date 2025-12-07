"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Rocket } from "lucide-react";

const navLinks = [
  { href: "#proof", label: "Our Work" },
  { href: "#process", label: "Process" },
  { href: "#pricing", label: "Pricing" },
  { href: "#about",label: "About" },
  { href: "#faq", label: "FAQ" },
];

const CALENDLY_URL = "https://calendly.com/abelgutu";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header id="home" className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="#home" className="flex items-center gap-2" passHref>
          <Rocket className="h-6 w-6 text-primary" />
          <span className="hidden font-bold sm:inline-block">
            BuildBlockchainFast
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button className="hidden sm:flex" asChild>
            <a href={CALENDLY_URL} target="_blank">
              Book Free Consultation
            </a>
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-4 w-4" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col gap-6 p-6">
                <Link
                  href="#home"
                  className="mb-4 flex items-center gap-2"
                  onClick={() => setIsOpen(false)}
                >
                  <Rocket className="h-6 w-6 text-primary" />
                  <span className="font-bold">BuildBlockchainFast</span>
                </Link>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-lg font-medium text-foreground"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <Button className="mt-4" asChild>
                  <a href={CALENDLY_URL} target="_blank">Book Free Consultation</a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

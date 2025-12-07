import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/your-username/30min";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full bg-gradient-to-b from-secondary/50 via-background/80 to-background"
    >
      <div className="container relative z-10 mx-auto flex min-h-[80vh] flex-col items-center justify-center gap-6 px-4 py-20 text-center md:px-6">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Blockchain MVP in 7 Days. Built by AI, Delivered by Experts.
          </h1>
          <p className="mx-auto mt-6 max-w-[700px] text-lg text-muted-foreground md:text-xl">
            Go from idea to working product in one week. $15,000.
            <span className="font-bold text-accent">
              {" "}
              First 3 clients: $12,000.
            </span>
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button size="lg" asChild>
            <a href={CALENDLY_URL} target="_blank">
              Book Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#proof">
              See Our Work
              <ArrowDown className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

import { Button } from "@/components/ui/button";
import { NextSlot } from "@/components/NextSlot";
import { ArrowRight } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/your-username/30min";

export function Cta() {
  return (
    <section id="cta" className="py-24 sm:py-32">
      <div className="container text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="bg-gradient-to-br from-primary via-accent to-primary bg-clip-text text-3xl font-bold tracking-tighter text-transparent sm:text-4xl md:text-5xl">
            Stop Waiting. Start Building.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Next available slot: <NextSlot />
          </p>
          <Button size="lg" className="mt-8" asChild>
            <a href={CALENDLY_URL} target="_blank">
              Claim Your Slot
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <p className="mt-4 text-sm font-semibold text-accent">
            Only 2 of 3 discounted slots remaining
          </p>
        </div>
      </div>
    </section>
  );
}

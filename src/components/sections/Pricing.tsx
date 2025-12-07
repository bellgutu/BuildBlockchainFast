import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/your-username/30min";

const includes = [
  "Complete smart contract suite",
  "Working frontend interface",
  "Testnet deployment",
  "Technical documentation",
  "7-day delivery guarantee",
];

export function Pricing() {
  return (
    <section id="pricing" className="container py-24 sm:py-32">
      <div className="mx-auto max-w-md text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Simple Pricing
        </h2>
        <p className="mb-8 text-muted-foreground">
          One package, one price. Everything you need to launch.
        </p>

        <Card className="border-2 border-primary shadow-lg shadow-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl">7-Day MVP Package</CardTitle>
            <CardDescription>For the first 3 clients</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-4xl font-bold">
              <span className="text-2xl text-muted-foreground line-through">
                $15,000
              </span>{" "}
              $12,000
            </div>
            <ul className="space-y-2 text-left">
              {includes.map((item) => (
                <li key={item} className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full" size="lg" asChild>
              <a href={CALENDLY_URL} target="_blank">Book Your MVP</a>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}

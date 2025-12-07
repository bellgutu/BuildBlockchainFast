import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    title: "RWA Verification Protocol",
    name: "Proof Ledger",
    description:
      "Complete Continuous Verifiable Reality framework with oracle network, digital twins, and parametric insurance.",
    tags: ["#RWA", "#Oracles", "#Commodities", "#Insurance"],
    link: "#",
  },
  {
    title: "Full DeFi Protocol",
    name: "DeFi Trading Suite",
    description:
      "Perpetual swaps, AMM DEX, liquidity pools - a complete, production-ready trading infrastructure.",
    tags: ["#DeFi", "#Trading", "#AMM", "#Liquidity"],
    link: "#",
  },
  {
    title: "Luxury Goods Authentication",
    name: "Lux Vault",
    description:
      "NFT digital twins for luxury watches with instant verification and robust provenance tracking on-chain.",
    tags: ["#Luxury", "#NFT", "#Authentication", "#Web3"],
    link: "#",
  },
];

export function Proof() {
  return (
    <section id="proof" className="bg-secondary/30 py-24 sm:py-32">
      <div className="container">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          We've Built What Others Only Write Whitepapers About
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <Card
              key={study.name}
              className="flex flex-col transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/20"
            >
              <CardHeader>
                <CardTitle>{study.name}</CardTitle>
                <CardDescription>{study.title}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{study.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="link" asChild className="p-0">
                  <a href={study.link} target="_blank" rel="noopener noreferrer">
                    View Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

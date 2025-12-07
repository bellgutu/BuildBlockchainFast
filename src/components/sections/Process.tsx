import {
  MessageSquare,
  Network,
  Cpu,
  Rocket,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const processSteps = [
  {
    day: "Day 1",
    title: "Consultation",
    description: "We dive deep to understand your vision, goals, and requirements.",
    icon: <MessageSquare className="mb-4 h-12 w-12 text-primary" />,
  },
  {
    day: "Day 2",
    title: "Architecture",
    description: "We design the complete system, from smart contracts to frontend.",
    icon: <Network className="mb-4 h-12 w-12 text-primary" />,
  },
  {
    day: "Days 3-6",
    title: "AI Development",
    description: "Our AI-powered methodology builds your product at unprecedented speed.",
    icon: <Cpu className="mb-4 h-12 w-12 text-primary" />,
  },
  {
    day: "Day 7",
    title: "Delivery",
    description: "A working, deployed product is handed over to you, ready for users.",
    icon: <Rocket className="mb-4 h-12 w-12 text-primary" />,
  },
];

export function Process() {
  return (
    <section id="process" className="container py-24 sm:py-32">
      <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
        How We Build in 7 Days
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step) => (
          <Card key={step.title} className="flex flex-col items-center p-6 text-center">
            {step.icon}
            <CardHeader className="p-0">
              <p className="mb-1 text-sm font-semibold text-primary">{step.day}</p>
              <CardTitle>{step.title}</CardTitle>
            </CardHeader>
            <CardDescription className="mt-2 flex-grow">
              {step.description}
            </CardDescription>
          </Card>
        ))}
      </div>
    </section>
  );
}

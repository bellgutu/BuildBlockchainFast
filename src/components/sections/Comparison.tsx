import { CheckCircle2, XCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const traditional = [
  { text: "3-6 months", icon: <XCircle className="mr-2 h-5 w-5 text-destructive" /> },
  { text: "$50K-$100K+", icon: <XCircle className="mr-2 h-5 w-5 text-destructive" /> },
  { text: "3-5 engineers", icon: <XCircle className="mr-2 h-5 w-5 text-destructive" /> },
  { text: "High (scope creep, delays)", icon: <XCircle className="mr-2 h-5 w-5 text-destructive" /> },
  { text: "Maybe works", icon: <XCircle className="mr-2 h-5 w-5 text-destructive" /> },
];

const aiPowered = [
  { text: "7 days", icon: <CheckCircle2 className="mr-2 h-5 w-5 text-primary" /> },
  { text: "$12K-$15K", icon: <CheckCircle2 className="mr-2 h-5 w-5 text-primary" /> },
  { text: "AI + Expert Director", icon: <CheckCircle2 className="mr-2 h-5 w-5 text-primary" /> },
  { text: "Low (fixed timeline, fixed price)", icon: <CheckCircle2 className="mr-2 h-5 w-5 text-primary" /> },
  { text: "Guaranteed working product", icon: <CheckCircle2 className="mr-2 h-5 w-5 text-primary" /> },
];

const categories = ["Time", "Cost", "Team", "Risk", "Result"];

export function Comparison() {
  return (
    <section id="comparison" className="py-24 sm:py-32 bg-secondary/30">
      <div className="container">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Why Choose Our AI-Powered Approach
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          <Card className="border-2 border-border/40 bg-card/50">
            <CardHeader>
              <CardTitle className="text-center text-2xl text-muted-foreground">
                Traditional Developers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {traditional.map((item, index) => (
                  <li key={index} className="flex items-center">
                    {item.icon}
                    <div>
                      <p className="font-bold">{categories[index]}</p>
                      <p className="text-muted-foreground">{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="border-2 border-primary bg-card/50">
            <CardHeader>
              <CardTitle className="text-center text-2xl text-primary">
                Our AI-Powered Approach
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {aiPowered.map((item, index) => (
                  <li key={index} className="flex items-center">
                    {item.icon}
                    <div>
                      <p className="font-bold">{categories[index]}</p>
                      <p className="text-muted-foreground">{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

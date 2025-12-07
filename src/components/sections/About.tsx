import Image from "next/image";
import { Card } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function About() {
  const headshot = PlaceHolderImages.find(
    (img) => img.id === "abel-gutu-headshot"
  );

  return (
    <section id="about" className="container py-24 sm:py-32">
      <Card className="overflow-hidden bg-secondary/50">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-3">
          <div className="md:col-span-2 p-8 md:p-12">
            <h2 className="mb-4 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Built by Abel Gutu
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a blockchain architect who has mastered AI-powered
                development. After building three complete blockchain products
                solo using AI, I'm now helping other founders turn their ideas
                into reality fast.
              </p>
              <p>
                Based in Ethiopia, I partner with founders and teams globally to
                deliver high-quality, production-ready MVPs at unprecedented
                speed.
              </p>
            </div>
          </div>
          <div className="relative h-64 w-full md:h-full">
            {headshot && (
              <Image
                src={headshot.imageUrl}
                alt={headshot.description}
                fill
                className="object-cover"
                data-ai-hint={headshot.imageHint}
              />
            )}
          </div>
        </div>
      </Card>
    </section>
  );
}

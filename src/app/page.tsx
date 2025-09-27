"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="px-6 sm:px-10">
      {/* Hero Section */}
      <section className="relative mx-auto max-w-6xl grid lg:grid-cols-2 gap-10 items-center py-16 sm:py-24">
        <div className="space-y-6">
          <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
            Hello, I'm Advait Chirmule
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Full-Stack AI Developer • MS CS @ ASU
          </h1>
          <p className="text-muted-foreground text-balance">
            I build end-to-end products across web and AI—security dashboards, data pipelines, and research tooling. Experienced with React/Next.js, .NET, Python, cloud, and CI/CD.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/projects">View Projects</Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border">
          {/* Unsplash image */}
          <img
            src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1600&auto=format&fit=crop"
            alt="Workspace"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      {/* About Summary */}
      <section className="mx-auto max-w-6xl py-8 sm:py-12">
        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <CardContent className="p-6 space-y-3">
              <h2 className="text-2xl font-semibold">About Me</h2>
              <p className="text-muted-foreground">
                Full‑stack developer and researcher focused on secure, scalable systems. I've built enterprise security dashboards, automated cloud vulnerability testing, and run large‑scale social media studies. I care about reliability, performance, and clear UX.
              </p>
              <div>
                <Button variant="outline" asChild>
                  <Link href="/about">More about my background</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 space-y-3">
              <h3 className="text-lg font-semibold">Core Skills</h3>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-5">
                <li>Python, Java, JavaScript, C#</li>
                <li>React, Next.js, ASP.NET</li>
                <li>FastAPI, Node.js</li>
                <li>MySQL, Postgres, MongoDB</li>
                <li>AWS, Docker, Kubernetes</li>
                <li>CI/CD, Terraform, Git</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = [
  "Python",
  "Java",
  "JavaScript",
  "C#",
  "C++",
  "React",
  "Next.js",
  "ASP.NET",
  "FastAPI",
  "Node.js",
  "MySQL",
  "Postgres",
  "MongoDB",
  "AWS",
  "Azure",
  "Docker",
  "Kubernetes",
  "Terraform",
  "CI/CD",
  "AI/ML",
  "Agile",
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 sm:px-10 py-12">
      <header className="mb-8 space-y-3">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">About Advait</h1>
        <p className="text-muted-foreground max-w-3xl">
          I am a full stack AI developer and researcher blending secure cloud engineering with user centered design. My recent focus spans automated security pipelines, large scale social media studies, and dashboards that translate complex data into clear decisions.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardContent className="p-6 space-y-6">
            <section className="space-y-3">
              <h2 className="text-xl font-semibold">Education</h2>
              <div className="rounded-lg border p-4">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <p className="font-medium text-foreground">Arizona State University</p>
                  <p className="text-sm text-muted-foreground">Aug 2023 - May 2025</p>
                </div>
                <p className="text-sm text-muted-foreground">Master of Science in Computer Science, Tempe, AZ</p>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold">Experience snapshot</h2>
              <div className="space-y-4 text-sm text-muted-foreground">
                <div>
                  <p className="font-medium text-foreground">Full Stack AI Developer, Cognia Security</p>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">May 2025 - Present - Tempe, AZ</p>
                  <ul className="mt-2 list-disc space-y-2 pl-5">
                    <li>Leading development of an enterprise security dashboard that surfaces cloud vulnerabilities and remediation paths.</li>
                    <li>Built Terraform driven CI/CD pipelines that wire in Azure Defender, OWASP ZAP, and Burp Suite for automated testing.</li>
                    <li>Created ingestion services that consolidate findings into MongoDB for faster triage and reporting.</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-foreground">Research Aide, Arizona State University</p>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">Aug 2024 - May 2025 - Tempe, AZ</p>
                  <ul className="mt-2 list-disc space-y-2 pl-5">
                    <li>Ran social media experiments with 2,000+ participants using Selenium automation for recruitment and validation.</li>
                    <li>Processed 700K+ posts with Python pipelines, delivering sentiment dashboards in Power BI.</li>
                    <li>Applied reinforcement learning strategies that lowered toxic comment rates by 20 percent.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold">Publications</h2>
              <div className="rounded-lg border p-4 text-sm text-muted-foreground">
                <p className="font-medium text-foreground">Jailbreaking Proprietary Large Language Models</p>
                <p>ACL ARR 2024 - Arizona State University</p>
                <p className="mt-2">Explored cryptographic encoding strategies that increase jailbreak success while automating GPT API experimentation and analytics.</p>
              </div>
            </section>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 space-y-4">
            <section className="space-y-3">
              <h2 className="text-xl font-semibold">Core skills</h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </section>

            <section className="space-y-2 text-sm text-muted-foreground">
              <h3 className="text-sm font-medium text-foreground">How I work</h3>
              <p>Blend design thinking with observability to iterate quickly and keep stakeholders aligned.</p>
              <p>Comfortable leading initiatives end to end or embedding within pods across product, research, and security.</p>
              <p>Deep focus on data storytelling, automation, and resilient infrastructure.</p>
            </section>
          </CardContent>
        </Card>
      </div>

      <section className="mt-10">
        <div className="rounded-xl border bg-muted/30 p-8">
          <h2 className="text-lg font-semibold">Currently exploring</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Reinforcement learning for community health, agentic workflows for security triage, and ways to turn messy data into accessible narratives.
          </p>
        </div>
      </section>
    </div>
  );
}
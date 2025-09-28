"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Vocab Master",
    timeline: "Jan 2025 - Present",
    description:
      "Cross-platform GRE companion combining an ASP.NET MVC web app and native Android client for 100+ learners.",
    impact: [
      "Delivered multiplayer drawing games and adaptive practice loops to keep sessions collaborative.",
      "Integrated Firebase REST APIs for secure authentication and live word list sync.",
      "Built latency aware sync powered by SQL Server caching that cuts lag by 60 percent.",
    ],
    tech: ["ASP.NET", "C#", "JavaScript", "Android", "Firebase", "SQL Server"],
    url: "https://github.com/AdvaitChirmule",
  },
  {
    title: "Minibase Software Modification",
    timeline: "Jan 2024 - May 2024",
    description:
      "Extended a teaching database system with column stores, bitmap indexes, and custom compression for faster analytics.",
    impact: [
      "Designed a hybrid Run Length Encoding and Bit Stuffing approach to shrink storage while improving query times by 15 percent.",
      "Validated new storage paths with full CRUD support and join heavy workloads across 100K rows in under 30 seconds.",
      "Built repeatable benchmarking scripts that run inside a Linux environment for regression tracking.",
    ],
    tech: ["Java", "Linux", "Algorithms", "Database Systems", "Git"],
    url: "https://github.com/AdvaitChirmule",
  },
  {
    title: "Taiga API Extraction",
    timeline: "Jan 2024 - May 2024",
    description:
      "Analytics layer that surfaces Taiga sprint health with a React dashboard and containerized FastAPI services.",
    impact: [
      "Implemented OAuth 2.0 secure login and a Node middleware that standardizes project data for the frontend.",
      "Introduced Redis caching to deliver key metrics 80 percent faster and reduce API strain.",
      "Packaged the stack with Docker to streamline local onboarding and cloud deployment.",
    ],
    tech: ["React", "FastAPI", "Node.js", "Redis", "Docker", "Recharts"],
    url: "https://github.com/AdvaitChirmule",
  },
];

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 sm:px-10 py-12">
      <header className="mb-10 space-y-3">
        <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
          Selected projects
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Projects with measurable outcomes</h1>
        <p className="text-muted-foreground max-w-3xl">
          A sampling of research driven and production ready builds where I owned architecture, implementation, and delivery.
        </p>
      </header>

      <div className="grid gap-6">
        {projects.map((project) => (
          <Card key={project.title}>
            <CardHeader className="space-y-2">
              <CardTitle className="text-2xl">{project.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{project.timeline}</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">{project.description}</p>
              <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                {project.impact.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                {project.tech.map((tech) => (
                  <span key={tech} className="rounded-full border px-2 py-1">
                    {tech}
                  </span>
                ))}
              </div>
              <Button asChild variant="secondary" size="sm">
                <Link href={project.url} target="_blank" rel="noreferrer">
                  View code
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
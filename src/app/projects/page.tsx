"use client";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Vocab Master",
    description:
      "Cross-platform GRE study app (ASP.NET MVC web + Android) with live sync, secure login, game rooms, and SQL Server caching reducing latency by 60%.",
    image:
      "https://images.unsplash.com/photo-1529336953121-c9a0522eb1f8?q=80&w=1600&auto=format&fit=crop",
    url: "https://github.com/AdvaitChirmule",
    tech: ["ASP.NET", "C#", "JavaScript", "AJAX", "Kotlin", "XML", "Firebase"],
  },
  {
    title: "Minibase Software Modification",
    description:
      "Extended Java DBMS with column-store and bitmap indexes, custom RLE + Bit Stuffing compression, handling 100K rows under 30s.",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop",
    url: "https://github.com/AdvaitChirmule",
    tech: ["Java", "Linux", "Algorithms", "Git"],
  },
  {
    title: "Taiga API Extraction",
    description:
      "Project analytics tool with React frontend, Node middleware, FastAPI backend (OAuth 2.0), Redis caching for 80% faster performance, Dockerized services.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1600&auto=format&fit=crop",
    url: "https://github.com/AdvaitChirmule",
    tech: ["React", "FastAPI", "Recharts", "Node.js", "Docker", "Redis", "OAuth 2.0"],
  },
];

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 sm:px-10 py-12">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Projects</h1>
        <p className="text-muted-foreground mt-2">
          Selected work highlighting product thinking, polish, and performance.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <Card key={p.title} className="overflow-hidden">
            <div className="aspect-video w-full overflow-hidden">
              <img src={p.image} alt={p.title} className="h-full w-full object-cover" />
            </div>
            <CardHeader>
              <CardTitle className="text-lg">{p.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">{p.description}</p>
              <div className="flex flex-wrap gap-2 text-xs">
                {p.tech.map((t) => (
                  <span key={t} className="rounded-full border px-2 py-1 text-muted-foreground">{t}</span>
                ))}
              </div>
              <Button asChild variant="secondary" size="sm">
                <Link href={p.url}>View project</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
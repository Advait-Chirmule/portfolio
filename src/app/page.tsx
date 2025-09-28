"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const experiences = [
  {
    role: "Full Stack AI Application Intern",
    company: "Cognia Security",
    time: "May 2025 - Present",
    location: "Tempe, Arizona",
    summary:
      "Serving as a founding engineer building a security dashboard for enterprise clients to monitor vulnerabilities.",
    highlights: [
      "Automated pipelines with SonarQube, Burp Suite, Azure Defender, and OWASP tools, deploying to Azure and AWS with Terraform.",
      "Developed a Python pipeline that aggregates results, enriches context with Azure KQL, validates findings, and stores them in PostgreSQL dashboards.",
      "Managed Linear-based Agile workflows to coordinate delivery and code quality with the team.",
    ],
    tech: ["Python", "Terraform", "Azure", "AWS", "PostgreSQL", "Dashboards"],
  },
  {
    role: "CIS Research Aide",
    company: "Arizona State University",
    time: "August 2024 - May 2025",
    location: "Tempe, Arizona",
    summary:
      "Studied hashtag effects on engagement and toxicity through large-scale user studies.",
    highlights: [
      "Led seven Twitter experiments with 2,000 participants using Selenium to automate data collection and validation.",
      "Built an object-oriented Python pipeline that gathered 700K+ social media comments via APIs for analysis.",
      "Applied multi-objective reinforcement learning to reduce average toxicity scores by 20%.",
    ],
    tech: ["Python", "Selenium", "APIs", "Reinforcement Learning", "Data Analysis"],
  },
];

const heroHighlights = [
  {
    value: "2,000",
    label: "Twitter participants guided across seven studies",
  },
  {
    value: "700K+",
    label: "Social media comments processed with Python pipelines",
  },
  {
    value: "60%",
    label: "Latency reduction for Vocab Master drawing game",
  },
  {
    value: "80%",
    label: "Faster Taiga analytics retrieval using Redis caching",
  },
];

const heroHighlightColors = [
  "from-indigo-200 via-white to-sky-100 dark:from-indigo-900 dark:via-slate-950 dark:to-sky-900",
  "from-amber-200 via-white to-orange-100 dark:from-amber-900 dark:via-slate-950 dark:to-orange-900",
  "from-emerald-200 via-white to-teal-100 dark:from-emerald-900 dark:via-slate-950 dark:to-teal-900",
  "from-rose-200 via-white to-pink-100 dark:from-rose-900 dark:via-slate-950 dark:to-pink-900",
];

const focusAreas = [
  "Security dashboards for enterprise vulnerability monitoring.",
  "Automated testing pipelines across Azure and AWS using Terraform.",
  "Python and Azure KQL data workflows that prioritize validated findings.",
];

const funStats = [
  {
    value: "60%",
    label: "Faster gameplay sync",
    description:
      "SQL Server caching and a time-sliced polling algorithm keep Vocab Master game rooms responsive for 50 concurrent sessions.",
  },
  {
    value: "80%",
    label: "Quicker sprint metrics",
    description:
      "Redis caching in Taiga API Extraction speeds project analysis dashboards by 80% while staying container-ready with Docker.",
  },
  {
    value: "15%",
    label: "Faster queries",
    description:
      "Custom RLE and Bit Stuffing compression in Minibase delivers 15% faster performance on 100K-row workloads.",
  },
  {
    value: "50%",
    label: "Faster jailbreak research",
    description:
      "Automated GPT API calls for ACL ARR submission reduced experiment time by 50%.",
  },
];

const projects = [
  {
    title: "Vocab Master",
    description:
      "ASP.NET MVC and C# GRE study app with JavaScript, Firebase, AJAX, and SQL Server caching supporting 100 learners and 50 concurrent game rooms.",
    tech: ["ASP.NET", "C#", "JavaScript", "Firebase", "AJAX", "SQL Server"],
  },
  {
    title: "Minibase Software Modification",
    description:
      "Java DBMS enhancements on Linux adding column-store, bitmap indexes, and custom compression tuned for 100K-row joins.",
    tech: ["Java", "Linux", "Run-Length Encoding", "Bit Stuffing", "Databases"],
  },
  {
    title: "Taiga API Extraction",
    description:
      "React frontend with Node.js middleware and FastAPI backend (OAuth 2.0) delivering sprint metrics with Redis caching and Docker deployment.",
    tech: ["React", "Node.js", "FastAPI", "Redis", "Docker", "Recharts"],
  },
];

export default function Home() {
  return (
    <div className="px-6 sm:px-10">
      <section className="relative mx-auto max-w-6xl grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center py-16 sm:py-24">
        <div className="space-y-6">
          <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
            Software Engineer | Arizona State University MSCS 2025 | GPA 3.80
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Advait Chirmule <br></br>
          </h1>
          <h2>
            Recent Computer Science grad @ ASU <br></br>
            Full Stack AI Developer @ Cognia Security
          </h2>
          <p className="text-muted-foreground text-balance">
            Recent Computer Science graduate from Arizona State University with expertise in full stack development, Agile methodologies, and custom algorithms for real-time systems. Proficient in Java, React, SQL, and AWS, and seeking a Software Engineer position.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href="#experience">View Experience</Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link href="/Advait%20Chirmule%20SE%20Resume.pdf" target="_blank" rel="noreferrer">
                Download Resume
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="mailto:achirmul@asu.edu">achirmul@asu.edu</Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {heroHighlights.map((item, index) => (
              <div
                key={item.label}
                className={`rounded-2xl border px-4 py-3 text-sm shadow-sm transition hover:shadow-md ${
                  "bg-gradient-to-br " + heroHighlightColors[index % heroHighlightColors.length]
                }`}
              >
                <div className="text-xl font-semibold">{item.value}</div>
                <p className="text-xs text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative w-full overflow-hidden rounded-2xl border bg-muted/30 p-6 shadow-sm">
          <div>
            <h2 className="text-sm font-semibold text-foreground">Current focus</h2>
            <ul className="mt-3 space-y-3 text-sm text-muted-foreground">
              {focusAreas.map((entry) => (
                <li key={entry} className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-primary" />
                  <span>{entry}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6 rounded-lg border bg-white/70 p-4 text-sm text-muted-foreground shadow-sm">
            <div className="font-semibold text-foreground">Tempe, Arizona (Open to Relocation)</div>
            <p>Open to Software Engineer opportunities.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl py-10">
        <div className="rounded-3xl border bg-gradient-to-br from-orange-50 via-white to-lime-50 p-6 shadow-sm dark:from-slate-950 dark:via-slate-950 dark:to-emerald-950 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-foreground">Impact snapshots</h2>
              <p className="text-sm text-muted-foreground max-w-2xl">
                Resume-backed metrics from internships, research, and projects.
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/projects">View Projects</Link>
            </Button>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {funStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border bg-gradient-to-br from-white to-slate-50 p-4 text-sm shadow-sm transition hover:shadow-lg dark:from-slate-950 dark:to-slate-900"
              >
                <div className="text-2xl font-semibold text-foreground">{stat.value}</div>
                <p className="text-sm font-medium text-foreground">{stat.label}</p>
                <p className="mt-2 text-xs text-muted-foreground">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl py-12">
        <div className="mb-8 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Experience</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl">
              Roles grounded in security automation, data engineering, and social computing research.
            </p>
          </div>
          <Link
            className="text-sm font-medium text-primary hover:underline"
            href="https://www.linkedin.com/in/advait-chirmule/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn timeline -&gt;
          </Link>
        </div>

        <div className="grid gap-6">
          {experiences.map((experience) => (
            <Card key={experience.role} className="border-muted bg-gradient-to-br from-white to-slate-50 shadow-sm dark:from-slate-950 dark:to-slate-900">
              <CardHeader className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                <div>
                  <CardTitle className="text-xl">
                    {experience.role} - {experience.company}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {experience.time} - {experience.location}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                  {experience.tech.map((tech) => (
                    <span key={tech} className="rounded-full border px-2 py-1 shadow-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground">
                <p>{experience.summary}</p>
                <ul className="list-disc space-y-2 pl-5">
                  {experience.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl py-12">
        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="lg:col-span-2 bg-gradient-to-br from-white to-slate-50 shadow-sm dark:from-slate-950 dark:to-slate-900">
            <CardContent className="p-6 space-y-3">
              <h2 className="text-2xl font-semibold">About</h2>
              <p className="text-muted-foreground">
                Master of Science in Computer Science candidate at Arizona State University (August 2023 - May 2025) with a 3.80 GPA. Experienced in full stack development, Agile methodologies, and optimizing real-time systems.
              </p>
              <div>
                <Button variant="outline" asChild>
                  <Link href="/about">More about my background</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-white to-slate-50 shadow-sm dark:from-slate-950 dark:to-slate-900">
            <CardContent className="p-6 space-y-3">
              <h3 className="text-lg font-semibold">Core Skills</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>Languages: Python, Java, JavaScript, C#, C++, XML, OOP</li>
                <li>Frontend: React, HTML, CSS, RESTful API, HCI</li>
                <li>Backend: .NET, MySQL, Postgres, AWS, Docker, Kubernetes</li>
                <li>Others: Agile, GitHub, AI/ML, Problem Solving, Teamwork</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-6xl py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold">Selected Projects</h2>
          <p className="text-sm text-muted-foreground">
            Technical projects documented in the resume.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title} className="h-full border-muted bg-gradient-to-br from-white to-slate-50 shadow-sm transition hover:shadow-lg dark:from-slate-950 dark:to-slate-900">
              <CardHeader>
                <CardTitle className="text-lg">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                  {project.tech.map((tech) => (
                    <span key={tech} className="rounded-full border px-2 py-1 shadow-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
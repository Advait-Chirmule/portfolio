"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const experiences = [
  {
    role: "Full Stack AI Developer",
    company: "Cognia Security",
    time: "May 2025 - Present",
    location: "Tempe, AZ",
    summary:
      "Designing a friendly security mission control so enterprise teams can spot and fix issues before customers feel them.",
    highlights: [
      "Rolled out a Terraform powered pipeline that runs Azure Defender, OWASP ZAP, and Burp Suite so every release ships with confidence.",
      "Built data flows that collect cloud findings into MongoDB dashboards the whole company can read at a glance.",
      "Kept momentum high by pairing with product leads, managing work in Linear, and prototyping with Cursor AI when ideas sparked.",
    ],
    tech: ["Terraform", "AWS", "Azure", "MongoDB", "React", "CI/CD"],
  },
  {
    role: "Research Aide",
    company: "Arizona State University",
    time: "Aug 2024 - May 2025",
    location: "Tempe, AZ",
    summary:
      "Explored how hashtags shape conversations, turning 700K+ social posts into insights community teams can trust.",
    highlights: [
      "Welcomed 2,000+ participants into large scale studies with Selenium automations that felt personal, not robotic.",
      "Built Python pipelines and Power BI stories so researchers and non technical partners could review findings together.",
      "Used reinforcement learning to dial down toxic comments by 20 percent while keeping engagement upbeat.",
    ],
    tech: ["Python", "Pandas", "NumPy", "Selenium", "Power BI", "RL"],
  },
];

const heroHighlights = [
  {
    value: "100+",
    label: "Learners practicing daily",
  },
  {
    value: "20%",
    label: "Drop in toxic comments",
  },
  {
    value: "80%",
    label: "Faster sprint recaps",
  },
  {
    value: "2K+",
    label: "Participants guided with care",
  },
];

const heroHighlightColors = [
  "from-indigo-200 via-white to-sky-100 dark:from-indigo-900 dark:via-slate-950 dark:to-sky-900",
  "from-amber-200 via-white to-orange-100 dark:from-amber-900 dark:via-slate-950 dark:to-orange-900",
  "from-emerald-200 via-white to-teal-100 dark:from-emerald-900 dark:via-slate-950 dark:to-teal-900",
  "from-rose-200 via-white to-pink-100 dark:from-rose-900 dark:via-slate-950 dark:to-pink-900",
];

const focusAreas = [
  "Turning security signals into clear stories leaders can act on.",
  "Pairing data science with design so dashboards feel welcoming, not overwhelming.",
  "Coaching cross functional teams from kickoff to launch with energy and clarity.",
];

const funStats = [
  {
    value: "60%",
    label: "Less waiting",
    description:
      "SQL Server caching keeps Vocab Master game nights running smoother for friends prepping together.",
    accent: "from-sky-50 to-indigo-50 dark:from-slate-950 dark:to-indigo-900",
  },
  {
    value: "5",
    label: "Playlists on loop",
    description:
      "Curated mixes fuel focus time, design jams, standups, deep work, and late night debugging.",
    accent: "from-amber-50 to-orange-100 dark:from-slate-950 dark:to-amber-900",
  },
  {
    value: "3",
    label: "Research murals",
    description:
      "Visual storytelling boards make complex data feel like a gallery walk for stakeholders.",
    accent: "from-emerald-50 to-teal-100 dark:from-slate-950 dark:to-emerald-900",
  },
  {
    value: "24 hrs",
    label: "Support promise",
    description:
      "Every message gets a thoughtful response within a day because collaboration should feel human.",
    accent: "from-rose-50 to-pink-100 dark:from-slate-950 dark:to-rose-900",
  },
];

const projects = [
  {
    title: "Vocab Master",
    description:
      "Cross-platform GRE study app serving 100+ learners with multiplayer gameplay, live sync, and 60% faster latency via SQL Server caching.",
    tech: ["ASP.NET", "C#", "Android", "Firebase", "SQL Server"],
  },
  {
    title: "Minibase Software Modification",
    description:
      "Enhanced a Java database with column stores, bitmap indexes, and custom compression to handle 100K rows in under 30 seconds.",
    tech: ["Java", "Linux", "RLE", "Database Systems"],
  },
  {
    title: "Taiga API Extraction",
    description:
      "Delivered a React, Node, and FastAPI analytics tool with Redis caching for 80% faster sprint insights.",
    tech: ["React", "FastAPI", "Node.js", "Redis", "Docker"],
  },
];

export default function Home() {
  return (
    <div className="px-6 sm:px-10">
      <section className="relative mx-auto max-w-6xl grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center py-16 sm:py-24">
        <div className="space-y-6">
          <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
            MS CS @ Arizona State University
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Advait Chirmule - translating complex systems into welcoming products
          </h1>
          <p className="text-muted-foreground text-balance">
            I help teams tell clearer stories with their technology. From security dashboards to large research studies, my goal is to make every stakeholder feel included, informed, and excited about what we are building.
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
            <h2 className="text-sm font-semibold text-foreground">What I am focused on</h2>
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
            <div className="font-semibold text-foreground">Tempe, AZ</div>
            <p>Available for full-time software engineering roles starting 2025.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl py-10">
        <div className="rounded-3xl border bg-gradient-to-br from-orange-50 via-white to-lime-50 p-6 shadow-sm dark:from-slate-950 dark:via-slate-950 dark:to-emerald-950 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-foreground">Friendly stats, real impact</h2>
              <p className="text-sm text-muted-foreground max-w-2xl">
                A snapshot of the wins I care about most: people feeling confident, teams moving faster, and a little personality along the way.
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/contact">Let us collaborate</Link>
            </Button>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {funStats.map((stat) => (
              <div
                key={stat.label}
                className={`rounded-2xl border bg-gradient-to-br p-4 text-sm shadow-sm transition hover:shadow-lg ${
                  stat.accent
                }`}
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
              Stories that bring engineers, designers, and leaders into the same conversation.
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
                Graduate researcher and builder who thrives at the intersection of security, data, and user experience. My work combines experimentation, automation, and thoughtful design to help teams move faster with confidence.
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
              <h3 className="text-lg font-semibold">Snapshot</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>MS Computer Science - Arizona State University (2025)</li>
                <li>Championing accessible security education</li>
                <li>Researching how online communities stay kind</li>
                <li>Partnering with teams from brainstorm to launch</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-6xl py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold">Projects</h2>
          <p className="text-sm text-muted-foreground">
            A few student-led and collaborative builds that showcase problem solving and polish.
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
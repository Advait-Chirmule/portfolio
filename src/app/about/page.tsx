"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const education = {
  degree: "Master of Science, Computer Science",
  school: "Arizona State University",
  location: "Tempe, Arizona",
  dates: "August 2023 - May 2025",
  gpa: "GPA 3.80",
};

const experiences = [
  {
    title: "Full Stack AI Application Intern",
    company: "Cognia Security",
    location: "Tempe, Arizona",
    dates: "May 2025 - Present",
    bullets: [
      "Serving as a founding engineer building a security dashboard for enterprise vulnerability monitoring.",
      "Automated security testing pipelines with SonarQube, Burp Suite, Azure Defender, and OWASP tools; deployed to Azure and AWS using Terraform.",
      "Developed a Python pipeline that aggregates results, enriches context using Azure KQL, validates and deduplicates findings, and stores them in PostgreSQL-backed dashboards.",
      "Managed tasks and Agile workflows in Linear to ensure timely delivery and code quality.",
    ],
  },
  {
    title: "CIS Research Aide",
    company: "Arizona State University",
    location: "Tempe, Arizona",
    dates: "August 2024 - May 2025",
    bullets: [
      "Studied hashtag effects on engagement and toxicity through large-scale user studies.",
      "Led seven experiments with 2,000 Twitter participants and automated data collection and validation using Selenium.",
      "Built an object-oriented Python pipeline to gather 700K+ social media comments via APIs for analysis.",
      "Applied multi-objective reinforcement learning to reduce average toxicity scores by 20%.",
    ],
  },
];

const projects = [
  {
    title: "Vocab Master",
    dates: "January 2025 - May 2025",
    bullets: [
      "Developed a GRE study app using ASP.NET MVC, C#, JavaScript, Firebase, and AJAX following OOP principles.",
      "Integrated Firebase Realtime Database via RESTful APIs for secure login, real-time word list sync, and game room management supporting up to 50 concurrent rooms.",
      "Created a time-sliced polling algorithm with SQL Server caching that reduced latency by 60% while serving around 100 learners.",
    ],
  },
  {
    title: "Minibase Software Modification",
    dates: "January 2024 - April 2024",
    bullets: [
      "Improved Minibase (Java DBMS) on Linux by adding column-store support and bitmap indexes to make queries faster.",
      "Designed a custom compression algorithm using Run-Length Encoding and Bit Stuffing, cutting storage and improving performance by 15% over standard RLE.",
      "Validated CRUD operations and joins handling 100K rows in under 30 seconds.",
    ],
  },
  {
    title: "Taiga API Extraction - Team Clever",
    dates: "January 2024 - April 2024",
    bullets: [
      "Built a Taiga project analysis tool with a React frontend, Node.js middleware, and FastAPI backend secured with OAuth 2.0.",
      "Integrated Redis caching to improve metric retrieval speeds by 80% and containerized services with Docker and Spring Boot for scalable deployment.",
      "Maintained code quality with SonarQube and collaborated through Agile ceremonies including sprint planning, daily standups, and code reviews.",
    ],
  },
];

const publication = {
  title: "Jailbreaking Proprietary Large Language Models using Word Substitution Cipher",
  venue: "Submitted to ACL ARR 2024",
  bullets: [
    "Explored cryptographic prompt encoding strategies to jailbreak multiple large language models.",
    "Automated GPT API calls in Python to accelerate experimentation by 50%.",
    "Analyzed results in Power BI, achieving up to 60% jailbreak success across models.",
  ],
};

const skillSections = [
  {
    label: "Languages",
    items: ["Python", "Java", "JavaScript", "C#", "C++", "XML", "OOP"],
  },
  {
    label: "Frontend",
    items: ["React", "HTML", "CSS", "RESTful API", "HCI"],
  },
  {
    label: "Backend",
    items: [".NET", "MySQL", "Postgres", "AWS", "Docker", "Kubernetes"],
  },
  {
    label: "Others",
    items: ["Agile", "GitHub", "AI/ML", "Problem Solving", "Teamwork"],
  },
];

const quickFacts = [
  { label: "Current focus", value: "Full stack development, Agile delivery, and real-time systems" },
  { label: "Seeking", value: "Software Engineer roles" },
  { label: "Location", value: "Tempe, Arizona" },
  { label: "Education", value: "MSCS, Arizona State University (2025)" },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 sm:px-10 py-12 space-y-8">
      <header className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">About Advait Chirmule</h1>
        <p className="text-muted-foreground max-w-3xl">
          Recent Computer Science graduate from Arizona State University with expertise in full stack development, Agile methodologies, and custom algorithms for real-time systems. Proficient in Java, React, SQL, and AWS, and actively pursuing a Software Engineer position.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Education</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <span className="font-medium text-foreground">{education.degree}</span>
                <span>{education.dates}</span>
              </div>
              <p>
                {education.school}, {education.location} - {education.gpa}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Work Experience</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-sm text-muted-foreground">
              {experiences.map((experience) => (
                <div key={experience.title} className="space-y-2">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <span className="font-medium text-foreground">
                      {experience.title} - {experience.company}
                    </span>
                    <span className="text-xs uppercase tracking-wide">{experience.dates}</span>
                  </div>
                  <p>{experience.location}</p>
                  <ul className="list-disc space-y-2 pl-5">
                    {experience.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Projects</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-sm text-muted-foreground">
              {projects.map((project) => (
                <div key={project.title} className="space-y-2">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <span className="font-medium text-foreground">{project.title}</span>
                    <span className="text-xs uppercase tracking-wide">{project.dates}</span>
                  </div>
                  <ul className="list-disc space-y-2 pl-5">
                    {project.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Publication</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">{publication.title}</span>
              <p>{publication.venue}</p>
              <ul className="list-disc space-y-2 pl-5">
                {publication.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Quick Facts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              {quickFacts.map((fact) => (
                <div key={fact.label}>
                  <p className="font-medium text-foreground">{fact.label}</p>
                  <p>{fact.value}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Skills</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              {skillSections.map((section) => (
                <div key={section.label}>
                  <p className="font-medium text-foreground">{section.label}</p>
                  <p>{section.items.join(", ")}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Vocab Master",
    timeline: "January 2025 - August 2025",
    description:
      "Developed a GRE study app using ASP.NET MVC, C#, JavaScript, Firebase, and AJAX, following OOP principles.",
    impact: [
      "Enables learners to review word lists and play a drawing game with friends, supporting up to 50 concurrent game rooms.",
      "Integrated Firebase Realtime Database via RESTful APIs for secure login, real-time word list sync, and game room management.",
      "Created a time-sliced polling algorithm and SQL Server caching layer that reduced latency by 60%.",
      "Actively support a user base of around 100 by resolving issues and shipping feedback-driven features.",
    ],
    tech: ["ASP.NET MVC", "C#", "JavaScript", "Firebase", "AJAX", "SQL Server"],
    url: "https://vocabmaster.runasp.net/",
  },
  {
    title: "Minibase Software Modification",
    timeline: "January 2024 - April 2024",
    description:
      "Improved Minibase (Java DBMS) on Linux by adding column-store support and bitmap indexes for faster queries.",
    impact: [
      "Designed a custom compression algorithm using Run-Length Encoding and Bit Stuffing tuned for the dataset.",
      "Delivered 15% faster performance compared to standard RLE while reducing storage footprint.",
      "Verified CRUD operations and joins on 100K rows executing in under 30 seconds.",
    ],
    tech: ["Java", "Linux", "Run-Length Encoding", "Bit Stuffing", "Databases"],
    url: "/",
  },
  {
    title: "Taiga API Extraction - Team Clever",
    timeline: "January 2024 - April 2024",
    description:
      "Built a Taiga project analysis tool with a React frontend, Node.js middleware, and FastAPI backend secured with OAuth 2.0.",
    impact: [
      "Surfaced burndown and custom sprint metrics to improve sprint efficiency for customers.",
      "Integrated Redis caching to improve data retrieval speeds by 80% and containerized services with Docker and Spring Boot for scalable deployment.",
      "Maintained code quality with SonarQube and collaborated through Agile ceremonies including sprint planning, standups, and code reviews.",
    ],
    tech: ["React", "Node.js", "FastAPI", "Redis", "Docker", "Spring Boot", "Recharts", "SonarQube"],
    url: "https://github.com/SER516-Clever/SER516-Team-Clever",
  },
  {
    title: "AWS-Powered Application for Image Recognition",
    timeline: "January 2024 - April 2024",
    description:
      "Built an end to end application that processes videos and identifies the celebrities frame by frame",
    impact: [
      "Configured an EC2 instance to handle incoming images, forward them to the App Tier, and return recognition results.",
      "Developed scalable model inference layer using AMI on AWS; auto-scaled from 0 to 20 instances based on load and handled 500 requests in 240 seconds via SQS queues, and stored the result in S3 buckets.",
    ],
    tech: ["AWS", "Image Processing", "Python"],
    url: "/",
  },
  {
    title: "Automatic Music Tagging",
    timeline: "July 2022 - May 2023",
    description:
      "Developed an application that predicts song genre by performing diffent sound and image processing techniques",
    impact: [
      "Developed a Flask model that predicts the music genre for a song uploaded by the user with 85% accuracy.",
      "Extracted features using Mel Spectrogram, MFCC, Spectrogram, FFT, etc. using Python's Librosa library to predict the result using the CNN algorithm, and visualized using R’s tidyverse and tuneR libraries.",
    ],
    tech: ["Python", "Sound Processing", "Flask", "R", "Deep Learning", "CNN", "Signal Processing"],
    url: "https://advaitchirmule.pythonanywhere.com/Music_Predict.html",
  },
];

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 sm:px-10 py-12">
      <header className="mb-10 space-y-3">
        <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
          Resume projects
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Projects documented in the resume</h1>
        <p className="text-muted-foreground max-w-3xl">
          Full stack, database, and analytics work drawn directly from hands-on project experience.
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
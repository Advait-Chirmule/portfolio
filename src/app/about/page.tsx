"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 sm:px-10 py-12">
      <header className="mb-8 space-y-2">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">About Me</h1>
        <p className="text-muted-foreground max-w-3xl">
          Full‑Stack AI Developer and researcher focused on secure, scalable systems. I build security dashboards, automate cloud vulnerability testing, and run large‑scale social media studies. I care about reliability, performance, and clear UX.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-semibold">Background</h2>
            <p className="text-muted-foreground">
              I'm Advait Chirmule, currently pursuing an MS in Computer Science at Arizona State University (Aug 2023 – May 2025). My recent work spans full‑stack development, AI/ML, and cloud security—shipping production dashboards, data pipelines, and research tooling across AWS and Azure.
            </p>

            <h3 className="text-lg font-semibold">Experience Highlights</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
              <li>Built a security dashboard for enterprise clients to assess and resolve vulnerabilities.</li>
              <li>Implemented CI/CD across AWS and Azure using Terraform; integrated Azure Defender, OWASP ZAP, and Burp Suite for automated testing.</li>
              <li>Designed pipelines to extract cloud findings and store them in MongoDB.</li>
              <li>Led large‑scale user studies (2,000+ participants) with Selenium automation; processed 700K+ posts for sentiment and toxicity analysis.</li>
              <li>Applied Reinforcement Learning to optimize hashtag strategies, reducing toxic comments by 20%.</li>
            </ul>

            <h3 className="text-lg font-semibold">Education</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
              <li>
                <span className="font-medium text-foreground">Arizona State University</span> — MS in Computer Science (Aug 2023 – May 2025), Tempe, AZ
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-semibold">Skills</h2>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Python</Badge>
              <Badge variant="secondary">Java</Badge>
              <Badge variant="secondary">JavaScript</Badge>
              <Badge variant="secondary">C#</Badge>
              <Badge variant="secondary">C++</Badge>
              <Badge variant="secondary">React</Badge>
              <Badge variant="secondary">Next.js</Badge>
              <Badge variant="secondary">ASP.NET</Badge>
              <Badge variant="secondary">FastAPI</Badge>
              <Badge variant="secondary">Node.js</Badge>
              <Badge variant="secondary">MySQL</Badge>
              <Badge variant="secondary">Postgres</Badge>
              <Badge variant="secondary">MongoDB</Badge>
              <Badge variant="secondary">AWS</Badge>
              <Badge variant="secondary">Docker</Badge>
              <Badge variant="secondary">Kubernetes</Badge>
              <Badge variant="secondary">CI/CD</Badge>
              <Badge variant="secondary">Terraform</Badge>
              <Badge variant="secondary">AI/ML</Badge>
              <Badge variant="secondary">Agile</Badge>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-2">Experience</h3>
              <ul className="text-sm text-muted-foreground space-y-3">
                <li>
                  <span className="font-medium text-foreground">Full Stack AI Developer</span> — Cognia Security, Tempe, AZ (May 2025 – Present)
                  <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li>Security dashboard for enterprise vulnerability assessment and resolution.</li>
                    <li>Automated CI/CD with Terraform across AWS & Azure; integrated security testing tools.</li>
                  </ul>
                </li>
                <li>
                  <span className="font-medium text-foreground">Research Aide</span> — Arizona State University (Aug 2024 – May 2025)
                  <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li>Ran large‑scale social media experiments; Selenium automation and data validation.</li>
                    <li>Processed 700K+ posts with Python (Pandas, NumPy); analytics with Power BI.</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-2">Publications</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>
                  <span className="font-medium text-foreground">Jailbreaking Proprietary Large Language Models</span> — ACL ARR 2024 (ASU)
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      <section className="mt-10">
        <div className="aspect-[21/9] w-full overflow-hidden rounded-xl border">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000&auto=format&fit=crop"
            alt="Coding desk"
            className="h-full w-full object-cover"
          />
        </div>
      </section>
    </div>
  );
}
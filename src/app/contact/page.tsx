"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || "someone"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    window.location.href = `mailto:achirmul@asu.edu?subject=${subject}&body=${body}`;
  };

  return (
    <div className="mx-auto max-w-6xl px-6 sm:px-10 py-12">
      <header className="mb-8 space-y-2">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Contact</h1>
        <p className="text-muted-foreground max-w-2xl">
          Have a project in mind or want to collaborate? Send me a message and I'll get back to you.
        </p>
      </header>

      <div className="grid gap-8 lg:grid-cols-2">
        <Card>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
                <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Jane Doe" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
                <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="jane@example.com" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="message">Message</label>
                <Textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Tell me about your project…" rows={6} required />
              </div>
              <Button type="submit" className="w-full sm:w-auto">Send Message</Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold">Reach me</h2>
            <p className="text-sm text-muted-foreground mt-1">Prefer email? Write to <a className="underline" href="mailto:achirmul@asu.edu">achirmul@asu.edu</a></p>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <a className="rounded-lg border p-4 hover:bg-accent" href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
            <a className="rounded-lg border p-4 hover:bg-accent" href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="rounded-lg border p-4 hover:bg-accent" href="tel:+14808769732">Phone: 480-876-9732</a>
            <a className="rounded-lg border p-4 hover:bg-accent" href="/projects">Projects</a>
          </div>
          <div className="rounded-xl overflow-hidden border">
            <img
              src="https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=1600&auto=format&fit=crop"
              alt="Contact"
              className="w-full h-48 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
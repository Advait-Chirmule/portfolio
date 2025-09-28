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

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || "someone"}`);
    const signature = name ? `${name}\n${email}` : email;
    const body = encodeURIComponent(`${message}\n\n-${signature}`);
    window.location.href = `mailto:achirmul@asu.edu?subject=${subject}&body=${body}`;
  };

  return (
    <div className="mx-auto max-w-6xl px-6 sm:px-10 py-12">
      <header className="mb-8 space-y-2">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Contact</h1>
        <p className="text-muted-foreground max-w-2xl">
          Let us build something resilient together. Share a bit about the opportunity and I will reply within two business days.
        </p>
      </header>

      <div className="grid gap-8 lg:grid-cols-2">
        <Card>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="name">
                  Name
                </label>
                <Input id="name" value={name} onChange={(event) => setName(event.target.value)} placeholder="Jane Doe" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="email">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="jane@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="message">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="Tell me about the role, timeline, and goals."
                  rows={6}
                  required
                />
              </div>
              <Button type="submit" className="w-full sm:w-auto">
                Send message
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold">Reach me directly</h2>
            <p className="text-sm text-muted-foreground mt-1">
              Email <a className="underline" href="mailto:achirmul@asu.edu">achirmul@asu.edu</a> or call <a className="underline" href="tel:+14808769732">480-876-9732</a>.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <a
              className="rounded-lg border p-4 hover:bg-accent"
              href="https://github.com/AdvaitChirmule"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="rounded-lg border p-4 hover:bg-accent"
              href="https://www.linkedin.com/in/advait-chirmule/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a className="rounded-lg border p-4 hover:bg-accent" href="/Advait%20Chirmule%20SE%20Resume.pdf" target="_blank" rel="noreferrer">
              Download resume
            </a>
            <a className="rounded-lg border p-4 hover:bg-accent" href="https://maps.google.com/?q=Tempe,+AZ" target="_blank" rel="noreferrer">
              Based in Tempe, AZ
            </a>
          </div>
          <div className="rounded-xl overflow-hidden border">
            <img
              src="https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=1600&auto=format&fit=crop"
              alt="Sunrise over Tempe"
              className="w-full h-48 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
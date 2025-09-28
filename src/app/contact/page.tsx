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
    const subject = encodeURIComponent(`Software Engineer opportunity from ${name || "a recruiter"}`);
    const signature = name ? `${name}\n${email}` : email;
    const body = encodeURIComponent(`${message}\n\n-${signature}`);
    window.location.href = `mailto:achirmul@asu.edu?subject=${subject}&body=${body}`;
  };

  return (
    <div className="mx-auto max-w-6xl px-6 sm:px-10 py-12">
      <header className="mb-8 space-y-2">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Contact</h1>
        <p className="text-muted-foreground max-w-2xl">
          Please reach out regarding Software Engineer roles or collaborations related to full stack development, cloud automation, or applied research.
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
                <Input id="name" value={name} onChange={(event) => setName(event.target.value)} placeholder="Your name" required />
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
                  placeholder="you@example.com"
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
                  placeholder="Please share role details or collaboration goals."
                  rows={6}
                  required
                />
              </div>
              <Button type="submit" className="w-full sm:w-auto">
                Email Advait
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold">Direct contact</h2>
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
            <div className="rounded-lg border p-4 text-muted-foreground">
              Based in Tempe, Arizona
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
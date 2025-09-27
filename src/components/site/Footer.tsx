"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 py-10 grid gap-8 sm:grid-cols-2">
        <div className="space-y-2">
          <div className="font-semibold">Your Name</div>
          <p className="text-sm text-muted-foreground max-w-prose">
            Frontend engineer building fast, accessible web experiences.
          </p>
        </div>
        <div className="flex sm:justify-end gap-4 text-sm">
          <Link className="text-muted-foreground hover:text-foreground" href="https://github.com" target="_blank" rel="noreferrer">
            GitHub
          </Link>
          <Link className="text-muted-foreground hover:text-foreground" href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </Link>
          <Link className="text-muted-foreground hover:text-foreground" href="/contact">
            Contact
          </Link>
        </div>
      </div>
      <div className="text-center text-xs text-muted-foreground pb-8">© {new Date().getFullYear()} Your Name. All rights reserved.</div>
    </footer>
  );
}
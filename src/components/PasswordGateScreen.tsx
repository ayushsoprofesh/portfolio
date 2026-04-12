"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useMemo, useState } from "react";
import {
  CONTACT_LINKS,
  PASSWORD_TARGETS,
  type PasswordTargetKey,
} from "@/lib/portfolio-content";
import GlobalNav from "@/components/GlobalNav";
import InteractiveBackground from "@/components/InteractiveBackground";

export default function PasswordGateScreen() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const project = searchParams.get("project") as PasswordTargetKey | null;

  const target = useMemo(() => {
    if (!project) {
      return null;
    }

    return PASSWORD_TARGETS[project] ?? null;
  }, [project]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!project || !target) {
      setError("This protected project link is unavailable.");
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/password-gate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          project,
          password,
        }),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        setError(data.error ?? "Unable to validate password.");
        return;
      }

      if (target.success.type === "internal") {
        router.push(target.success.href);
        return;
      }

      window.open(target.success.href, "_blank", "noopener,noreferrer");
      router.push("/");
    } catch {
      setError("Something went wrong while validating the password.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <GlobalNav activeSection={2} />
      <main className="password-gate-page">
        <div className="password-gate-background-layer">
          <InteractiveBackground showChevron={false} activeSection={2} />
        </div>

        <div className="password-gate-shell">
          <div className="password-gate-badge">
            Protected route
            {target ? ` | ${target.label}` : ""}
          </div>

          <div className="password-gate-copy">
            <p className="password-gate-kicker">Restricted Access</p>
            <h1 className="password-gate-title">Restricted Access</h1>
            <p className="password-gate-description">
              This project contains sensitive enterprise data under NDA. Please
              enter the password to proceed.
            </p>
          </div>

          <form className="password-gate-form" onSubmit={handleSubmit}>
            <label className="password-gate-label" htmlFor="project-password">
              Password
            </label>
            <input
              id="project-password"
              className="password-gate-input"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter password"
              autoComplete="current-password"
              disabled={isSubmitting}
            />

            {error ? (
              <p className="password-gate-error" role="alert">
                {error}
              </p>
            ) : null}

            <button
              className="password-gate-submit"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Checking..." : "Unlock Project"}
            </button>
          </form>

          <p className="password-gate-helper">
            Don&apos;t have a password? Reach out:{" "}
            <a href={`mailto:${CONTACT_LINKS.email}`}>{CONTACT_LINKS.email}</a>
            {" | "}
            <a
              href={CONTACT_LINKS.linkedin}
              target="_blank"
              rel="noreferrer noopener"
            >
              LinkedIn
            </a>
          </p>

          <Link className="password-gate-back" href="/">
            {"<- Back to Home"}
          </Link>
        </div>
      </main>
    </>
  );
}

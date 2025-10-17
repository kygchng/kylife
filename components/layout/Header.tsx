"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "../../lib/site";

export default function Header() {
  const pathname = usePathname();
  const [now, setNow] = useState(new Date());
  const [lastUpdated] = useState(new Date());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (pathname === "/") {
    return null;
  }

  const formatTimestamp = (date: Date) => {
    return date.toLocaleString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  const formatLastUpdated = (date: Date) => {
    return date.toLocaleString("en-US", {
      month: "2-digit",
      year: "numeric",
    });
  };

  return (
    <header className="px-4 md:px-6 border-b">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-4">
        {/* Left Column */}
        <div className="text-[13px] md:text-sm leading-5 tracking-tight">
          <Link
            href="/work"
            className="font-medium hover:opacity-60 transition-opacity"
          >
            {site.name}
          </Link>
          <div className="mt-1 text-neutral-700">{site.status}</div>
          <div className="mt-1 text-neutral-600">{mounted ? formatTimestamp(now) : "loading..."}</div>
          <div className="text-neutral-600">
            (last updated on {formatLastUpdated(lastUpdated)})
          </div>
        </div>

        {/* Center Column */}
        <div className="text-[13px] md:text-sm leading-5 tracking-tight text-neutral-700">
          <div className="hidden md:block">
            {site.role}
            <br />
            {site.previous.join(", ")}
          </div>
          <div className="md:hidden">
            {site.role} · {site.previous.join(" · ")}
            <span className="inline-block w-3 h-3 rounded-full bg-amber-300 ml-2 align-middle"></span>
          </div>
        </div>

        {/* Right Column */}
        <div className="text-[13px] md:text-sm leading-5 tracking-tight">
          <ul className="space-y-1">
            {site.social.map((link) => (
              <li key={link.name}>
                <a
                  href={link.url}
                  target={link.name !== "E-mail" ? "_blank" : undefined}
                  rel={link.name !== "E-mail" ? "noreferrer" : undefined}
                  aria-label={link.label}
                  className="underline decoration-dotted underline-offset-[3px] hover:opacity-60 transition-opacity"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Nav Row */}
      <div className="flex justify-end gap-6 py-2 text-sm border-t">
        <Link href="/work" className="hover:opacity-60 transition-opacity">
          Work
        </Link>
        <Link href="/archive" className="hover:opacity-60 transition-opacity">
          Archive
        </Link>
      </div>
    </header>
  );
}

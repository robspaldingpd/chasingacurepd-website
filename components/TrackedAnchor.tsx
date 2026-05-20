"use client";
import { track } from "@vercel/analytics/react";
import type { CSSProperties, ReactNode } from "react";

interface Props {
  href: string;
  eventName: string;
  eventProps?: Record<string, string>;
  style?: CSSProperties;
  children: ReactNode;
}

export default function TrackedAnchor({ href, eventName, eventProps, style, children }: Props) {
  return (
    <a
      href={href}
      onClick={() => track(eventName, eventProps)}
      style={style}
    >
      {children}
    </a>
  );
}

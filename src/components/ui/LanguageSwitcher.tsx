"use client";

// Since the site is Turkish-only, this component is kept for potential future use
// but renders nothing

interface LanguageSwitcherProps {
  variant?: "light" | "dark";
  className?: string;
}

export function LanguageSwitcher({ variant = "light", className }: LanguageSwitcherProps) {
  // Site is Turkish-only, no language switcher needed
  return null;
}

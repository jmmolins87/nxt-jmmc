




"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";


export function DynamicFavicon() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const faviconLinks = [
      ...document.querySelectorAll("link[rel='icon']"),
      ...document.querySelectorAll("link[rel='shortcut icon']")
    ];
    const faviconUrl =
      resolvedTheme === "dark" ? "/favicon_dark.ico" : "/favicon_light.ico";
    faviconLinks.forEach(link => link.setAttribute("href", faviconUrl));
  }, [resolvedTheme]);

  return null;
}
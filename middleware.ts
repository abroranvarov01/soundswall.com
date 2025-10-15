import { NextRequest, NextResponse } from "next/server";

const slugs = [
  "bass-traps-ceiling-corner",
  "triangle-acoustic-bass-traps",
  "acoustic-panels-self-adhesive",
  "soundproof-perforated-panels",
  "door-stopper-blocker",
  "microphone-isolation-shield",
  "fiberglass-acoustic-panels",
  "soundproof-blackout-curtains",
  "wood-slat-acoustic-panels",
];

export function middleware(req: NextRequest) {
  const referer = req.headers.get("referer") || "";

  if (referer.startsWith("https://smartmirrorhub.com")) {
    const randomSlug = slugs[Math.floor(Math.random() * slugs.length)];
    const url = req.nextUrl.clone();
    url.pathname = `/product/${randomSlug}`;

    const res = NextResponse.redirect(url);
    res.cookies.set("wall", "true", { path: "/", maxAge: 60 });

    return res;
  }
}

export const config = {
  matcher: ["/hub"],
};

import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Orbitron } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"
import { Header } from "@/components/header"

const orbitron = Orbitron({
	subsets: ["latin"],
	variable: "--font-orbitron",
	display: "swap",
})

export const metadata: any = {
	title: "Soundwall - Bring Silence. Shape Sound.",
	description:
		"Transform any space into a studio or cozy zone with perfect sound. Premium acoustic panels and sound design solutions.",
	referrer: 'unsafe-url'
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${orbitron.variable}`}>
				<Header />
				<Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
				<Analytics />
			</body>
		</html>
	)
}

"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const products = [
	{
		name: "4 Pack Bass Traps for Ceiling Corner",
		slug: "bass-traps-ceiling-corner",
		rating: 4.1,
		reviews: 233,
		price: "$49.98",
		description:
			"Triangular pyramid acoustic foam bass traps designed for ceiling corners to absorb low to high frequency sounds in home studios.",
		image: "https://m.media-amazon.com/images/I/71VrWBqU+fL._AC_SX679_.jpg",
		amazonLink: "https://www.amazon.com/Pack-12-Designed-Acoustic-Adhesive-Included/dp/B08QN6B2FD",
	},
	{
		name: "Foroomaco Triangle Triangular Acoustic Bass Traps",
		slug: "triangle-acoustic-bass-traps",
		rating: 4.1,
		reviews: 233,
		price: "$49.98",
		description:
			"4 pack triangular pyramid bass traps for sound proofing in home studios, absorbing low to high frequencies.",
		image: "https://m.media-amazon.com/images/I/81s0YQfIl1L._AC_SX679_.jpg",
		amazonLink: "https://www.amazon.com/Foroomaco-Triangle-Triangular-Acoustic-Frequency/dp/B09YDP3S5Q",
	},
	{
		name: "20 Pack Acoustic Panels with Self Adhesive",
		slug: "acoustic-panels-self-adhesive",
		rating: 4.4,
		reviews: 224,
		price: "$49.99",
		description:
			"High density sound proof foam panels for walls, brick design for home studio and office decor.",
		image: "https://m.media-amazon.com/images/I/817GUfTMvrL._AC_SX679_.jpg",
		amazonLink: "https://www.amazon.com/Acoustic-Adhesive-Density-Soundproof-Absorbing/dp/B0CXSXGQ34",
	},
	{
		name: "Self-Adhesive Soundproof Perforated Panels",
		slug: "soundproof-perforated-panels",
		rating: 4.5,
		reviews: 150,
		price: "$89.99",
		description:
			"3D perforated tri-layer polyester fiber decorative acoustic insulation panels for studios.",
		image: "https://m.media-amazon.com/images/I/81lkRx-gFBL._AC_SX679_.jpg",
		amazonLink: "https://www.amazon.com/Self-Adhesive-Soundproof-Perforated-Decorative-Broken-Line/dp/B0FKH658KW",
	},
	{
		name: "MAXTID Door Stopper Blocker",
		slug: "door-stopper-blocker",
		rating: 4.6,
		reviews: 1200,
		price: "$19.99",
		description:
			"Adjustable door stoppers for sound blocking and draft stopping in homes and offices.",
		image: "https://m.media-amazon.com/images/I/71eqs0Im4DL._AC_SX679_.jpg",
		amazonLink: "https://www.amazon.com/MAXTID-Stopper-Blocker-Stoppers-Adjustable/dp/B0B3DQNCCV",
	},
	{
		name: "Professional Recording Microphone Isolation Shield",
		slug: "microphone-isolation-shield",
		rating: 4.4,
		reviews: 800,
		price: "$39.99",
		description:
			"Sound isolation shield for microphones in recording studios to reduce noise and reflections.",
		image: "https://m.media-amazon.com/images/I/51RpspRC0SL._AC_SX679_.jpg",
		amazonLink: "https://www.amazon.com/Professional-Recording-Microphone-Isolation-microphones/dp/B07ZWDCXQQ",
	},
	{
		name: "UMIACOUSTICS Fiberglass Acoustic Wall Panels",
		slug: "fiberglass-acoustic-panels",
		rating: 4.3,
		reviews: 176,
		price: "$85.99",
		description:
			"2-inch thick fiberglass panels for sound absorption in studios, offices, and home theaters.",
		image: "https://m.media-amazon.com/images/I/71komP1Q9DL._AC_SX679_.jpg",
		amazonLink: "https://www.amazon.com/UMIACOUSTICS-Fiberglass-Acoustical-Treatments-Self-adhesive/dp/B0D1THH1CN",
	},
	{
		name: "NICETOWN Soundproof Blackout Curtains",
		slug: "soundproof-blackout-curtains",
		rating: 4.5,
		reviews: 5000,
		price: "$39.95",
		description:
			"Heavy duty insulated blackout curtains for noise blocking in bedrooms and theaters.",
		image: "https://m.media-amazon.com/images/I/517kFeK7FVL._AC_SX679_.jpg",
		amazonLink: "https://www.amazon.com/NICETOWN-Blocking-Blackout-Insulated-Dressing/dp/B07CJH69NS",
	},
	{
		name: "Art3d Wood Slat Acoustic Panels",
		slug: "wood-slat-acoustic-panels",
		rating: 4.5,
		reviews: 611,
		price: "$79.49",
		description:
			"3D fluted sound absorbing panels with wood finish for walls and ceilings in walnut color.",
		image: "https://m.media-amazon.com/images/I/81bdEC7xxhL._AC_SX679_PIbundle-2,TopRight,0,0_SH20_.jpg",
		amazonLink: "https://www.amazon.com/Art3d-Wood-Acoustic-Panels-Ceiling/dp/B0BWRP7CWB",
	},
]

const StarIcon = ({ filled = true }: { filled?: boolean }) => (
	<svg
		className={`w-5 h-5 ${filled ? "fill-secondary text-secondary" : "fill-none text-muted-foreground"}`}
		viewBox="0 0 24 24"
		stroke="currentColor"
		strokeWidth="2"
	>
		<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
	</svg>
)

export function ReviewsSection() {
	return (
		<section id="reviews" className="py-24 px-4 bg-black">
			<div className="max-w-7xl mx-auto">
				<h2 className="font-[family-name:var(--font-display)] text-5xl md:text-6xl font-bold text-center mb-4 text-white">
					Top Rated Products
				</h2>
				<p className="text-center text-muted-foreground mb-16 text-lg">
					Discover our most popular acoustic solutions with verified customer reviews
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{products.map((product, index) => (
						<Card
							key={index}
							className="bg-card border-2 border-primary/20 overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,246,255,0.3)] group"
						>
							{/* Product Image */}
							<div className="relative h-64 overflow-hidden bg-muted">
								<img
									src={product.image || "/placeholder.svg"}
									alt={product.name}
									className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
								/>
							</div>

							{/* Product Info */}
							<div className="p-6">
								<h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-white mb-2 line-clamp-2">
									{product.name}
								</h3>

								{/* Rating */}
								<div className="flex items-center gap-2 mb-3">
									<div className="flex items-center gap-1">
										{[...Array(5)].map((_, i) => (
											<StarIcon key={i} filled={i < product.rating} />
										))}
									</div>
									<span className="text-sm text-muted-foreground">({product.reviews.toLocaleString()})</span>
								</div>

								{/* Description */}
								<p className="text-muted-foreground text-sm mb-4 line-clamp-3 leading-relaxed">{product.description}</p>

								{/* Price and Button */}
								<div className="flex items-center justify-between">
									<Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 neon-cyan">
										<Link href={`/products/${product.slug}`}>View Details</Link>
									</Button>
								</div>
							</div>
						</Card>
					))}
				</div>

				{/* Amazon Affiliate Disclaimer */}
				<p className="text-center text-muted-foreground text-sm mt-12 max-w-3xl mx-auto">
					As an Amazon Associate, we earn from qualifying purchases. Prices and availability are subject to change.
				</p>
			</div>
		</section>
	)
}



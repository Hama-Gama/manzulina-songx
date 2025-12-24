import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { FloatingButton } from '@/components/common/FloatingButton'

import { Hero } from '@/sections/Hero'
import { Pricing } from '@/sections/Pricing'
import { FAQ } from '@/sections/FAQ'
import { Reviews } from '@/sections/Reviews'
import { Gallery } from '@/sections/Gallery'
import { ReactionVideo } from '@/sections/ReactionVideo'

export default function Home() {
	return (
		<div className='min-h-screen flex flex-col bg-surface-900'>
			{/* Header */}
			<Header />

			{/* Main content */}
			<main className='flex-1'>
				<Hero />
				<Pricing />
				<FAQ />
				<Reviews />
				<Gallery />
				<ReactionVideo />
			</main>

			{/* Footer */}
			<Footer />

			{/* Floating WhatsApp Button */}
			<FloatingButton />
		</div>
	)
}

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

export function Hero() {
	// SVG-иконки: гитара, винил, микрофон, наушники, колонка, граммофон, нота
	const icons = [
		// Гитара
		<g>
			<path d='M19 3l2 2' />
			<path d='M18 4l2 2' />
			<path d='M14.5 7.5l2-2a2 2 0 1 1 2.8 2.8l-2 2' />
			<path d='M7 11l6-6' />
			<circle cx='6.5' cy='14.5' r='3.5' />
			<path d='M9 12l3 3' />
			<path d='M5 16l-2 2' />
		</g>,
		// Винил
		<g>
			<circle cx='12' cy='12' r='9' />
			<circle cx='12' cy='12' r='3' />
			<path d='M12 3a9 9 0 0 0 9 9' />
			<path d='M12 21a9 9 0 0 1-9-9' />
		</g>,
		// Микрофон
		<g>
			<rect x='9' y='3' width='6' height='8' rx='3' />
			<path d='M12 11v5' />
			<path d='M8 16h8' />
			<path d='M10 20h4' />
		</g>,
		// Наушники
		<g>
			<path d='M4 13a8 8 0 0 1 16 0' />
			<rect x='3' y='13' width='4' height='7' rx='2' />
			<rect x='17' y='13' width='4' height='7' rx='2' />
		</g>,
		// Колонка
		<g>
			<rect x='6' y='3' width='12' height='18' rx='2' />
			<circle cx='12' cy='9' r='2' />
			<circle cx='12' cy='15' r='3' />
		</g>,
		// Граммофон
		<g>
			<path d='M4 20h16v2H4z' />
			<path d='M12 20v-6' />
			<circle cx='12' cy='10' r='4' />
			<path d='M16 6l4-4' />
		</g>,
		// Музыкальная нота
		<g>
			<path d='M12 3v10.5a4 4 0 1 0 2-3.5V7h4V3h-6z' />
		</g>,
	]

	const floatVariants = (i: number) => ({
		animate: {
			y: [0, -20, 0],
			rotate: [0, 12, -12, 0],
			opacity: [0.25, 0.4, 0.25],
		},
		transition: {
			duration: 6 + i * 0.7,
			repeat: Infinity,
			ease: 'easeInOut',
		},
	})

	const iconClass =
		'absolute text-white/40 w-16 h-16 sm:w-16 sm:h-16 md:w-20 md:h-20'

	return (
		<section
			id='hero'
			className='relative flex flex-col items-center justify-center bg-surface-900 text-center px-6 py-24 sm:py-32 overflow-hidden'
		>
			{/* Фоновые SVG */}
			<div className='absolute inset-0 pointer-events-none'>
				{icons.map((icon, i) => (
					<motion.svg
						key={i}
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						strokeWidth='2'
						className={iconClass}
						style={{
							top: `${Math.random() * 90 + 5}%`,
							left: `${Math.random() * 90 + 5}%`,
						}}
						{...floatVariants(i)}
					>
						{icon}
					</motion.svg>
				))}
			</div>

			{/* Контент */}
			<div className='max-w-4xl flex flex-col items-center relative z-10'>
				<motion.img
					src='/logo.png'
					alt='SongX logo'
					className='w-[280px] sm:w-[360px] md:w-[420px] mb-10 rounded-full'
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.8, ease: 'easeOut' }}
				/>

				<motion.h1
					className='text-4xl sm:text-5xl font-bold text-milk-50 leading-tight'
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
				>
					Песня на заказ для любимого человека
				</motion.h1>

				<motion.div
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.3 }}
					variants={{
						hidden: {},
						visible: {
							transition: { staggerChildren: 0.3, delayChildren: 0.2 },
						},
					}}
					className='flex flex-col items-center'
				>
					<motion.p
						className='mt-6 text-lg sm:text-xl text-lavender-300'
						variants={{
							hidden: { opacity: 0, y: 30 },
							visible: {
								opacity: 1,
								y: 0,
								transition: { duration: 0.8, ease: 'easeOut', type: 'spring' },
							},
						}}
					>
						Это больше, чем просто песня.
					</motion.p>
					<motion.p
						className='mt-2 text-lg sm:text-xl text-lavender-300'
						variants={{
							hidden: { opacity: 0, y: 30 },
							visible: {
								opacity: 1,
								y: 0,
								transition: { duration: 0.8, ease: 'easeOut', type: 'spring' },
							},
						}}
					>
						Твоя жизнь — сюжет.
					</motion.p>
					<motion.p
						className='mt-2 text-lg sm:text-xl text-lavender-300'
						variants={{
							hidden: { opacity: 0, y: 30 },
							visible: {
								opacity: 1,
								y: 0,
								transition: { duration: 0.8, ease: 'easeOut', type: 'spring' },
							},
						}}
					>
						Наша роль — музыка.
					</motion.p>
				</motion.div>

				<motion.div
					className='mt-10 flex flex-col sm:flex-row items-center justify-center gap-4'
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 1.2 }}
				>
					<a
						href='https://wa.me/77073280265?text=Здравствуйте! Хочу заказать песню в SongX.'
						target='_blank'
						rel='noopener noreferrer'
					>
						<Button
							className={cn(
								'bg-rose-500 hover:bg-rose-600 text-milk-50 px-6 py-3 text-base shadow-soft'
							)}
						>
							Заказать в WhatsApp
						</Button>
					</a>
					<span className='text-lg text-lavender-300'>
						от 9 999 тг • 20 $ • 1 600 руб
					</span>
				</motion.div>
			</div>

			<motion.img
				src='/images/cassette-hero.png'
				alt='SongX cassette'
				className='mt-16 w-[280px] sm:w-[360px] md:w-[420px] relative z-10'
				initial={{ opacity: 0, y: 60, rotate: -10 }}
				whileInView={{ opacity: 1, y: 0, rotate: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.8, ease: 'easeOut' }}
			/>
		</section>
	)
}

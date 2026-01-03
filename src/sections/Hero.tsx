import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { easeInOut } from 'framer-motion'

import { Copy, Check } from 'lucide-react'
import { useState } from 'react'



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
			ease: easeInOut,
		},
	})

	const iconClass =
		'absolute text-white/40 w-16 h-16 sm:w-16 sm:h-16 md:w-20 md:h-20'

		const [copied, setCopied] = useState(false)


	return (
		<section
			id='hero'
			className='relative flex flex-col items-center justify-center bg-surface-900 text-center px-2 py-24 sm:py-32 overflow-hidden'
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
				
				<div className='mt-10 max-w-3xl text-center'>
					<h2 className='text-2xl sm:text-3xl font-semibold text-milk-50 mb-4'>
						Кому заказывают песни в SongX
					</h2>

					<ul className='text-lg sm:text-xl text-lavender-300 space-y-2'>
						<li>❤️ Любимому / любимой</li>
						<li>👨‍👩‍👧‍👦 Семье, родителям</li>
						<li>🤍 Подруге или другу</li>
						<li>💍 На свадьбу, годовщину</li>
						<li>🎂 На день рождения</li>
						<li>💌 Просто сказать «я люблю тебя»</li>
					</ul>
				</div>

				<div className='mt-14 max-w-3xl text-center'>
					<h2 className='text-2xl sm:text-3xl font-semibold text-milk-50 mb-6'>
						Как создаётся песня
					</h2>

					<div className='text-lg sm:text-xl text-lavender-300 space-y-3 text-left'>
						<p>1️⃣ Вы оставляете заявку, написав нам на WhatsApp</p>
						<p>2️⃣ Рассказываете, для кого и по какому поводу</p>
						<p>3️⃣ Мы пишем текст и музыку</p>
						<p>4️⃣ Вы получаете готовую песню</p>
					</div>

					<p className='text-base mt-6 text-milk-50 font-medium'>
						Без шаблонов. Каждая песня — уникальна.
					</p>
					<p className='text-base mt-6 text-milk-50 font-medium'>
						Стандартный срок изготовления песни 3-5 дней. Есть также экспресс
						услуга
					</p>
				</div>
				
					
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

			{/* Wildberries block */}
			<motion.div
				className='mt-10 flex flex-col items-center gap-4 relative z-10'
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.6, ease: 'easeOut' }}
			>
				<p className='text-lg sm:text-xl text-milk-50 font-medium'>
					Найти нас на <span className='text-fuchsia-400'>Wildberries</span>
				</p>

				{/* Артикул + копирование */}
				<div className='flex items-center gap-2 text-lavender-300'>
					<span>Артикул:</span>

					<code className='px-2 py-1 rounded bg-white/5 text-milk-50'>
						612296730
					</code>

					<button
						onClick={async () => {
							await navigator.clipboard.writeText('612296730')
							setCopied(true)
							setTimeout(() => setCopied(false), 1500)
						}}
						className='text-lavender-300 hover:text-milk-50 transition'
						aria-label='Скопировать артикул'
					>
						{copied ? (
							<Check className='w-4 h-4 text-emerald-400' />
						) : (
							<Copy className='w-4 h-4' />
						)}
					</button>
				</div>

				{/* Кнопка-картинка */}
				<a
					href='https://www.wildberries.ru/catalog/612296730/detail.aspx'
					target='_blank'
					rel='noopener noreferrer'
					className='group mt-2'
				>
					<img
						src='/images/wb-new.jpg'
						alt='SongX на Wildberries'
						className='
        w-[260px] sm:w-[300px]
        rounded-xl
        shadow-soft
        transition
        group-hover:scale-[1.03]
        group-hover:shadow-xl
      '
					/>
				</a>
			</motion.div>
		</section>
	)
}

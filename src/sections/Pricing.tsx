import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

export function Pricing() {
	const tiers = [
		{
			name: 'Стандарт',
			price: '9 999 тг',
			alt: '20 $ • 1 600 руб • 1 690 cом • 232 300 сум',
			note: 'Срок изготовления 3–5 дней',
			highlight: false,
		},
		{
			name: 'Экспресс',
			price: '20 000 тг',
			alt: '40 $ • 3 120 руб • 3 379 cом • 464 000 сум',
			note: 'Ускоренное создание песни',
			highlight: true,
		},
	]

	const item = {
		hidden: { opacity: 0, y: 40, scale: 0.95 },
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: { duration: 0.6, ease: 'easeOut' },
		},
	}

	return (
		<section id='pricing' className='bg-surface-800 px-1 py-8 text-white'>
			<div className='mx-auto max-w-6xl'>
				<motion.h2
					className='text-3xl font-bold'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.3 }}
					variants={{
						hidden: { opacity: 0, y: -20 },
						visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
					}}
				>
					Стоимость
				</motion.h2>

				<motion.p
					className='mt-2 text-base'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.3 }}
					variants={{
						hidden: { opacity: 0 },
						visible: { opacity: 1, transition: { duration: 0.6, delay: 0.2 } },
					}}
				>
					Прозрачные цены без скрытых платежей
				</motion.p>

				<div className='mt-8 grid gap-6 sm:grid-cols-2'>
					{tiers.map((tier, i) => (
						<motion.div
							key={tier.name}
							variants={item}
							initial='hidden'
							whileInView='visible'
							viewport={{ once: true, amount: 0.2 }}
							transition={{ delay: i * 0.25 }}
						>
							<Card
								className={cn(
									'bg-surface-900 border border-surface-800 text-white',
									tier.highlight && 'ring-2 ring-rose-500'
								)}
							>
								<CardHeader>
									<CardTitle>{tier.name}</CardTitle>
								</CardHeader>
								<CardContent className='space-y-2'>
									<p className='text-2xl font-semibold'>{tier.price}</p>
									<p className='text-sm'>{tier.alt}</p>
									<p className='text-base'>{tier.note}</p>
									<a
										href='https://wa.me/77073280265?text=Здравствуйте! Хочу обсудить заказ песни (SongX).'
										target='_blank'
										rel='noopener noreferrer'
										className='inline-block mt-4 rounded-md bg-rose-500 px-4 py-2 text-white hover:bg-rose-600 transition-colors'
									>
										Обсудить в WhatsApp
									</a>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>

				<motion.p
					className='mt-6 text-base'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.3 }}
					variants={{
						hidden: { opacity: 0 },
						visible: { opacity: 1, transition: { duration: 0.6, delay: 0.8 } },
					}}
				>
					Отправляем песни онлайн и на флешке по России. Есть артикул на
					Wildberries.
				</motion.p>
			</div>
		</section>
	)
}

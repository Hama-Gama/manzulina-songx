import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

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

	return (
		<section id='pricing' className='bg-surface-800 px-1 py-8 text-white'>
			<div className='mx-auto max-w-6xl'>
				<h2 className='text-3xl font-bold'>Стоимость</h2>
				<p className='mt-2 text-base'>Прозрачные цены без скрытых платежей</p>

				<div className='mt-8 grid gap-6 sm:grid-cols-2'>
					{tiers.map(tier => (
						<Card
							key={tier.name}
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
					))}
				</div>

				<p className='mt-6 text-base'>
					Отправляем песни онлайн и на флешке по России. Есть артикул на
					Wildberries.
				</p>
			</div>
		</section>
	)
}

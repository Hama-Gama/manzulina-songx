import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function Hero() {
	return (
		<section
			id='hero'
			className='relative flex items-center justify-center bg-surface-900 text-center px-6 py-24 sm:py-32'
		>
			<div className='max-w-4xl flex flex-col items-center'>
				{/* ЛОГОТИП */}
				<img
					src='/logo.png' // положи файл сюда
					alt='SongX logo'
					className='w-[280px] sm:w-[360px] md:w-[420px] mb-10 rounded-full'
				/>

				{/* Заголовок */}
				<h1 className='text-4xl sm:text-5xl font-bold text-milk-50 leading-tight'>
					Песня на заказ для любимого человека
				</h1>

				{/* Подзаголовок */}
				<p className='mt-6 text-lg sm:text-xl text-lavender-300'>
					Это больше, чем просто песня.
				</p>
				<p className='mt-2 text-lg sm:text-xl text-lavender-300'>
					Твоя жизнь — сюжет.
				</p>
				<p className='mt-2 text-lg sm:text-xl text-lavender-300'>
					Наша роль — музыка.
				</p>

				{/* Доверие */}
				<p className='mt-4 text-base text-milk-100'>
					Авторский подход • Живое исполнение
				</p>

				{/* CTA */}
				<div className='mt-10 flex flex-col sm:flex-row items-center justify-center gap-4'>
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
				</div>
			</div>
		</section>
	)
}

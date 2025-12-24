import { Youtube, Music, MessageCircle, Instagram } from 'lucide-react'

export function Footer() {
	return (
		<footer className='bg-surface-900 border-t border-surface-800'>
			<div className='mx-auto max-w-6xl px-6 py-12 grid gap-8 md:grid-cols-3'>
				{/* Лого и слоган */}
				<div>
					<h2 className='text-2xl font-bold text-rose-500'>
						Song<span className='text-lavender-300'>X</span>
					</h2>
					<p className='mt-3 text-sm text-milk-100'>
						Песня вместо тысячи слов. Уникальные композиции для любого повода.
					</p>
				</div>

				{/* Навигация */}
				<nav className='space-y-2 text-sm text-milk-100'>
					<a href='#hero' className='block hover:text-rose-300'>
						Главная
					</a>
					<a href='#pricing' className='block hover:text-rose-300'>
						Стоимость
					</a>
					<a href='#faq' className='block hover:text-rose-300'>
						FAQ
					</a>
					<a href='#reviews' className='block hover:text-rose-300'>
						Отзывы
					</a>
				</nav>

				{/* Соцсети */}
				<div className='flex flex-col gap-3'>
					<p className='text-sm text-milk-100'>Мы в соцсетях:</p>
					<div className='flex gap-4'>
						<a
							href='https://wa.me/77000000000?text=Здравствуйте! Хочу заказать песню в SongX.'
							target='_blank'
							rel='noopener noreferrer'
							className='text-milk-100 hover:text-rose-300'
						>
							<MessageCircle className='h-5 w-5' />
						</a>
						<a
							href='https://instagram.com/songx'
							target='_blank'
							rel='noopener noreferrer'
							className='text-milk-100 hover:text-rose-300'
						>
							<Instagram className='h-5 w-5' />
						</a>
						<a
							href='https://youtube.com/songx'
							target='_blank'
							rel='noopener noreferrer'
							className='text-milk-100 hover:text-rose-300'
						>
							<Youtube className='h-5 w-5' />
						</a>
						<a
							href='https://tiktok.com/@songx'
							target='_blank'
							rel='noopener noreferrer'
							className='text-milk-100 hover:text-rose-300'
						>
							<Music className='h-5 w-5' />
						</a>
					</div>
				</div>
			</div>

			{/* Нижняя линия */}
			<div className='border-t border-surface-800'>
				<div className='mx-auto max-w-6xl px-6 py-4 flex flex-col md:flex-row items-center justify-between text-xs text-milk-100'>
					<p>© {new Date().getFullYear()} SongX. Все права защищены.</p>
					<p className='mt-2 md:mt-0'>ИП / Публичная оферта</p>
				</div>
			</div>
		</footer>
	)
}

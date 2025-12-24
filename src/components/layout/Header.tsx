import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Link } from 'react-scroll' // если используешь scroll навигацию

export function Header() {
	return (
		<header className='fixed top-0 left-0 right-0 z-50 bg-surface-900/80 backdrop-blur-md border-b border-surface-800'>
			<div className='mx-auto flex max-w-6xl items-center justify-between px-6 py-4'>
				{/* Логотип */}
				<div className='text-2xl font-bold text-rose-500 tracking-tight'>
					Song<span className='text-lavender-300'>X</span>
				</div>

				{/* Навигация */}
				<nav className='hidden md:flex items-center gap-6 text-milk-100 text-sm font-medium'>
					<Link
						to='hero'
						smooth
						duration={500}
						className='cursor-pointer hover:text-rose-300'
					>
						Главная
					</Link>
					<Link
						to='pricing'
						smooth
						duration={500}
						className='cursor-pointer hover:text-rose-300'
					>
						Стоимость
					</Link>
					<Link
						to='faq'
						smooth
						duration={500}
						className='cursor-pointer hover:text-rose-300'
					>
						FAQ
					</Link>
					<Link
						to='reviews'
						smooth
						duration={500}
						className='cursor-pointer hover:text-rose-300'
					>
						Отзывы
					</Link>
				</nav>

				{/* CTA WhatsApp */}
				<a
					href='https://wa.me/77000000000?text=Здравствуйте! Хочу заказать песню в SongX.'
					target='_blank'
					rel='noopener noreferrer'
				>
					<Button
						className={cn(
							'bg-rose-500 hover:bg-rose-600 text-milk-50 px-4 py-2 text-sm shadow-soft'
						)}
					>
						Заказать
					</Button>
				</a>
			</div>
		</header>
	)
}

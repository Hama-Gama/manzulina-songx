import { cn } from '@/lib/utils'

const photos = [
	{ src: '/images/1.jpg', alt: 'Дарят песню SongX' },
	{ src: '/images/2.jpg', alt: 'Реакция на подарок' },
	{ src: '/images/3.jpg', alt: 'Семейный момент' },
	{ src: '/images/4.jpg', alt: 'Друзья слушают песню' },
	{ src: '/images/5.jpg', alt: 'Флешка с песней' },
	{ src: '/images/6.jpg', alt: 'Студийный процесс' },
	{ src: '/images/7.jpg', alt: 'Запись вокала' },
]

export function Gallery() {
	return (
		<section id='gallery' className='bg-surface-800 px-1 py-8'>
			<div className='mx-auto max-w-6xl'>
				<h2 className='text-3xl font-bold text-white'>Галерея</h2>
				<p className='mt-2 text-lg text-white/70'>
					Несколько моментов, связанных с нашими песнями
				</p>

				{/* Bento Grid */}
				<div className='mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 auto-rows-[180px]'>
					{photos.map((photo, i) => (
						<div
							key={i}
							className={cn(
								'overflow-hidden rounded-lg ring-1 ring-white/20',
								'hover:scale-105 transform transition duration-300',
								// задаём разные размеры для эффекта "bento"
								i === 0 && 'col-span-2 row-span-2',
								i === 3 && 'row-span-2',
								i === 6 && 'col-span-2'
							)}
						>
							<img
								src={photo.src}
								alt={photo.alt}
								className='h-full w-full object-cover'
								loading='lazy'
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

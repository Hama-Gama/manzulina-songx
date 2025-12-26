import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

const reviews = [
	{
		name: 'Айдана',
		text: 'Песня вместо тысячи слов. Плакали все!',
		tag: 'День рождения',
		image: '/images/review-1.jpg',
	},
	{
		name: 'Руслан',
		text: 'Семейный гимн. Спасибо!',
		tag: 'Годовщина',
		image: '/images/review-2.jpg',
	},
	{
		name: 'Мария',
		text: 'Очень трогательно, все гости были в восторге.',
		tag: 'Свадьба',
		image: '/images/review-3.jpg',
	},
	{
		name: 'Данияр',
		text: 'Заказал для мамы, она слушает каждый день.',
		tag: 'Для семьи',
		image: '/images/review-1.jpg',
	},
]

export function Reviews() {
	return (
		<section id='reviews' className='bg-surface-900 px-1 py-8'>
			<div className='mx-auto max-w-6xl p-4'>
				<h2 className='text-3xl font-bold text-milk-50'>Отзывы</h2>
				<p className='mt-2 text-lavender-300 text-lg'>
					Что говорят наши клиенты
				</p>

				<Swiper
					modules={[Pagination]}
					spaceBetween={16}
					slidesPerView={1}
					breakpoints={{
						640: { slidesPerView: 2 },
						1024: { slidesPerView: 3 },
					}}
					pagination={{ clickable: true }}
					className='mt-8'
				>
					{reviews.map((r, i) => (
						<SwiperSlide
							key={i}
							className='rounded-xl bg-surface-800 p-5 ring-1 ring-lavender-500/20 flex flex-col items-center text-center'
						>
							{/* Горизонтальный блок: аватар + кассета */}
							<div className='flex items-center justify-center gap-4 mb-4'>
								<img
									src={r.image}
									alt={r.name}
									className='w-20 h-20 rounded-full object-cover ring-2 ring-lavender-500/30'
								/>
								<img
									src='/images/cassete.png'
									alt='Кассета'
									className='
									h-20 w-auto object-contain hidden sm:block
									rounded-lg
									sepia-[0.25]
									contrast-110
									saturate-90
									shadow-[0_4px_10px_rgba(0,0,0,0.25)]
	                '
								/>
							</div>

							<p className='text-milk-50'>{r.text}</p>
							<div className='mt-3 text-sm text-lavender-300 mb-8'>
								{r.name} • {r.tag}
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	)
}

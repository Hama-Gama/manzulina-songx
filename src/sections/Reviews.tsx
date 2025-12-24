import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

const reviews = [
	{
		name: 'Айдана',
		text: 'Песня вместо тысячи слов. Плакали все!',
		tag: 'День рождения',
	},
	{ name: 'Руслан', text: 'Семейный гимн. Спасибо!', tag: 'Годовщина' },
	{
		name: 'Мария',
		text: 'Очень трогательно, все гости были в восторге.',
		tag: 'Свадьба',
	},
	{
		name: 'Данияр',
		text: 'Заказал для мамы, она слушает каждый день.',
		tag: 'Для семьи',
	},
]

export function Reviews() {
	return (
		<section id='reviews' className='bg-surface-900 px-6 py-16'>
			<div className='mx-auto max-w-6xl'>
				<h2 className='text-3xl font-bold text-milk-50'>Отзывы</h2>
				<p className='mt-2 text-lavender-300 text-sm'>
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
							className='rounded-xl bg-surface-800 p-5 ring-1 ring-lavender-500/20'
						>
							<p className='text-milk-50'>{r.text}</p>
							<div className='mt-3 text-sm text-lavender-300'>
								{r.name} • {r.tag}
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	)
}


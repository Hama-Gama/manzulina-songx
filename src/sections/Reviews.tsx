



const reviews = [
	{
		name: 'Для детей',
		tag: 'Для дочери Татевик и сына Саргис',
		image: '/images/review-1.jpg',
	},
	{
		name: 'Песня для мужа Виктора',
		tag: 'Виктор, мы с тобой навсегда',
		image: '/images/review-2.jpg',
	},
	{
		name: 'Молодая пара',
		tag: 'На годовщину',
		image: '/images/review-3.jpg',
	},
	{
		name: 'Для детей',
		tag: 'На Новый Год!',
		image: '/images/review-4.jpg',
	},
]


function ReviewCard({
	name,
	tag,
	image,
}: {
	name: string
	tag: string
	image: string
}) {
	return (
		<div
			className='
        group p-0
        rounded-2xl
        bg-surface-800
        ring-1 ring-lavender-500/20
        overflow-hidden
        transition
        hover:ring-lavender-400/40
      '
		>
			{/* Скрин переписки */}
			<div className='relative overflow-hidden'>
				<img
					src={image}
					alt={`Отзыв от ${name}`}
					className='
            h-full w-full object-contain
            transition-transform duration-300
            group-hover:scale-105
          '
				/>
			</div>

			{/* Подпись */}
			<div className='p-4 text-center'>
				<p className='text-milk-50 font-bold'>{name}</p>
				<p className='mt-1 text-sm text-lavender-300 italic'>{tag}</p>
			</div>
		</div>
	)
}



export function Reviews() {
	return (
		<section id='reviews' className='bg-surface-900 px-4 py-12'>
			<div className='mx-auto max-w-6xl'>
				<h2 className='text-3xl font-bold text-milk-50'>Отзывы</h2>
				<p className='mt-2 text-lg text-lavender-300'>
					Реальные сообщения наших клиентов
				</p>

				<div
					className='
            mt-10
            grid gap-6
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
          '
				>
					{reviews.map((r, i) => (
						<ReviewCard key={i} {...r} />
					))}
				</div>
			</div>
		</section>
	)
}

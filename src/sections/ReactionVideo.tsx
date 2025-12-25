import { useState } from 'react'

export function ReactionVideo() {
	const [play, setPlay] = useState(false)

	return (
		<section id='reaction' className='bg-surface-900 px-1 py-8'>
			<div className='mx-auto max-w-4xl'>
				<h2 className='text-3xl font-bold text-milk-50'>Реакция на подарок</h2>
				<p className='mt-2 text-lavender-300 text-lg'>
					Настоящие эмоции, когда дарят песню SongX
				</p>

				<div className='mt-6 aspect-video overflow-hidden rounded-sm ring-1 ring-lavender-500/30 relative'>
					{!play ? (
						<button
							onClick={() => setPlay(true)}
							className='absolute inset-0 flex items-center justify-center group'
						>
							{/* Кастомный thumbnail */}
							<img
								src='/images/1.jpg'
								alt='Preview'
								className='h-full w-full object-cover'
							/>
							{/* Кнопка play поверх */}
							<div className='absolute inset-0 flex items-center justify-center'>
								<div className='bg-rose-500/80 rounded-full p-4 group-hover:bg-rose-600 transition'>
									▶
								</div>
							</div>
						</button>
					) : (
						<iframe
							src='https://www.youtube.com/embed/HvBYEUC0zhQ?si=xavDNwAPo7sx-IEJ'
							title='Reaction video'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen
							className='h-full w-full'
						/>
					)}
				</div>
			</div>
		</section>
	)
}

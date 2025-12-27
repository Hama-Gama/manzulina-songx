import { useEffect, useRef, useState } from 'react'
import WaveSurfer from 'wavesurfer.js'
import { Play, Pause } from 'lucide-react'
import { cn } from '@/lib/utils'

const tracks = [
	{
		title: 'Песня №1 — Мухаммад',
		src: '/audio/Muhhamad.mp3',
	},
	{
		title: 'Песня №2 — Жду, тебя, Виктор',
		src: '/audio/Victor.mp3',
	},
	{
		title: 'Песня №3 — Предложение',
		src: '/audio/song-3.mp3',
	},
]

const formatTime = time => {
	const minutes = Math.floor(time / 60)
	const seconds = Math.floor(time % 60)
	return `${minutes}:${seconds.toString().padStart(2, '0')}`
}

export function AudioPlaylist() {
	const waveRef = useRef(null)
	const waveSurfer = useRef(null)

	const [current, setCurrent] = useState(null)
	const [isPlaying, setIsPlaying] = useState(false)
	const [currentTime, setCurrentTime] = useState(0)
	const [duration, setDuration] = useState(0)

	useEffect(() => {
		if (current === null) return
		if (!waveRef.current) return

		waveSurfer.current?.destroy()

		waveSurfer.current = WaveSurfer.create({
			container: waveRef.current,
			waveColor: 'rgba(255,255,255,0.25)',
			progressColor: '#ec4899',
			cursorColor: '#f472b6',
			height: 64,
			barWidth: 2,
			barGap: 2,
			interact: true,
		})

		waveSurfer.current.load(tracks[current].src)

		waveSurfer.current.on('ready', () => {
			setDuration(waveSurfer.current.getDuration())
			waveSurfer.current.play()
			setIsPlaying(true)
		})

		waveSurfer.current.on('audioprocess', () => {
			setCurrentTime(waveSurfer.current.getCurrentTime())
		})

		waveSurfer.current.on('interaction', () => {
			setCurrentTime(waveSurfer.current.getCurrentTime())
		})

		waveSurfer.current.on('finish', () => {
			setIsPlaying(false)
			setCurrentTime(0)
		})

		return () => {
			waveSurfer.current?.destroy()
			waveSurfer.current = null
		}
	}, [current])

	const togglePlay = index => {
		if (current === index) {
			waveSurfer.current?.playPause()
			setIsPlaying(waveSurfer.current?.isPlaying() ?? false)
		} else {
			setCurrent(index)
			setCurrentTime(0)
		}
	}

	return (
		<section className='w-full max-w-2xl mx-auto'>
			{/* 🔹 TITLE + DESCRIPTION */}
			<div className='mb-8 text-center'>
				<h2 className='text-2xl sm:text-3xl font-semibold text-milk-50'>
					Примеры песен, которые я исполнила на заказ
				</h2>
				<p className='mt-3 text-lavender-300 text-base sm:text-base max-w-xl mx-auto'>
					Каждая из этих песен была написана и спета специально для конкретного
					человека. Твоя история может стать следующей.
				</p>
			</div>

			{/* 🔹 PLAYLIST */}
			<div className='space-y-6'>
				{tracks.map((track, index) => {
					const active = current === index

					return (
						<div
							key={index}
							className={cn(
								'rounded-xl p-4 border backdrop-blur',
								'bg-white/5 border-white/10',
								active && 'border-rose-500/40 bg-rose-500/10'
							)}
						>
							<div className='flex items-center justify-between gap-4'>
								<div className='flex items-center gap-3'>
									<button
										onClick={() => togglePlay(index)}
										className='w-10 h-10 rounded-full bg-rose-500 flex items-center justify-center text-white hover:bg-rose-600 transition'
									>
										{active && isPlaying ? (
											<Pause className='w-5 h-5' />
										) : (
											<Play className='w-5 h-5 ml-0.5' />
										)}
									</button>

									<span className='text-milk-50 text-sm sm:text-base font-medium'>
										{track.title}
									</span>
								</div>

								{active && (
									<span className='text-xs text-lavender-300 tabular-nums'>
										{formatTime(currentTime)} / {formatTime(duration)}
									</span>
								)}
							</div>

							{active && (
								<div
									ref={waveRef}
									className='mt-4 w-full h-[64px] cursor-pointer select-none'
								/>
							)}
						</div>
					)
				})}
			</div>
		</section>
	)
}

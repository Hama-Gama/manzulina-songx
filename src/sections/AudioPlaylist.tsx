import { useEffect, useRef, useState } from 'react'
import WaveSurfer from 'wavesurfer.js'
import { Play, Pause } from 'lucide-react'
import { cn } from '@/lib/utils'

type Track = {
	title: string
	src: string
}

const tracks: Track[] = [
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

// ✅ ЯВНАЯ ТИПИЗАЦИЯ
const formatTime = (time: number): string => {
	const minutes = Math.floor(time / 60)
	const seconds = Math.floor(time % 60)
	return `${minutes}:${seconds.toString().padStart(2, '0')}`
}

export function AudioPlaylist() {
	const waveContainerRef = useRef<HTMLDivElement | null>(null)

	// 🔥 КЛЮЧЕВОЙ МОМЕНТ
	const waveSurferRef = useRef<WaveSurfer | null>(null)

	const [currentIndex, setCurrentIndex] = useState<number | null>(null)
	const [isPlaying, setIsPlaying] = useState<boolean>(false)
	const [currentTime, setCurrentTime] = useState<number>(0)
	const [duration, setDuration] = useState<number>(0)

	// ✅ ИНИЦИАЛИЗАЦИЯ WAVESURFER
	useEffect(() => {
		if (currentIndex === null) return
		if (!waveContainerRef.current) return

		// destroy старого инстанса
		if (waveSurferRef.current) {
			waveSurferRef.current.destroy()
			waveSurferRef.current = null
		}

		const ws = WaveSurfer.create({
			container: waveContainerRef.current,
			waveColor: 'rgba(255,255,255,0.25)',
			progressColor: '#ec4899',
			cursorColor: '#f472b6',
			height: 64,
			barWidth: 2,
			barGap: 2,
			interact: true,
		})

		waveSurferRef.current = ws

		ws.load(tracks[currentIndex].src)

		ws.on('ready', () => {
			setDuration(ws.getDuration())
			ws.play()
			setIsPlaying(true)
		})

		ws.on('audioprocess', () => {
			setCurrentTime(ws.getCurrentTime())
		})

		ws.on('interaction', () => {
			setCurrentTime(ws.getCurrentTime())
		})

		ws.on('finish', () => {
			setIsPlaying(false)
			setCurrentTime(0)
		})

		return () => {
			ws.destroy()
			waveSurferRef.current = null
		}
	}, [currentIndex])

	// ✅ ЯВНАЯ ТИПИЗАЦИЯ index
	const togglePlay = (index: number): void => {
		if (currentIndex === index) {
			if (!waveSurferRef.current) return

			waveSurferRef.current.playPause()
			setIsPlaying(waveSurferRef.current.isPlaying())
		} else {
			setCurrentIndex(index)
			setCurrentTime(0)
		}
	}

	return (
		<section className='w-full max-w-2xl mx-auto'>
			{/* TITLE + DESCRIPTION */}
			<div className='mb-8 text-center'>
				<h2 className='text-2xl sm:text-3xl font-semibold text-milk-50'>
					Примеры песен, которые я исполнила на заказ
				</h2>
				<p className='mt-3 text-lavender-300 text-sm sm:text-base max-w-xl mx-auto'>
					Каждая из этих песен была написана и спета специально для конкретного
					человека. Твоя история может стать следующей.
				</p>
			</div>

			{/* PLAYLIST */}
			<div className='space-y-6'>
				{tracks.map((track, index) => {
					const active = currentIndex === index

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
									ref={waveContainerRef}
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

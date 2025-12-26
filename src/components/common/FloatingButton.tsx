import { cn } from '@/lib/utils'
import { FaWhatsapp } from 'react-icons/fa'

const PHONE = '77073280265'
const PREFILL = encodeURIComponent('Здравствуйте! Хочу заказать песню в SongX.')

export function FloatingButton() {
	return (
		<a
			href={`https://wa.me/${PHONE}?text=${PREFILL}`}
			target='_blank'
			rel='noopener noreferrer'
			aria-label='Написать в WhatsApp'
			className={cn(
				'fixed bottom-4 left-1/2 -translate-x-1/2 z-50',
				'flex items-center justify-center gap-2 rounded-full px-4 py-3',
				'w-[300px]',
				'bg-rose-500 text-milk-50 shadow-soft hover:bg-rose-600 transition-colors'
			)}
		>
			<FaWhatsapp className='h-5 w-5' />
			<span className='font-medium text-sm'>Заказать песню</span>
		</a>
	)
}

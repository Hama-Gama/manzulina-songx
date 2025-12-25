import {
	Accordion,
	AccordionItem,
	AccordionTrigger,
	AccordionContent,
} from '@/components/ui/accordion'

export function FAQ() {
	const items = [
		{
			q: 'Можно ли заказать из другой страны?',
			a: 'Да, мы работаем по всему СНГ.',
		},
		{
			q: 'Это точно уникально?',
			a: 'Да, каждая песня создаётся индивидуально, основываясь на вашей истории и деталях.',
		},
		{
			q: 'Можно ли срочно?',
			a: 'Да, уточните сроки при заказе — у нас есть экспресс услуга.',
		},
		{
			q: 'Как доставляете?',
			a: 'Мы отправляем ссылку/файл онлайн и флешку по России. Есть артикул на Wildberries.',
		},
	]

	return (
		<section id='faq' className='bg-surface-900 px-1 py-8'>
			<div className='mx-auto max-w-4xl'>
				<h2 className='text-3xl font-bold text-milk-50'>FAQ</h2>
				<p className='mt-2 text-lavender-300 text-sm'>
					Часто задаваемые вопросы
				</p>

				<Accordion
					type='single'
					collapsible
					className='mt-6 rounded-lg border border-surface-800 divide-y divide-surface-800'
				>
					{items.map((item, i) => (
						<AccordionItem key={i} value={`item-${i}`} className='px-4'>
							<AccordionTrigger className='text-milk-50 hover:text-rose-300'>
								{item.q}
							</AccordionTrigger>
							<AccordionContent className='text-milk-100 text-base'>
								{item.a}
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</section>
	)
}
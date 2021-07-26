import { default as UICard } from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { PropsWithChildren } from 'react'
import { ICard } from './types'


export const Card = (props: PropsWithChildren<ICard>) => {
	const { children, variant } = props
	return (
		<UICard variant={variant}>
			<CardContent>
				{ children }
			</CardContent>
		</UICard>
	)
}

import { Tooltip, Zoom } from '@material-ui/core'

export const ToolTip = (props: { text: string, children: any, placement?: any }) => {
	return (
		<Tooltip
			title={props.text}
			enterDelay={200}
			leaveDelay={500}
			TransitionComponent={Zoom}
			placement={props.placement || 'top'}
			arrow>
			{props.children}
		</Tooltip>
	)
}

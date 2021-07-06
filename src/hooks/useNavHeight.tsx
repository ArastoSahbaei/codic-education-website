import { useContext, useState, useEffect } from 'react'
import { interpolate } from '../functions/interpolate'
import { ScrollContext } from '../shared/providers/ScrollProvider'
import {
	DESKTOP_NAV_HEIGHT,
	DESKTOP_NAV_HEIGHT_SMALL,
} from '../shared/styles/constants'

export const useNavHeight = () => {
	const { scrollY } = useContext(ScrollContext)
	const [height, setHeight] = useState(DESKTOP_NAV_HEIGHT)

	const animation = interpolate(
		DESKTOP_NAV_HEIGHT_SMALL,
		DESKTOP_NAV_HEIGHT,
		0.01
	).reverse()

	useEffect(() => {
		setHeight(animation[scrollY] % animation.length)
	}, [scrollY, setHeight])

	return { navHeight: height }
}

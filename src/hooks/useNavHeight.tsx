import { useContext, useState, useEffect } from 'react'
import { ScrollContext } from '../shared/providers/ScrollProvider'
import { DESKTOP_NAV_HEIGHT, DESKTOP_NAV_HEIGHT_SMALL } from '../shared/styles/constants'

export const useNavHeight = () => {
	const { scrollY } = useContext(ScrollContext)
	const [height, setHeight] = useState(DESKTOP_NAV_HEIGHT)


	useEffect(() => {
		if (scrollY > 0) {
			setHeight(DESKTOP_NAV_HEIGHT_SMALL)
		} else if (scrollY <= 0) {
			setHeight(DESKTOP_NAV_HEIGHT)
		}
	}, [scrollY, setHeight])

	return { navHeight: height }
}

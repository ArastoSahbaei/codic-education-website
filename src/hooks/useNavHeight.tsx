import { useContext, useMemo } from 'react'
import { ScrollContext } from '../shared/providers/ScrollProvider'
import { DESKTOP_NAV_HEIGHT, DESKTOP_NAV_HEIGHT_SMALL } from '../shared/styles/constants'

export const useNavHeight = () => {
	const { scrollY } = useContext(ScrollContext)
	const height = useMemo(() => scrollY > 0 ? DESKTOP_NAV_HEIGHT_SMALL : DESKTOP_NAV_HEIGHT, [scrollY])


	return { navHeight: height }
}

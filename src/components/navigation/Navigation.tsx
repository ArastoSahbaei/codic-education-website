import { MOBILE_NAV_THRESHOLD } from 'shared/styles/constants'
import { useWindowDimensions } from '../../hooks/useWindowDimensions'
import { DesktopNavigation } from './desktopnavigation/DesktopNavigation'
import { MobileNavigation } from './mobilenavigation/MobileNavigation'

export const Navigation = () => {
	const { width } = useWindowDimensions()

	const determineDimension = () => {
		return width <= MOBILE_NAV_THRESHOLD
			? <MobileNavigation />
			: <DesktopNavigation />
	}

	return determineDimension()
}

import { useState, useEffect } from 'react'

export const mobileDimensionDefinitions = 768

const getWindowDimensions = () => {
	const { innerWidth: width, innerHeight: height } = window
	return { width, height }
}

export const useWindowDimensions = () => {
	const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())
	const handleResize = () => { setWindowDimensions(getWindowDimensions()) }

	useEffect(() => {
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])
	return windowDimensions
}

export const isMobileView = () => {
	const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())
	const handleResize = () => { setWindowDimensions(getWindowDimensions()) }
	
	useEffect(() => {
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])
	
	return windowDimensions.width <= mobileDimensionDefinitions
}

import React, { useState, createContext, useEffect, useCallback } from 'react'
import { useWindowDimensions } from '../../hooks/useWindowDimensions'

export const ScrollContext = createContext<{
  scrollY: number;
  percentage: number;
  fractions: number;
}>({ scrollY: 0, percentage: 0, fractions: 0 })

export const ScrollProvider = (props: { children?: React.ReactChild }) => {
	const { children } = props
	const [scrollY, setScrollY] = useState(0)
	const [percentage, setPercentage] = useState(0)
	const [fractions, setFractions] = useState(0)
	const { height } = useWindowDimensions()

	let throttleTimeout: number | null = null

	const callback = useCallback(() => {
		setScrollY(window.scrollY)
		const fractions = window.scrollY / height
		setFractions(fractions)
		setPercentage(fractions * 100)
	}, [setScrollY, setFractions, setPercentage, window.scrollY])

	useEffect(() => {
		const handleScroll = () => {
			if (throttleTimeout === null) {
				throttleTimeout = setTimeout(() => {
					callback()
				})
			} else {
				clearTimeout(throttleTimeout)
				throttleTimeout = null
				callback()
			}
		}

		window.addEventListener('scroll', handleScroll)

		return () => window.removeEventListener('scroll', handleScroll)
	}, [callback])

	return (
		<ScrollContext.Provider value={{ scrollY, percentage, fractions }}>
			{children}
		</ScrollContext.Provider>
	)
}

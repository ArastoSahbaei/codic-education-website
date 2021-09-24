import { useEffect, useState } from 'react'

export const useOnScreen = (ref: any) => {
	const [isIntersecting, setIntersecting] = useState<boolean>(false)

	const observer = new IntersectionObserver(
		([entry]) => setIntersecting(entry.isIntersecting)
	)

	useEffect(() => {
		observer.observe(ref.current)
		// Remove the observer as soon as the component is unmounted
		return () => { observer.disconnect() }
	}, [])

	return isIntersecting
}
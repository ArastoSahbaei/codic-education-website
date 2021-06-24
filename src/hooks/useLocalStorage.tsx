import { useState, useEffect } from 'react'

const PREFIX = 'APPLICATION-NAME'

export const useLocalStorage = (key: any, initialValue: any) => {
	const preFixedKey = PREFIX + key

	const [value, setValue] = useState(() => {
		const jsonValue = localStorage.getItem(preFixedKey)
		if (jsonValue != null) return JSON.parse(jsonValue)
		if (typeof initialValue === 'function') {
			return initialValue()
		} else {
			return initialValue
		}
	})

	useEffect(() => {
		localStorage.setItem(preFixedKey, JSON.stringify(value))
	}, [preFixedKey, value])

	return [value, setValue]

}


/*
Usage example:
const [id, setId] = useLocalStorage('id')
 */
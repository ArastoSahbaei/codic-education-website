import { useState, useEffect } from 'react'

export const useFetch = (AXIOSAPI: any) => {
	const [data, setData] = useState<any>()
	const [loading, setLoading] = useState<boolean>()
	const [error, setError] = useState<any>()

	const retrieveData = async () => {
		try {
			const { data } = await AXIOSAPI()
			data && setData(data)
			setLoading(false)
		} catch (error) {
			setError(error)
			setLoading(false)
		}
	}

	useEffect(() => {
		setLoading(true)
		retrieveData()
	}, [])

	return { data, loading, error }
}
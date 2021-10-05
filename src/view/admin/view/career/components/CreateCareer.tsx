import React, { useState } from 'react'
import CodicAPIService from 'shared/api/services/CodicAPIService'

export interface createNewCareer {
    title: string
    jobType: string
    location: string
    image: string
}

export const CreateCareer = () => {
	const [career, setCareer] = useState<createNewCareer>({title:'', jobType: '', location: '', image: ''})


	const handleChange = (event: React.ChangeEvent<HTMLInputElement>, target: keyof createNewCareer) => {
		setCareer({...career, [target]: event.target.value })
	}
}


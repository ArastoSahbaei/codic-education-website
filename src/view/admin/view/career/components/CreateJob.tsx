import React, { useState } from 'react'
import CodicAPIService from 'shared/api/services/CodicAPIService'

export interface createNewJob {
    title: string
    description: string
    jobType: string
    location: string
    image: string
    lastDate: Date
}

export const CreateJob = () => {
	const [job, setJob] = useState<createNewJob>({title:'', description: '', jobType: '', location: '', image: '', lastDate: new Date})


	const handleChange = (event: React.ChangeEvent<HTMLInputElement>, target: keyof createNewJob) => {
		setJob({...job, [target]: event.target.value })
	}

	return(
		<div>
			<h1>Create a new job</h1>
            title: <input placeholder='title' onChange={event => handleChange(event, 'title')}/> <br/>
            description: <input placeholder='description' onChange={event => handleChange(event, 'description')}/> <br/>
            jobType: <input placeholder='jobType' onChange={event => handleChange(event, 'jobType')}/> <br/>()
            location: <input placeholder='location' onChange={event => handleChange(event, 'location')}/> <br/>
            lastDate: <input placeholder='lastDate' onChange={event => handleChange(event, 'lastDate')}/> <br/>
            image: <input type='file' placeholder='select image' onChange={event => handleChange(event, 'image')}/> <br/>
			<button onClick={() => CodicAPIService.createJob(job)}>Create Job</button>
		</div>
	)
}


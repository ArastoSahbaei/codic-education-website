import { useState, useContext } from 'react'
//import { useAuthentication } from 'hooks/useAuthentication'
import { UserContext } from 'shared/providers/UserProvider'
import { Button } from 'components/html/Button'
import CodicAPIService from 'shared/api/services/CodicAPIService'

export const UploadAvatar = () => {
	const [selectedFile, setSelectedFile] = useState<File | undefined>()
	const [choice, setChoice] = useState<number>(0)
	const [submitting, setSubmitting] = useState<boolean>(false)
	const [authenticatedUser] = useContext(UserContext)
	//const { updatePersonalInformation } = useAuthentication()

	const handleSubmit = async (event: { preventDefault: () => void }) => {
		event.preventDefault()
		setSubmitting(true)
		const avatar = new FormData()
		const userId = authenticatedUser._id
		const userRole = authenticatedUser.role     // If employee and basic user should upload their image to different locations

		try {
			if (selectedFile !== undefined) {
				// uses 'files' to match server
				avatar.append('files', selectedFile)
				await CodicAPIService.uploadAvatar(userId, avatar)
			}
		}
		catch (error) {
			console.log(error)
		}
		setSubmitting(false)
		setSelectedFile(undefined)
		setChoice(0)
	}

	const showForm = () => {
		return (
			<form onSubmit={handleSubmit}>
				<input
					name='selectedFile'
					type='file'
					accept='image/*'
					onChange={(e) => e.target.files !== null ? setSelectedFile(e.target.files[0]) : setSelectedFile(undefined)}
				/>
				{selectedFile && <div>
					<h4>Förhandsvisning av avatar: </h4>
					<img src={URL.createObjectURL(selectedFile)} height='150px' />
				</div>}
				<Button disabled={submitting} text={submitting ? 'Laddar upp...'
					: selectedFile ? 'Ladda upp avatar' : 'Avbryt'} />
			</form>
		)
	}

	return (
		<>
			{(choice === 0)
				? <Button text={'Ladda upp Avatar/bild'} onClick={() => setChoice(1)} />
				: showForm()}
			<br />
		</>
	)
}


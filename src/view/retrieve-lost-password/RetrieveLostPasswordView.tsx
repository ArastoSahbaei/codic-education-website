import React, { useState, useEffect } from 'react'
import { useAuthentication } from 'hooks/useAuthentication'
import CodicAPIService from 'shared/api/services/CodicAPIService'

export const RetrieveLostPasswordView: React.FC = (): JSX.Element => {
	const [newPassword, setNewPassword] = useState<string>('')
	const [data, setData] = useState<any>({})
	const getTokenFromURL = window.location.href.split('/').reverse()[0]
	const { login } = useAuthentication()


	const requestNewPassword = async () => {
		const newPasswordWithEmailToken = { password: newPassword, resetPasswordToken: getTokenFromURL }
		const response = await CodicAPIService.resetPassword(newPasswordWithEmailToken)
		setData(response)
	}

	const loginUserIfPasswordGotReset = async () => {
		const loginCredentials = { username: data.data?.username, password: newPassword }
		if (data.status == 200) {
			login(loginCredentials)
		}
	}

	const validateToken = () => {
		//TODO: Validate the token from the URL. If it is valid then remain on this view and offer a password change.
		//TODO: If the token is not valid then history.push('this reset link is no bueno')
	}

	useEffect(() => {
		validateToken()
		loginUserIfPasswordGotReset()
	}, [data])

	return (
		<div>
			<h1>This is the resetPasswordView</h1>
			<input placeholder='Your new password' onChange={(event) => setNewPassword(event.target.value)} /> <br />
			<button onClick={() => requestNewPassword()}>reset pw</button>
		</div>
	)
}

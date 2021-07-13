export const validateToken = (tokenExp: number) => {
	const currentTime = Math.floor(Date.now() / 1000)
	const isValidated: boolean = tokenExp > currentTime
	return isValidated
}
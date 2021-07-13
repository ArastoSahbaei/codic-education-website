export const validateToken = (tokenExp: number) => {
	const currentTime = Math.floor(Date.now() / 1000)
	return (tokenExp > currentTime)
}
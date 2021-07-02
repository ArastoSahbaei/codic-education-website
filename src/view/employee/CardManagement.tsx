import { FC } from 'react'
import { ManagementDataProps } from '../../shared/interfaces/EmployeeInterface'
import { Image, Wrapper } from '../../shared/styles/EmployeeStyles'

export const CardManagement: FC<ManagementDataProps> = ({ data }: ManagementDataProps) => {
	return (
		<Wrapper>
			<Image src={data.imageUrl} alt={data.name} />
			<h2>{data.name}</h2>
			<h3>{data.position}</h3>
			<p>{data.introduction}</p>
			<p>{data.email}</p>
			<p>{data.phone}</p>
			<p>{data.linkedIn}</p>
		</Wrapper>
	)
}

import { FC } from 'react'
import { EmployeeDataProps } from '../../shared/interfaces/Employee'
import { Image, Wrapper } from '../../shared/styles/EmployeeStyles'

export const CardEmployee: FC<EmployeeDataProps> = ({ data }: EmployeeDataProps) => {
	return (
		<Wrapper>
			<Image src={data.imageUrl} alt={data.name} />
			<h2>{data.name}</h2>
			<h3>{data.skills.join(', ')}</h3>
			<p>{data.introduction}</p>
			<p>{data.github}</p>
			<p>{data.linkedIn}</p>
		</Wrapper>
	)
}

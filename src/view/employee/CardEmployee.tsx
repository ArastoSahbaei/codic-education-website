import { FC } from 'react'
import { EmployeeData, EmployeeDataProps } from '../../shared/interface/Employee'
import { Wrapper, Image } from '../../shared/styles/EmployeeStyles'

export const CardEmployee: FC<EmployeeDataProps> = (
	{data}: EmployeeDataProps
) => {
	return (
		<Wrapper>
			<Image src={ data.imageUrl } alt={ data.name }/>
			<h2>{ data.name }</h2>
			<h3>{ data.skills.join(', ') }</h3>
			<p>{ data.introduction }</p>
			<p>{ data.github }</p>
			<p>{ data.linkedIn }</p>
		</Wrapper>
	)
}

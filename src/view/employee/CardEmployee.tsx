import { FC } from 'react'
import { EmployeeDataProps } from '../../shared/interfaces/Employee'
import { Image, Wrapper, CenterWrapper } from '../../shared/styles/EmployeeStyles'

export const CardEmployee: FC<EmployeeDataProps> = ({data}: EmployeeDataProps) => {
	return (
		<Wrapper>
			<CenterWrapper>
				<Image src={ data.imageUrl } alt={ data.name }/>
			</CenterWrapper>
			
			<CenterWrapper>
				<h2>{ data.name }</h2>
				<h4>{ data.skills.join(', ') }</h4>
			</CenterWrapper>
			
			<CenterWrapper>
				<p>{ data.introduction }</p>
			</CenterWrapper>
			
			<CenterWrapper>
				<p><a href={ data.github }>GitHub</a></p>
				<p><a href={ data.linkedIn }>LinkedIn</a></p>
			</CenterWrapper>
		</Wrapper>
	)
}

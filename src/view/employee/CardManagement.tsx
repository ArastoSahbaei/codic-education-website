import { FC } from 'react'
import { ManagementDataProps } from '../../shared/interfaces/Employee'
import { Image, CenterWrapper, Wrapper } from '../../shared/styles/EmployeeStyles'

export const CardManagement: FC<ManagementDataProps> = ({data}: ManagementDataProps) => {
	return (
		<Wrapper>
			<CenterWrapper>
				<Image src={ data.imageUrl } alt={ data.name }/>
			</CenterWrapper>
			
			<CenterWrapper>
				<h2>{ data.name }</h2>
				<h3>{ data.position }</h3>
			</CenterWrapper>
			
			<CenterWrapper>
				<p>{ data.introduction }</p>
			</CenterWrapper>
			
			<CenterWrapper>
				<p>{ data.email }</p>
				<p>{ data.phone }</p>
				<p><a href={ data.linkedIn }>LinkedIn</a></p>
			</CenterWrapper>
		</Wrapper>
	)
}

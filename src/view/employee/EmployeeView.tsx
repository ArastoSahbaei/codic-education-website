import styled from 'styled-components'
import { useWindowDimensions } from '../../hooks/useWindowDimensions'
import employeesInfo from '../../shared/data/employees.json'
import { EmployeeData, ManagementData } from '../../shared/interfaces/Employee'
import { CardEmployee } from './CardEmployee'
import { CardManagement } from './CardManagement'

export const EmployeeView = () => {
	const {width} = useWindowDimensions()
	
	const mobileDimensions = () => {
		return width <= 1000
	}
	
	const managers: Array<ManagementData> = employeesInfo.managers
	const employees: Array<EmployeeData> = employeesInfo.employees
	
	const showManagement = () => {
		return (
			<CardGridWrapper isMobileView={ mobileDimensions() }>
				{
					managers.map((manager, i) => {
						return (
							<CardManagement
								key={ i }
								data={ manager }/>
						)
					})
				}
			</CardGridWrapper>
		)
	}
	
	const showEmployees = () => {
		return (
			<CardGridWrapper isMobileView={ mobileDimensions() }>
				{
					employees.map((employee, i) => {
						return (
							<CardEmployee
								key={ i }
								data={ employee }/>
						)
					})
				}
			</CardGridWrapper>
		)
	}
	
	return (
		<Wrapper>
			<ContentWrapper>
				<MainHeader>Team Codic Education</MainHeader>
				<Paragraph>{ employeesInfo.aboutOurTeam }</Paragraph>
				
				<SecondaryHeader>Ledning</SecondaryHeader>
				<Paragraph>{ employeesInfo.aboutManagement }</Paragraph>
				{ showManagement() }
				
				<SecondaryHeader>Lärare</SecondaryHeader>
				<Paragraph>{ employeesInfo.aboutEmployees }</Paragraph>
				{ showEmployees() }
			</ContentWrapper>
		</Wrapper>
	)
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(20, 1fr);
`

const ContentWrapper = styled.div`
  grid-column: 3/19;
  justify-content: space-between
`

interface values {
	isMobileView: boolean
}

const CardGridWrapper = styled.div<values>`
  display: grid;
  grid-template-columns: ${ props => props.isMobileView ? '1fr' : 'repeat(3, 1fr)' };
`

const Paragraph = styled.p`
  width: 100%;
`

const MainHeader = styled.h1`
  width: 100%;
  text-align: center;
`

const SecondaryHeader = styled.h2`
  width: 100%;
  text-align: center;
`

import styled from 'styled-components'
import data from '../../shared/data/employees.json'
import { windowsMaxWidth } from '../../shared/data/WindowsSizes'
import { DimensionsInterface } from '../../shared/interfaces/DimensionsInterface'
import { EmployeeData } from '../../shared/interfaces/EmployeeInterface'
import { EmployeeCard } from './components/EmployeeCard'

export const EmployeeView = () => {
	const managers: Array<EmployeeData> = data.managers
	const employees: Array<EmployeeData> = data.employees

	const showEmployees = (data: Array<EmployeeData>) => {
		return (
			<CardGridWrapper dimensions={windowsMaxWidth}>
				{
					data.map((employee, i) => {
						return (
							<EmployeeCard
								key={i}
								data={employee} />
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
				<Paragraph>{data.aboutOurTeam}</Paragraph>

				<SecondaryHeader>Ledning</SecondaryHeader>
				<Paragraph>{data.aboutManagement}</Paragraph>
				{showEmployees(managers)}

				<SecondaryHeader>Lärare</SecondaryHeader>
				<Paragraph>{data.aboutEmployees}</Paragraph>
				{showEmployees(employees)}
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

const CardGridWrapper = styled.div<DimensionsInterface>`
  display: grid;
  @media (max-width: ${props => props.dimensions.mobile}) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (min-width: ${props => props.dimensions.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${props => props.dimensions.desktop}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: ${props => props.dimensions.ultraWide}) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: ${props => props.dimensions.ultraHd}) {
    grid-template-columns: repeat(5, 1fr);
  }
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


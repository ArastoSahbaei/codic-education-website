import styled from 'styled-components'
import { useWindowDimensions } from '../../hooks/useWindowDimensions'
import { EmployeeData, ManagementData } from '../../shared/interface/Employee'
import { CardEmployee } from './CardEmployee'
import { CardManagement } from './CardManagement'

const introduction = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa illum itaque libero minus voluptatem. Cum cumque, deleniti dicta dolorem facere facilis id illo ipsam modi, mollitia, nulla odit perspiciatis quis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa illum itaque libero minus voluptatem. Cum cumque, deleniti dicta dolorem facere facilis id illo ipsam modi, mollitia, nulla odit perspiciatis quis?'
const linkedIn = 'LinkedIn'

const aboutOurTeam = 'Codic Education har knoppats av från Codic Consulting och besitter samma tekniska kompetens och rekryteringsexpertis som moderbolaget. I förberedande syfte går våra utbildare en intern utbildning om yrkeshögskolans struktur samt vägleds av en forskare inom pedagogik. Därmed ser vi till att undervisningen är relevant för era elever och tar ansvar för utbildningens röda tråd. '

const aboutManagement = 'Våra utbildningsleveranser hanteras av Robin som är ytterst leveransansvarig, har hand om kundrelationer och det löpande säljarbetet, Maria som ansvarar för vår pedagogiska utveckling. Som stöd för denna grupp finns vår VD Henrik som hela tiden arbetar med att bredda och spetsa vår verksamhet.'

const aboutEmployees = 'Vårt lärarteam består av duktiga utvecklare med många års bransch- och utbildningserfarenhet. De arbetar tajt med vår leveransansvarig Robin och vårt pedagogiskt ansvariga Maria. Vill du få deras uppmärksamhet? Ropa att Amazon är bättre än Azure och se vad som händer.'

export const EmployeeView = () => {
	const {width} = useWindowDimensions()
	
	const mobileDimensions = () => {
		return width <= 1000
	}
	
	const employees: Array<EmployeeData> = []
	const managers: Array<ManagementData> = []
	
	for (let i = 0; i < 5; i++) {
		const employee: EmployeeData = {
			imageUrl: `https://robohash.org/${ 'Lärare ' + i }?size=200x200`,
			name: 'Lärare ' + i,
			skills: ['c', 'c++', 'java'],
			introduction: introduction,
			linkedIn: linkedIn,
			github: 'GitHub'
		}
		employees.push(employee)
	}
	
	for (let i = 0; i < 5; i++) {
		const manager: ManagementData = {
			imageUrl: `https://robohash.org/${ 'Ledning ' + i }?size=200x200`,
			name: 'Ledning ' + i,
			position: 'Management ' + i,
			introduction: introduction,
			email: 'email',
			phone: 'phone',
			linkedIn: linkedIn
		}
		managers.push(manager)
	}
	
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
				<Paragraph>{aboutOurTeam}</Paragraph>
				<SecondaryHeader>Ledning</SecondaryHeader>
				<Paragraph>{aboutManagement}</Paragraph>
				{ showManagement() }
				<SecondaryHeader>Lärare</SecondaryHeader>
				<Paragraph>{aboutEmployees}</Paragraph>
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

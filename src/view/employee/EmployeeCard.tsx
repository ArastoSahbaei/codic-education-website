import { FC } from 'react'
import styled from 'styled-components'
import githubIcon from '../../shared/images/icons/github.svg'
import linkedInIcon from '../../shared/images/icons/linkedin.svg'
import { EmployeeDataProps } from '../../shared/interfaces/EmployeeInterface'

export const EmployeeCard: FC<EmployeeDataProps> = ({data}: EmployeeDataProps) => {
	const titleOrArrayOfSkills = () => {
		if (data.titel.length === 1) {
			return (<h3>{ data.titel }</h3>)
		} else {
			return (<h4>{ data.titel.join(', ') }</h4>)
		}
	}
	
	const showGithubIcon = () => {
		if (data.github !== '') {
			return (<Icons src={ githubIcon } alt="GitHub" onClick={ () => window.open(data.github) }/>
			)
		}
	}
	
	const showLinkedInIcon = () => {
		if (data.linkedIn !== '') {
			return (<Icons src={ linkedInIcon } alt="LinkedIn" onClick={ () => window.open(data.linkedIn) }/>)
		}
	}
	
	const showEmail = () => {
		if (data.email !== '') {
			return (<p>{ data.email }</p>)
		}
	}
	
	const showPhone = () => {
		if (data.phone !== '') {
			return (<p>{ data.phone }</p>)
		}
	}
	
	return (
		<Wrapper>
			<CenterWrapper>
				<Image src={ data.imageUrl } alt={ data.name }/>
			</CenterWrapper>
			
			<CenterWrapper>
				<h2>{ data.name }</h2>
				{ titleOrArrayOfSkills() }
			</CenterWrapper>
			
			<CenterWrapper>
				<p>{ data.introduction }</p>
			</CenterWrapper>
			
			<CenterWrapper>
				{ showEmail() }
				{ showPhone() }
				{ showGithubIcon() }
				{ showLinkedInIcon() }
			</CenterWrapper>
		</Wrapper>
	)
}

const Wrapper = styled.div`
  background-color: aliceblue;
  margin: 1em;
  padding: 2em;
  display: grid;
  grid-template-rows: 200px 1fr 1fr 0.5fr;
`

const Image = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 100px;
`

const CenterWrapper = styled.div`
  text-align: center;
`

const Icons = styled.img`
  height: 50px;
  width: 50px;
  margin: 0 10px;
  cursor: pointer;
`

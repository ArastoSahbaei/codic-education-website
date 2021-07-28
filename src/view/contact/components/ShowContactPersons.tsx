import { ProfileCard } from 'components/ProfileCard'
import { contactPersonList } from 'shared/data/contactPersonList'
import { windowsMaxWidth } from 'shared/data/WindowsSizes'
import { DimensionsInterface } from 'shared/interfaces/DimensionsInterface'
import styled from 'styled-components'

interface IcontactPersonList {
	img: string
	name: string
	role: string
	email: string
	tel: string
}

export const ShowContactPersons = () => {

	const displayAllCards = () => {
		return (
			contactPersonList.map((item: IcontactPersonList) =>
				<ProfileCard key={item.name}
					image={item.img}
					name={item.name}
					title={item.role}
					email={item.email}
					number={item.tel} />
			)
		)
	}

	return (
		<GridWrapper dimensions={windowsMaxWidth}>
			{displayAllCards()}
		</GridWrapper>

	)
}

const GridWrapper = styled.div<DimensionsInterface>`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	margin: 0 auto;
	width: 80%;
	grid-gap: 1%;
	@media (max-width: 1450px) {
		grid-template-columns: repeat(3, 1fr);
	}
	@media (max-width: 1050px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media (max-width: 700px) {
		grid-template-columns: repeat(1, 1fr);
	}
`

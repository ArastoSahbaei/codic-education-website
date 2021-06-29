import { EmployeeData, ManagementData } from '../../shared/interface/Employee'
import { CardEmployee } from './CardEmployee'
import { CardManagement } from './CardManagement'

export const EmployeeView = () => {
	const introduction = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa illum itaque libero minus voluptatem. Cum cumque, deleniti dicta dolorem facere facilis id illo ipsam modi, mollitia, nulla odit perspiciatis quis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa illum itaque libero minus voluptatem. Cum cumque, deleniti dicta dolorem facere facilis id illo ipsam modi, mollitia, nulla odit perspiciatis quis?'
	const linkedIn = 'LinkedIn'
	
	const employees = []
	const managers = []
	
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
	
	return (
		<div>
			<h1>This is the employeeView</h1>
			<h2>Ledning</h2>
			{
				managers.map((manager, i) => {
					return (
						<CardManagement
							key={ i }
							data={ manager }/>
					)
				})
			}
			
			<h2>Lärare</h2>
			{
				employees.map((employee, i) => {
					return (
						<CardEmployee
							key={ i }
							data={ employee }/>
					)
				})
			}
		
		</div>
	)
}

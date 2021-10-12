import { useState, useEffect } from 'react'
import styled from 'styled-components'
import CodicAPIService from 'shared/api/services/CodicAPIService'

export const ListAllEmployeesForAdmin = (props: { toEdit?: boolean, toDelete?: boolean, setChoice: (value: number) => void }) => {
	const [employees, setEmployes] = useState([])
	const [isLoaded, setIsLoaded] = useState<boolean>(false)

	const listItems = employees.length > 0
		? employees.map((employee) => {
			const { _id, firstName, lastName, dateOfBirth, email, mobile, employeeInformation } = employee
			const { startEmployeeDate, lastEmployeeDate, isEmploymentActive } = employeeInformation
			return (
				<tr key={_id}>
					<td>{firstName}</td>
					<td>{lastName}</td>
					<td>{dateOfBirth}</td>
					<td>{email}</td>
					<td>{mobile}</td>
					<td>{startEmployeeDate}</td>
					<td>{lastEmployeeDate}</td>
					<td>{isEmploymentActive === true ? 'Ja' : 'Nej'}</td>
					{props.toEdit &&<td><button onClick={() => props.setChoice(5)}>Redigera</button></td>}
					{props.toDelete && <td><button>Radera användare</button></td>}
				</tr>

			)
		})
		: <tr> Det finns inga anställda i databasen</tr>

	const fetchingAllEmployees = async () => {
		const { data } = await CodicAPIService.getAllEmployees()
		data.map((item: { dateOfBirth: string | undefined; employeeInformation: { startEmployeeDate: string | undefined; lastEmployeeDate: string | undefined } }) => {
			item.dateOfBirth != undefined ? item.dateOfBirth = item.dateOfBirth.substring(0, 10) : item.dateOfBirth
			item.employeeInformation.startEmployeeDate != undefined ? item.employeeInformation.startEmployeeDate = item.employeeInformation.startEmployeeDate.substring(0, 10) : item.employeeInformation.startEmployeeDate
			item.employeeInformation.lastEmployeeDate != undefined ? item.employeeInformation.lastEmployeeDate = item.employeeInformation.lastEmployeeDate.substring(0, 10) : item.employeeInformation.lastEmployeeDate
		})
		setEmployes(data)
		setIsLoaded(true)
	}

	useEffect(() => {
		fetchingAllEmployees()
	}, [])

	return (
		<Wrapper>
			<h1> Lista över alla anställda </h1>
			{isLoaded && <table>
				<thead>
					<tr>
						<th>Förnamn</th>
						<th>Efternamn</th>
						<th>Födelsedatum</th>
						<th>E-post</th>
						<th>Mobil</th>
						<th>Startdatum för anställning</th>
						<th>Slutdatum för anställning</th>
						<th>Pågående anställning</th>
					</tr>
				</thead>
				<tbody>
					{listItems}
				</tbody>
			</table>}
			{!isLoaded && <div> Nerladdning pågår ...</div>}
		</Wrapper>
	)
}

const Wrapper = styled.div`
    text-align: center;

    table {
        width: 100%;
        tr td button {
            width: 150px;
            height: 25px;
            margin-right: 15px;
            margin-bottom: 5px;
        }
    }

`

/* eslint-disable react/display-name */
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import CodicAPIService from 'shared/api/services/CodicAPIService'

import MaterialTable from 'material-table'
import { swedishLocalization } from './help_materialTable/MaterialTableConst'
import { PatchedPagination } from './help_materialTable/PatchedPagination'
import { forwardRef } from 'react'

import AddBox from '@material-ui/icons/AddBox'
import ArrowDownward from '@material-ui/icons/ArrowDownward'
import Check from '@material-ui/icons/Check'
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import ChevronRight from '@material-ui/icons/ChevronRight'
import Clear from '@material-ui/icons/Clear'
import DeleteOutline from '@material-ui/icons/DeleteOutline'
import Edit from '@material-ui/icons/Edit'
import FilterList from '@material-ui/icons/FilterList'
import FirstPage from '@material-ui/icons/FirstPage'
import LastPage from '@material-ui/icons/LastPage'
import Remove from '@material-ui/icons/Remove'
import SaveAlt from '@material-ui/icons/SaveAlt'
import Search from '@material-ui/icons/Search'
import ViewColumn from '@material-ui/icons/ViewColumn'

export const ListAllEmployees = (props: { setChosenRowData: (arg0: any) => void; setChoice: (arg0: number) => void }) => {
	const [employees, setEmployees] = useState([])
	const [isLoaded, setIsLoaded] = useState<boolean>(false)
	
	const fetchingAllEmployees = async () => {
		const { data } = await CodicAPIService.getAllEmployees()
		data.map((item: { employeeInformation: { startEmployeeDate: string | undefined; lastEmployeeDate: string | undefined } }) => {
			if (item.employeeInformation) {
				item.employeeInformation.startEmployeeDate != undefined ? item.employeeInformation.startEmployeeDate = item.employeeInformation.startEmployeeDate.substring(0, 10) : item.employeeInformation.startEmployeeDate
				item.employeeInformation.lastEmployeeDate != undefined ? item.employeeInformation.lastEmployeeDate = item.employeeInformation.lastEmployeeDate.substring(0, 10) : item.employeeInformation.lastEmployeeDate
			}
		})
		setEmployees(data)
		setIsLoaded(true)
	}

	useEffect(() => {
		fetchingAllEmployees()

	}, [])

	const goToForm = (rowData: any) => {
		console.log('Du vill komma till formulär med följande data', rowData)
		props.setChosenRowData(rowData)
		props.setChoice(1)
	}

	return (
		<Wrapper>
			{isLoaded && <MaterialTable
				title='Lista över alla anställda'
				components={{
					Pagination: PatchedPagination,
				}}
				columns={[
					{ title: 'Username', field: 'username' },
					{ title: 'Förnamn', field: 'personalDetails.firstName' },
					{ title: 'Efternamn', field: 'personalDetails.lastName' },
					{ title: 'E-post', field: 'email' },
					{ title: 'Mobil', field: 'personalDetails.phone' },
					{ title: 'Roll', field: 'role' },
					{ title: 'Startdatum för anställning', field: 'employeeInformation.startEmployeeDate', },
					{ title: 'Slutdatum för anställning', field: 'employeeInformation.lastEmployeeDate' },
					{ title: 'Pågående anställning', field: 'employeeInformation.isEmploymentActive', type: 'boolean' },
				]}
				data={employees}
				onRowClick={(event, rowData) => {
					goToForm(rowData)
				}}
				icons={{
					Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
					Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
					Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
					Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
					DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
					Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
					Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
					Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
					FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
					LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
					NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
					PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
					ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
					Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
					SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
					ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
					ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
				}}

				options={{
					columnsButton: true,
					//exportButton:true,
					//exportAllData:true,
					actionsColumnIndex: -1,
					pageSizeOptions: [5, 10, 25, 50, 100],
					rowStyle: (data, index) => index % 2 == 0 ? { background: '#fdf0db' } : { background: '#fff' }
				}}
				localization={swedishLocalization}
			/>}
			{!isLoaded && <div> Nerladdning pågår ...</div>}
		</Wrapper>
	)
}

const Wrapper = styled.div`
    text-align: center;
`
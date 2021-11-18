/* eslint-disable react/display-name */
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import CodicAPIService from 'shared/api/services/CodicAPIService'

import MaterialTable from 'material-table'
import { swedishLocalization} from './MaterialTableConst'
import { PatchedPagination } from './PatchedPagination'
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

export const ListAllEmployeesForAdminMaterialTable = () => {
	const [employees, setEmployes] = useState([])
	const [isLoaded, setIsLoaded] = useState<boolean>(false)


	//(props: { toEdit?: boolean, toDelete?: boolean, setChoice: (value: number) => void, setChosenEmployee: (arg0: any) => void }) => {


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

	/*const swedishLocalization={
		body: {
			emptyDataSourceMessage: 'Det finns inga poster att visa',
			addTooltip: 'Lägg till',
			deleteTooltip: 'Radera',
			editTooltip: 'Redigera',
			filterRow: {
				filterTooltip: 'Filtrera'
			},
			editRow: {
				deleteText: 'Vill du verkligen radera denna rad?',
				cancelTooltip: 'Avbryta',
				saveTooltip: 'Spara'
			}
		},
		grouping: {
			placeholder: 'För att Gruppera: Dra hit önskad kolumn(er) ...',
			groupedBy: 'Grupperat efter:'
		},
		header: {
			actions: 'Aktioner'
		},
		pagination: {
			labelDisplayedRows: '{from}-{to} av {count}',
			labelRowsSelect: 'rader',
			labelRowsPerPage: 'Rader per sida:',
			firstAriaLabel: 'Första sida',
			firstTooltip: 'Första sida',
			previousAriaLabel: 'Föregående sida',
			previousTooltip: 'Föregående sida',
			nextAriaLabel: 'Nästa sida',
			nextTooltip: 'Nästa sida',
			lastAriaLabel: 'Sista sida',
			lastTooltip: 'Sista sida'
		},
		toolbar: {
			addRemoveColumns: 'Lägg till eller ta bort kolumner',
			nRowsSelected: '{0} Rad(er) valda',
			showColumnsTitle: 'Visa kolumner',
			showColumnsAriaLabel: 'Visa kolumner',
			exportTitle: 'Exportera',
			exportAriaLabel: 'Exportera',
			exportCSVName: 'Exportera som CSV',
			exportPDFName: 'Exportera som PDF',
			searchTooltip: 'Sök',
			searchPlaceholder: 'Sök',
			searchAriaLabel: 'Sök',
			clearSearchAriaLabel: 'Rensa'
		}
	}*/


	const test = (choice: number) =>{
		
		const editableAdd ={
			onRowAdd: (newRow: any) => new Promise((resolve,reject) => {
				console.log(newRow)
				setTimeout(() => resolve('test'), 500)
			}),
		}

		const editableUpdate ={
			onRowUpdate: (newRow:any, oldRow:any) => new Promise((resolve,reject) => {
				console.log(newRow, oldRow)
				setTimeout(() => resolve('test'), 500)
				
			}),
		}

		const editableDelete ={
			onRowDelete: (selectedRow:any) => new Promise((resolve,reject) => {
				console.log(selectedRow)
				setTimeout(() => resolve('test'), 500)
			}),
		}
		
		switch (choice){
		case 1:
			return editableUpdate
		case 2:
			return editableDelete
		default:
			return editableAdd
		}
		
	}
 
	const choice = 0
	return (
		<Wrapper>
			{isLoaded && <MaterialTable
				title='Lista över alla anställda'
				components={{
					Pagination: PatchedPagination,
				}}
				columns={[
					{ title: 'Förnamn', field: 'firstName' },
					{ title: 'Efternamn', field: 'lastName' },
					{ title: 'Födelsedatum', field: 'dateOfBirth', type: 'numeric'  },
					{ title: 'E-post', field: 'email' },
					{ title: 'Mobil', field: 'mobile' },
					{ title: 'Startdatum för anställning', field: 'employeeInformation.startEmployeeDate', type: 'numeric'  },
					{ title: 'Slutdatum för anställning', field: 'employeeInformation.lastEmployeeDate', type: 'numeric'  },
					{ title: 'Pågående anställning', field: 'employeeInformation.isEmploymentActive', type: 'boolean' },
				]}
				data={employees}
				editable={test(choice)}
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
					exportButton:true,
					exportAllData:true,
					actionsColumnIndex:-1,
					addRowPosition:'first',
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
/* eslint-disable react/display-name */
import { useEffect, useState } from 'react'
import { CareerInterface } from 'shared/interfaces/CareerInterface'
import styled from 'styled-components'
import CodicAPIService from 'shared/api/services/CodicAPIService'

import { forwardRef } from 'react'
import { PatchedPagination } from '../../employee/components/help_materialTable/PatchedPagination'
import { swedishLocalization } from '../../employee/components/help_materialTable/MaterialTableConst'
import MaterialTable from 'material-table'

import AddIcon from '@material-ui/icons/Add'
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


export const ListAllCareers = (props: { setChoice: (arg0: number) => void; setChosenRowData: (arg0: any) => void }) => {
	const [careers, setCareers] = useState<CareerInterface[]>([])
	const [isLoaded, setIsLoaded] = useState<boolean>(false)

	const fetchAllCareers = async () => {
		const { data } = await CodicAPIService.getAllJobs()
		setCareers(data)
		setIsLoaded(true)
	}

	useEffect(() => {
		fetchAllCareers()
	}, [])

	const goToNewForm = () => {
		const emptyRowData = {
			_id: '',
			title: '',
			jobType: '',
			location: '',
			description: '',
			lastDate: '',
		}
		props.setChosenRowData(emptyRowData)
		props.setChoice(1)
	}

	const goToUpdateForm = (rowData: any) => {
		props.setChosenRowData(rowData)
		props.setChoice(2)
	}

	return (
		<Wrapper>
			{isLoaded && <MaterialTable
				title='Lista över alla jobbannonser'
				components={{
					Pagination: PatchedPagination,
				}}
				columns={[
					{ title: 'Rubrik', field: 'title', grouping: false },
					{ title: 'Tjänst', field: 'jobType' },
					{ title: 'Plats', field: 'location' },
					{ title: 'Beskrivning', field: 'description', grouping: false },
					{ title: 'Sista ansökningsdatum', field: 'lastDate', type: 'date' },
				]}
				data={careers}
				onRowClick={(event, rowData) => {
					goToUpdateForm(rowData)
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
				actions={[
					{
						icon: AddIcon,
						tooltip: 'Lägg till ny tjänst',
						isFreeAction: true,
						onClick: () => goToNewForm()
					}
				]}
				options={{
					grouping: true,
					columnsButton: true,
					//Remove comment for the lines below if you want to be able to export list as .csv or .pdf
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
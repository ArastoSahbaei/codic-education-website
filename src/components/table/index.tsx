import { FC } from 'react'
import styled from 'styled-components'
import { ITable, ITableColumn, ITableRow } from './types'

const getKeys = (table: ITable) =>
	table.rows && table.rows.length
		? table.rows[0].columns.map((row) => row.name)
		: []

const keysToColumns = (keys: string[]): ITableColumn[] =>
	keys.map((key) => ({ name: key, value: key }))

export const TableColumn: FC<ITableColumn> = (props: ITableColumn) => {
	const { value, onClick, th } = props

	const ColumnComponent = th ? ColumnHeadWrapper : ColumnWrapper
	return (
		<ColumnComponent>
			<ColumnInner onClick={onClick}>{value}</ColumnInner>
		</ColumnComponent>
	)
}

export const TableRow: FC<ITableRow> = (props: ITableRow) => {
	const { columns, th } = props

	return (
		<RowWrapper>
			{columns.map((col, i) => (
				<TableColumn th={th} key={i} {...col} />
			))}
		</RowWrapper>
	)
}

export const Table: FC<ITable> = (props: ITable) => {
	const { rows, lastColumn } = props
	const keys = keysToColumns(getKeys(props))

	if (lastColumn) {
		rows.forEach((row) => (row.columns[row.columns.length - 1] = lastColumn))
	}
	return (
		<TableWrapper>
			{keys && (
				<thead>
					<TableRow th columns={keys} />
				</thead>
			)}
			<tbody>
				{rows.map((row, i) => (
					<TableRow key={i} {...row} />
				))}
			</tbody>
		</TableWrapper>
	)
}

const TableWrapper = styled.table`
    text-align: left;
    width: 100%;
    border-collapse: collapse;
`

const ColumnWrapper = styled.td`
    padding: 1rem;
    color: #f59300;
`

const ColumnHeadWrapper = styled.th`
    padding: 1rem;
`

const ColumnInner = styled.span`
    font-weight: 200;
`

const RowWrapper = styled.tr`
    border-bottom-style: solid;
    border-bottom-width: 2px;
    border-bottom-color: #263746;
`

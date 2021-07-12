import { translate } from 'functions/translate'
import { FC, useMemo } from 'react'
import styled from 'styled-components'
import { ITable, ITableColumn, ITableRow } from './types'

const getKeys = (rows: ITableRow[]) =>
	rows && rows.length
		? rows[0].columns.filter((col) => !col.hidden).map((col) => col.name)
		: []

const keysToColumns = (keys: string[]): ITableColumn[] =>
	keys.map((key) => ({ name: key, value: key }))

export const TableColumn: FC<ITableColumn> = (props: ITableColumn) => {
	const { value, onClick, th, hidden } = props

	const ColumnComponent = th ? ColumnHeadWrapper : ColumnWrapper

	const renderedValue = useMemo(() => (th ? translate(value) : value), [th])
	return hidden ? (
		<></>
	) : (
		<ColumnComponent>
			<ColumnInner onClick={onClick && props.row && (() => onClick(props.row))}>
				{renderedValue}
			</ColumnInner>
		</ColumnComponent>
	)
}

export const TableRow: FC<ITableRow> = (props: ITableRow) => {
	const { columns, th } = props

	const columnsWithRef = columns.map((col) =>
		Object.assign(col, { row: props })
	)

	return (
		<RowWrapper>
			{columnsWithRef.map((col, i) => (
				<TableColumn th={th} key={i} {...col} />
			))}
		</RowWrapper>
	)
}

export const Table: FC<ITable> = (props: ITable) => {
	const { rows, lastColumn, filter } = props

	const filteredRows: ITableRow[] = filter
		? rows.map((row) =>
			Object.assign(row, {
				columns: row.columns.map((col: ITableColumn) =>
					!filter(col) ? Object.assign(col, { hidden: true }) : col
				),
			})
		)
		: rows

	const keys = keysToColumns(getKeys(filteredRows))

	if (lastColumn) {
		filteredRows.forEach(
			(row) => (row.columns[row.columns.length - 1] = lastColumn)
		)
	}
	return (
		<TableWrapper>
			{keys && (
				<thead>
					<TableRow th columns={keys} />
				</thead>
			)}
			<tbody>
				{filteredRows.map((row, i) => (
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

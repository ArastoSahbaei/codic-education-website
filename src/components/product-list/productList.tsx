import { FC, useMemo } from 'react'
import { ITableColumn, ITableRow } from 'components/table/types'
import { IProductList } from './types'
import { Table } from 'components/table'
import { Button } from 'components/html/Button'
import {
	getValueFromTableRow,
	objectToTableRow,
} from 'components/table/functions'


const HIDDEN_KEYS = ['_id', '__v', 'updatedAt', 'createdAt', 'productCategoryName', 'productBrandName']
const filter = (column: ITableColumn) => !HIDDEN_KEYS.includes(column.name)

export const ProductList: FC<IProductList> = (props: IProductList) => {
	const { products, onRemove } = props

	const lastColumn: ITableColumn | undefined = useMemo(() => onRemove ? ({
		name: '',
		value: <Button text={'Remove'} />,
		onClick: (row: ITableRow) => onRemove(getValueFromTableRow(row, '_id')),
	}) : undefined, [onRemove])

	const rows: ITableRow[] = products.map(objectToTableRow)
	return <Table rows={rows} lastColumn={lastColumn} filter={filter} />
}

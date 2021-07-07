import { FC, MouseEvent, useCallback } from 'react'
import { objectToTableRow } from '../../../functions/objectToTableData'
import { Table } from '../../table'
import { ITableColumn, ITableRow } from '../../table/types'
import { IProductList } from './types'
import { Button } from '../../button'

export const ProductList: FC<IProductList> = (props: IProductList) => {
	const { products } = props

	const onButtonClick = useCallback(
		() => console.log('Todo: Remove item from cart'),
		[]
	)
	const lastColumn: ITableColumn = {
		name: '',
		value: <Button text={'Remove'} />,
		onClick: onButtonClick,
	}

	const rows: ITableRow[] = products.map(objectToTableRow)
	return <Table rows={rows} lastColumn={lastColumn} />
}

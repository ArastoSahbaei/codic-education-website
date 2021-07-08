import { ITableRow } from './types'

export const objectToTableRow = (obj: { [key: string]: any }): ITableRow => ({
	columns: Object.keys(obj).map((key) => ({
		name: key,
		value: obj[key],
	})),
})


export const getValueFromTableRow = (row: ITableRow, name: string) => row.columns.find(col => col.name === name)?.value

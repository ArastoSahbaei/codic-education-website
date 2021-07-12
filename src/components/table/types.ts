export type TColumnFilter = (column: ITableColumn) => boolean

export interface ITableColumn {
    name: string
    value: any
    onClick?: (data: any) => void
    th?: boolean
    row?: ITableRow
    hidden?: boolean
}

export interface ITableRow {
    columns: ITableColumn[]
    th?: boolean
}

export interface ITable {
    rows: ITableRow[]
    lastColumn?: ITableColumn;
    filter?: TColumnFilter
}

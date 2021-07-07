import { ITableRow } from '../components/table/types'
import { translate } from './translate'

export const objectToTableRow = (obj: {[key: string]: any }): ITableRow => ({ columns: Object.keys(obj).filter(key => !key.startsWith('_')).map(key => ({ name: translate(key), value: obj[key] })) })

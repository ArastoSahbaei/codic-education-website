import translations from '../shared/data/translations.json'

const translationsObj = Object(translations)

export const translate = (text?: string) => text && text in translationsObj ? translationsObj[text] : text

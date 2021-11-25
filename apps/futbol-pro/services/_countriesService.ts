import { _get } from './_http'
export const _countriesService = async () => {
    return await _get('/countries')
}
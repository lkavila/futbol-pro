import { _get } from './_http'
export const _teamsService = async (country: string) => {
    return await _get(`/teams?country=${country}`)
}
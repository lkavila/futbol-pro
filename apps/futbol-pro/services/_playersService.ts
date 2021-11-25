import { _get } from './_http'
export const _teamsService = async (team: string) => {
    return await _get(`/squads?team=${team}`)
}
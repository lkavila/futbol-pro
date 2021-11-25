import { _get } from './_http'
export const _playersService = async (team: string) => {
    return await _get(`/players/squads?team=${team}`)
}
import { _get } from './_http'
export const _venueService = async (venue: string) => {
  return await _get(`/venues?id=${venue}`)
}

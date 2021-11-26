import { Venue } from "@futbol-pro/types";
import { useEffect, useState } from "react"
import { _venueService } from '../services/_venueService'

export const useVenue = () => {
  const [venue, setVenue] = useState<Venue>();
  const [venueId, setVenueId] = useState('')
  useEffect(() => {
    if (venueId !== '')
      _venueService(venueId)
        .then((data) => data.json())
        .then(data => { setVenue(data.response[0]); console.log(data.response) })
  }, [venueId]);

  return [venue, setVenueId];
}

export default useVenue;

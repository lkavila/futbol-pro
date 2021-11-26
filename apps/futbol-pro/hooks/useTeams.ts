import { Teams } from "@futbol-pro/types";
import { useEffect, useState } from "react"
import { _teamsService } from '../services/_teamsService'

export const useTeams = () => {
  const [teams, setTeams] = useState<Array<Teams>>([]);
  const [country, setContry] = useState('')
  useEffect(() => {
    if (country !== '')
      _teamsService(country)
        .then((data) => data.json())
        .then(data => { setTeams(data.response); console.log(data.response) })
  }, [country]);

  return [teams, setContry];
}

export default useTeams;

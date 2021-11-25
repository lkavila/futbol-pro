import { useEffect, useState } from "react"
import { _teamsService } from '../services/_teamsService'

export const useTeams = () => {
    const [teams, setTeams] = useState([]);
    const [country, setContry] = useState('')
    useEffect(() => {
        if (country !== '')
            _teamsService(country)
                .then((data) => data.json())
                .then(data => { setTeams(data.response)})
    }, [country]);

    return [teams, setContry];
}

export default useTeams;

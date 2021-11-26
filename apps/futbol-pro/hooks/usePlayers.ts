import { Player, Team } from "@futbol-pro/types";
import { useEffect, useState } from "react"
import { _playersService } from '../services/_playersService'

export const usePlayers = () => {
  const [players, setPlayers] = useState<Array<Player>>([]);
  const [teamId, setTeamId] = useState('')
  const [team, setTeam] = useState<Team>()
  useEffect(() => {
    if (teamId !== undefined && teamId !== '')
      _playersService(teamId)
        .then((data) => data.json())
        .then(data => { setPlayers(data.response[0].players); setTeam(data.response[0].team) })
  }, [teamId]);

  return [players, team, setTeamId];
}

export default usePlayers;

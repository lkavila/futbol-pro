import { useEffect } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components';
import useVenue from '../../../hooks/useVenue';
import usePlayers from '../../../hooks/usePlayers';
import { StadiumCard, PlayerCard, Ui} from '@futbol-pro/ui'

const StyledPlayers = styled.div`
  justify-content: space-around;
  row-gap: 30px;
  display: grid;
  grid-template-columns: auto auto auto;
`;

const CardContainer = styled.div`
  width: 180px;
  margin: 10px;
`;

export function Players() {
  const router = useRouter()
  const { id, venueId } = router.query
  const [venue, setVenueId] = useVenue()
  const [players, team, setTeamId] = usePlayers()
  useEffect(() => {
    setTeamId(id)
  })
  useEffect(() => {
    setVenueId(venueId)
  })

  return (
    <div className="players-page">


      {
        venue && <StadiumCard {...venue} />
      }
      <Ui playerName={`Players of ${team?.name}:`} playerAge={players?.length} />
      <StyledPlayers>

        {
          players && players.length > 0 && players instanceof Array
            ?
            players.map((player) =>
              <CardContainer key={player.id}>
                <PlayerCard {...player} />
              </CardContainer>
            )
            :
            <p>no data</p>
        }
      </StyledPlayers>

    </div>
  );
}

export default Players;

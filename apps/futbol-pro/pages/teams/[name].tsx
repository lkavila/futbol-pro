import { useEffect } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components';
import useTeams from '../../hooks/useTeams';
import { TeamCard, Ui } from '@futbol-pro/ui'

const StyledPage = styled.div`
  .page {
  }
`;
const StyledCountries = styled.div`
  justify-content: space-around;
  row-gap: 30px;
  display: grid;
  grid-template-columns: auto auto auto auto;
`;

const CardContainer = styled.div`
  width: 180px;
  margin: 10px;
`;
export function Teams() {
  const router = useRouter()
  const { name } = router.query
  const [teams, setContry] = useTeams()


  useEffect(() => {
    setContry(name)
  })

  return (
    <>

      <Ui playerName="List of Teams" playerAge={teams?.length} />
      <StyledCountries>
        {
          teams && teams.length > 0 && teams instanceof Array
            ?
            teams.map((teams) =>
              <CardContainer key={teams.team.id}>
                <TeamCard {...teams} />
              </CardContainer>
            )
            :
            <p>no data</p>
        }
      </StyledCountries>
    </>
  );
}

export default Teams;

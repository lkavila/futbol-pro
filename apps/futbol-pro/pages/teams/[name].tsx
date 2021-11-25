import Link from 'next/Link';
import Image from 'next/dist/client/image';
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components';
import useTeams from '../../hooks/useTeams';

const StyledPage = styled.div`
  .page {
  }
`;

export function Teams() {
    const router = useRouter()
    const { name } = router.query
    const [teams, setContry] = useTeams()

    useEffect(() => {
        setContry(name)
    })

    return (
        <StyledPage>
            <h1>Teams</h1>
            {
                teams && teams.length > 0
                    ?
                    teams.map(({ team }) =>
                        <>
                            <Link href="/players/[id]" as={`/players/${team.id}`}>
                                <li key={team.id}>
                                    <span>
                                        {team.flag !== null &&
                                            <Image
                                                alt={'Bandera de ' + team.name}
                                                width={100}
                                                height={100}
                                                loader={() => team.logo}
                                                src={team.logo}
                                            />
                                        }
                                    </span>
                                    <span>
                                        {team.name}
                                    </span>
                                </li>
                            </Link>
                        </>
                    )
                    :
                    <p>no data</p>
            }
        </StyledPage>
    );
}

export default Teams;

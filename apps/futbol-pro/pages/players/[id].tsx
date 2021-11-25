import Link from 'next/Link';
import Image from 'next/dist/client/image';
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components';
import usePlayers from '../../hooks/usePlayers';

const StyledPage = styled.div`
  .page {
  }
`;

export function Players() {
    const router = useRouter()
    const { id } = router.query
    const [players, team, setTeamId] = usePlayers()

    useEffect(() => {
        setTeamId(id)
    })

    return (
        <StyledPage>
            <h1>Players of {team?.name}</h1>
            {
                players && players.length > 0
                    ?
                    players.map(({ name, photo, id }) =>
                        <>
                            
                                <li key={id}>
                                    <span>
                                        {photo !== null &&
                                            <Image
                                                alt={'photo player' + name}
                                                width={100}
                                                height={100}
                                                loader={() => photo}
                                                src={photo}
                                            />
                                        }
                                    </span>
                                    <span>
                                        {name}
                                    </span>
                                </li>
                        </>
                    )
                    :
                    <p>no data</p>
            }
        </StyledPage>
    );
}

export default Players;
import { Teams } from '@futbol-pro/types';
import Image from 'next/image'
import Link from 'next/Link';
import { ABox, WrapperHover, ImgContainerGeneral, InnerSkew, TextContainerGeneral, TextContainer } from './CardStyles';

export function TeamCard(props: Teams) {
  const { name, id, logo } = props.team
  const { id: venueId } = props.venue
  return (
    <Link href="/players/[id]/[venue]" as={`/players/${id}/${venueId}`}>

      <WrapperHover>
        <ABox>
          <ImgContainerGeneral>

            <InnerSkew>
              {logo &&
                <Image
                  alt={'Bandera de ' + name}
                  width={100}
                  height={100}
                  loader={() => logo}
                  src={logo}
                />
              }
            </InnerSkew>

          </ImgContainerGeneral>
          <TextContainerGeneral>
            <TextContainer>{name}</TextContainer>
          </TextContainerGeneral>
        </ABox>

      </WrapperHover>
    </Link>

  )
}

export default TeamCard

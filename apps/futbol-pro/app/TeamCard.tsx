/* eslint-disable @next/next/no-img-element */
import { Teams } from '@futbol-pro/types';
import Link from 'next/Link';
import { ABox, WrapperHover, ImgContainerGeneral, InnerSkew, TextContainerGeneral, TextContainer } from '@futbol-pro/ui';

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
                <img
                  alt={'Bandera de ' + name}
                  width={100}
                  height={100}
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

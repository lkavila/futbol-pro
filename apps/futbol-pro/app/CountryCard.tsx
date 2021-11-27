/* eslint-disable @next/next/no-img-element */
import { Country } from '@futbol-pro/types';
import Link from 'next/Link';
import { ABox, WrapperHover, ImgContainerGeneral, InnerSkew, TextContainerGeneral, TextContainer } from '@futbol-pro/ui';

export function CountryCard(props: Country) {
  const { name, code, flag } = props
  return (
    <Link key={code} href="/teams/[name]" as={`/teams/${name}`}>
      <WrapperHover>
        <ABox>
          <ImgContainerGeneral>

            <InnerSkew>
              {flag !== null &&
                <img
                src={flag}
                alt="Bandera"
                width="120"
                height="120"
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

export default CountryCard

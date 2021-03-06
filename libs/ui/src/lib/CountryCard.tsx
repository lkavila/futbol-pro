import { Country } from '@futbol-pro/types';
import Image from 'next/image'
import Link from 'next/link';
import { ABox, WrapperHover, ImgContainerGeneral, InnerSkew, TextContainerGeneral, TextContainer } from './CardStyles';

export function CountryCard(props: Country) {
  const { name, code, flag } = props
  return (
    <div id='CountryCard'>
      <Link key={code} href="/teams/[name]" as={`/teams/${name}`}>
        <WrapperHover>
          <ABox>
            <ImgContainerGeneral>

              <InnerSkew>
                {flag !== null &&
                  <Image
                    alt={'Bandera de ' + name}
                    width={120}
                    height={120}
                    loader={() => flag}
                    src={flag}
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
    </div>
  )
}

export default CountryCard

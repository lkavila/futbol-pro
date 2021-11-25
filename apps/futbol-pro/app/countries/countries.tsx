import Image from 'next/image'
import Link from 'next/Link';
import styled from 'styled-components';
import { IndexProps } from '@futbol-pro/types';

const StyledCountries = styled.div`
  color: blue;
`;

export function Countries(props: IndexProps) {
  const { countries } = props
  return (
    <StyledCountries>
      <h1>Countries</h1>
      {
        countries && countries.length > 0
          ?
          countries.map(({ code, name, flag }) =>
            <>
              <li key={code}>
                <span>
                  {flag !== null &&
                    <Image
                      alt={'Bandera de ' + name}
                      width={100}
                      height={100}
                      loader={() => flag}
                      src={flag}
                    />
                  }
                </span>
                <span>
                  {code} - {name}
                </span>
              </li>
            </>
          )
          :
          <p>no data</p>
      }
    </StyledCountries>
  );
}

export default Countries;

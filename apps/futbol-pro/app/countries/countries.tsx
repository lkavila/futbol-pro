import { CountryCard } from '@futbol-pro/ui'
import styled from 'styled-components';
import { IndexProps } from '@futbol-pro/types';

const StyledCountries = styled.div`
  justify-content: space-around;
  row-gap: 30px;
  display: grid;
  grid-template-columns: auto auto auto auto;
`;

const CardContainer = styled.div`
  width: 200px;
  margin: 20px;
`;


export function Countries(props: IndexProps) {
  const { countries } = props
  return (
    <StyledCountries>
      {
        countries && countries.length > 0
          ?
          countries.map(({ code, name, flag }) =>
            <CardContainer key={name + code}>
              <CountryCard name={name} code={code} flag={flag} />
            </CardContainer>
          )
          :
          <p>no data</p>
      }
    </StyledCountries>
  );
}

export default Countries;

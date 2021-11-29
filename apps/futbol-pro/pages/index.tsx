import styled from 'styled-components';
import { Ui } from '@futbol-pro/ui';
import Countries from '../app/countries/countries';
import { useCountries } from '../hooks/useCountries';

const StyledPage = styled.div`
  .page {
  }
`;

export function Index() {
  const [countries] = useCountries();

  return (
    <StyledPage>
      <div id='tituloPaises' >
      <Ui playerName="List of countries" playerAge={countries?.length} />
      </div>
      <Countries countries={countries} />
    </StyledPage>
  );
}

export default Index;

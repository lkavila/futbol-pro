import Link from 'next/Link';
import styled from 'styled-components';
import { Ui } from '@futbol-pro/ui';
import Countries from '../app/countries/countries';
import { request, gql } from 'graphql-request'
import { IndexProps } from '@futbol-pro/types';

const StyledPage = styled.div`
  .page {
  }
`;

const query = gql`
    query {
    countries {
      code
      name
    }
  }
`

export async function getStaticProps() {
  const data = await request('https://countries.trevorblades.com/', query);
  const { countries } = data

  return {
    props: {
      countries
    },
  }
}

export function Index(props: IndexProps) {
  const { countries } = props;
  return (
    <StyledPage>
      <Ui playerName="Uninorte 2021" playerAge={32} />
      <Link href="about">About</Link>
      <Countries countries={countries} />
    </StyledPage>
  );
}

export default Index;

import Link from 'next/Link';
import styled from 'styled-components';
import { Ui } from '@futbol-pro/ui';
import Countries from '../app/countries/countries';
import { GraphQLClient, gql } from 'graphql-request'
import { IndexProps } from '@futbol-pro/types';

const StyledPage = styled.div`
  .page {
  }
`;
const endpoint = "https://v3.football.api-sports.io/countries"
const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    'x-apisports-key': process.env.REACT_APP_SPORTS_API_KEY
  },
})

const query = gql`
    response {
      code
      name
      flag
    }
`

export async function getStaticProps() {
  const ApiResponse = await fetch("https://v3.football.api-sports.io/countries", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "v3.football.api-sports.io",
      'x-apisports-key': process.env.REACT_APP_SPORTS_API_KEY
    }
  });
  const data = await ApiResponse.json();
  const { response } = data

  return {
    props: {
      countries: response
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

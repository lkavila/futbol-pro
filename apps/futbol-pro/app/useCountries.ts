import { useEffect, useState } from "react"
import { GraphQLClient, gql } from 'graphql-request'

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

export const useCountries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://v3.football.api-sports.io/countries", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "v3.football.api-sports.io",
        'x-apisports-key': process.env.REACT_APP_SPORTS_API_KEY
      }
    }).then((data) => data.json())
      .then(data => setCountries(data.response))
    //graphQLClient.request(query)
    //  .then((data) => setCountries(data.response))
  }, []);

  return [countries];
}

export default useCountries;

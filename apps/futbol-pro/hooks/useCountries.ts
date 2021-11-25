import { useEffect, useState } from "react"
import { _countriesService } from '../services/_countriesService'

export const useCountries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    _countriesService()
      .then((data) => data.json())
      .then(data => { setCountries(data.response); console.log(data) })
  }, []);

  return [countries];
}

export default useCountries;

import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import { useCities } from "../context/CitiesContex";

function CityList() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner></Spinner>;
  if (!cities.length)
    return (
      <Message message={"Add your first city by clicking on the map"}></Message>
    );

  const mapCountries = new Map(cities.map((city) => [city.country, city]));
  const countries = [...mapCountries.values()];

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country}></CountryItem>
      ))}
    </ul>
  );
}

export default CityList;

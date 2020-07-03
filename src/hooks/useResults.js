import { useEffect, useState } from "react";
import zomato from "../api/zomato";
import * as Location from "expo-location";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const ent_id = 2;

  const searchApi = async (searchTerm) => {
    try {
      const response = await zomato.get(
        `/search?entity_id=2&entity_type=city&q=${searchTerm}`
      );
      setResults(response.data.restaurants);
    } catch (err) {
      setErrorMessage("Something went wrong");
    }
  };

  const Initialdata = async () => {
    try {
      const response = await zomato.get(
        `/search?entity_id=2&entity_type=city&q=${searchTerm}`
      );
      setResults(response.data.restaurants);
    } catch (err) {
      setErrorMessage(console.log(Location.location));
    }
  };

  useEffect(() => {
    searchApi("chinese");
  }, []);

  return [searchApi, results, errorMessage];
};

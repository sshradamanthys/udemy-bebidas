import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const DrinksContext = createContext();

const DrinksProvider = (props) => {
  const [drinks, setDrinks] = useState([]);
  const [query, setQuery] = useState({ name: "", category: "" });
  const [executeQuery, setExecuteQuery] = useState(false);

  const { name, category } = query;

  useEffect(() => {
    if (executeQuery) {
      const fetchAPI = async () => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}&c=${category}`;
        const res = await axios(url);
        setDrinks(res.data.drinks);
        console.log(drinks);
      };

      fetchAPI();
    }

    setExecuteQuery(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <DrinksContext.Provider value={{ drinks, setQuery, setExecuteQuery }}>
      {props.children}
    </DrinksContext.Provider>
  );
};

export default DrinksProvider;

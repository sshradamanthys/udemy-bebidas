import { createContext, useState, useEffect } from "react";
import axios from "axios";

// Crear el Context
export const CategoriesContext = createContext();

// Provider es donde se encuentran las funciones y state
const CategoriesProvider = (props) => {
  // crear el state del Context
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
      const res = await axios(url);
      // console.log(res);
      setCategories(res.data.drinks);
      console.log(categories);
    };

    fetchAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <CategoriesContext.Provider value={{ categories }}>
      {props.children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesProvider;

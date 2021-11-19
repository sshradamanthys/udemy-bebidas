import { createContext, useState } from "react";

// Crear el Context
export const CategoriesContext = createContext();

// Provider es donde se encuentran las funciones y state
const CategoriesProvider = (props) => {
  // crear el state del Context
  const [greeting, setGreeting] = useState("Hello World!");

  return (
    <CategoriesContext.Provider value={{ greeting, setGreeting }}>
      {props.children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesProvider;

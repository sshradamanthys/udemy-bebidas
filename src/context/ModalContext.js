import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ModalContext = createContext();

const ModalProvider = (props) => {
  const [id, setId] = useState(null);
  const [selected, setSelected] = useState({});
  console.log(id);

  // una vez que tenemos una receta, llamar la api
  useEffect(() => {
    const fetchAPI = async () => {
      if (!id) return;
      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
      const res = await axios(url);

      setSelected(res.data.drinks[0]);
    };
    fetchAPI();
  }, [id]);

  return (
    <ModalContext.Provider value={{ selected, setSelected, setId }}>
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;

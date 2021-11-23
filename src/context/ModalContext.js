import React, { createContext, useState } from "react";

export const ModalContext = createContext();

const ModalProvider = (props) => {
  const [selected, setSelected] = useState(null);
  console.log(selected);
  return (
    <ModalContext.Provider value={{ setSelected }}>
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;

import { useContext } from "react";
import Drink from "./Drink";
import { DrinksContext } from "../context/DrinksContext";

const Drinks = () => {
  const { drinks } = useContext(DrinksContext);
  return (
    <div className="row mt-5">
      {drinks.map((drink) => (
        <Drink key={drink.idDrink} drink={drink} />
      ))}
    </div>
  );
};

export default Drinks;

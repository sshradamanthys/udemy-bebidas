import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";

const Drink = ({ drink }) => {
  const { setId } = useContext(ModalContext);

  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <h2 className="card-header">{drink.strDrink}</h2>
        <img
          src={drink.strDrinkThumb}
          alt={`Imagen de ${drink.strDrink}`}
          className="card-img-top"
        />
        <div className="card-body">
          <button
            className="btn btn-primary btn-block"
            onClick={() => {
              setId(drink.idDrink);
            }}
          >
            Ver Receta
          </button>
        </div>
      </div>
    </div>
  );
};

export default Drink;

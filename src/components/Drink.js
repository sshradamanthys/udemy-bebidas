import { useContext, useState } from "react";
import { ModalContext } from "../context/ModalContext";

import { makeStyles } from "@mui/styles";
import Modal from "@mui/material/Modal";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(() => ({
  root: {
    position: "relative",
    width: 300,
    backgroundColor: "whitesmoke",
    boxShadow: 5,
    marginTop: 25,
    padding: 20,
  },
}));

const getIngredients = (selected) => {
  let ingredients = [];
  for (let i = 1; i < 16; i++) {
    if (selected[`strIngredient${i}`]) {
      ingredients.push(
        <li>
          {selected[`strIngredient${i}`]} {selected[`strMeasure${i}`]}
        </li>
      );
    }
  }

  return ingredients;
};

const Drink = ({ drink }) => {
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { selected, setSelected, setId } = useContext(ModalContext);

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
              handleOpen();
            }}
          >
            Ver Receta
          </button>
          <Modal
            open={open}
            onClose={() => {
              setId(null);
              setSelected({});
              handleClose();
            }}
            style={{ overflowY: "scroll" }}
          >
            <div style={modalStyle} className={classes.root}>
              <h3>{selected.strDrink}</h3>
              <h6 className="text-center">Instrucciones</h6>
              <p>{selected.strInstructions}</p>

              <img
                className="img-fluid"
                src={selected.strDrinkThumb}
                alt="drink img"
              />

              <h5>Ingredientes y cantidades</h5>
              <ul>{getIngredients(selected)}</ul>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Drink;

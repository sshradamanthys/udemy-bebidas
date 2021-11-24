import { useContext, useState } from "react";
import { ModalContext } from "../context/ModalContext";

import { makeStyles } from "@mui/styles";
import Modal from "@mui/material/Modal";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 450,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

console.log(useStyles);

const Drink = ({ drink }) => {
  const { setId } = useContext(ModalContext);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
          <Modal open={open} onClose={handleClose}>
            <h3>Soy un modal</h3>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Drink;

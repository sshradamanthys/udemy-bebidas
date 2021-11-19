import { useContext } from "react";
import { CategoriesContext } from "../context/CategoriesContext";

const Form = () => {
  console.log(useContext(CategoriesContext));

  return (
    <form className="col-12">
      <fieldset className="text-center">
        <legend>Busca bebidas por Categoría o Ingrediente</legend>
      </fieldset>
      <div className="row mt-4">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Buscar por Ingrediente"
          />
        </div>
        <div className="col-md-4">
          <select name="category" id="" className="form-control">
            <option value="">--- Selecciona Categoría ---</option>
          </select>
        </div>
        <div className="col-md-4">
          <input
            type="submit"
            value="Buscar Bebidas"
            className="btn btn-primary btn-block"
          />
        </div>
      </div>
    </form>
  );
};

export default Form;

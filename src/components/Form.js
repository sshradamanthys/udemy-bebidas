import { useContext, useState } from "react";
import { CategoriesContext } from "../context/CategoriesContext";

const Form = (props) => {
  const [query, setQuery] = useState({
    name: "",
    category: "",
  });
  const { categories } = useContext(CategoriesContext);

  const handleChange = (e) => {
    setQuery({ ...query, [e.target.name]: e.target.value });
  };

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
            onChange={handleChange}
          />
        </div>
        <div className="col-md-4">
          <select
            name="category"
            className="form-control"
            onChange={handleChange}
          >
            <option value="">--- Selecciona Categoría ---</option>
            {categories.map((category) => (
              <option key={category.strCategory} value={category.strCategory}>
                {category.strCategory}
              </option>
            ))}
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

import Header from "./components/Header";
import Form from "./components/Form";
import CategoriesProvider from "./context/CategoriesContext";
import DrinksProvider from "./context/DrinksContext";

function App() {
  return (
    <CategoriesProvider>
      <DrinksProvider>
        <Header />
        <div className="container mt-5">
          <div className="row">
            <Form />
          </div>
        </div>
      </DrinksProvider>
    </CategoriesProvider>
  );
}

export default App;

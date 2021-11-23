import Header from "./components/Header";
import Form from "./components/Form";
import Drinks from "./components/Drinks";
import CategoriesProvider from "./context/CategoriesContext";
import DrinksProvider from "./context/DrinksContext";
import ModalProvider from "./context/ModalContext";

function App() {
  return (
    <CategoriesProvider>
      <DrinksProvider>
        <ModalProvider>
          <Header />
          <div className="container mt-5">
            <div className="row">
              <Form />
            </div>
            <Drinks />
          </div>
        </ModalProvider>
      </DrinksProvider>
    </CategoriesProvider>
  );
}

export default App;

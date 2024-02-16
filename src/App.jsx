import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbars from "./Components/Navbars";
import Header from "./Components/Header";
import Productstate from "./Components/Productstate";
import Productcard from "./Components/ProductCard";
function App() {
  return (
    <>
      <Navbars />
      <Header />
      <Productstate />
      <Productcard />
    </>
  );
}

export default App;

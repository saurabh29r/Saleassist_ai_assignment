import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbars from "./Components/Navbars";
import Header from "./Components/Header";
import Productstate from "./Components/Productstate";
import Productcard from "./Components/ProductCard";
import Footer from "./Components/Footer";
function App() {
  return (
    <>
      <Navbars />
      <Header />
      <Productstate />
      <Productcard />
      <Footer />
    </>
  );
}

export default App;

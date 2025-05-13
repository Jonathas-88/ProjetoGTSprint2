import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Saudacao from "./components/Saudacao";
import ComponentePai from "./components/componentePai";
import './APP.css'

const App = () => {
  return (
    <>
      <Header />
      <ComponentePai>
        <Saudacao nome="Nayara" />
      </ComponentePai>
      <ComponentePai title="Produtos em Alta">
        <Saudacao nome="Jonathas" />
      </ComponentePai>
      <Footer />
    </>
  );
};

export default App;

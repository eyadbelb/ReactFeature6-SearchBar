// Styling
import { GlobalStyle, ThemeButton } from "./styles";

import Home from "./components/Home";
// Components
import ProductList from "./components/ProductList";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import ProductDetail from "./components/ProductDetail";
import _products from "./products";
const theme = {
  light: {
    mainColor: "#242424", // main font color
    backgroundColor: "#fefafb", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
  dark: {
    mainColor: "#fefafb", // main font color
    backgroundColor: "#242424", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
};

function App() {
  const [newproducts, setNewProducts] = useState(_products);

  const [currentTheme, setCurrentTheme] = useState("light");
  const Filterd = (CookieId) => {
    console.log("HI");
    setNewProducts(newproducts.filter((product) => product.id !== CookieId));
    setNewProducts(null);
  };

  const toggleTheme = () =>
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");

  const [product, setProduct] = useState(null);
  const setView = () => {
    if (product)
      return <ProductDetail product={product} setProduct={setProduct} />;
    else {
      return (
        <ProductList
          Filterd={Filterd}
          products={newproducts}
          setProduct={setProduct}
        />
      );
    }
  };

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <ThemeButton onClick={toggleTheme}>
        {currentTheme === "light" ? "Dark" : "Light"} Mode
      </ThemeButton>
      <Home />
      {/* <ProductList setProduct={setProduct} />
      <ProductDetail product={product} /> */}
      {setView()}
    </ThemeProvider>
  );
}

export default App;

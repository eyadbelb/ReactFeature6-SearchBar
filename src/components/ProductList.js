// Styling
import { ListWrapper } from "../styles";
// Components
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
// Data

import { useState } from "react";

const ProductList = (props) => {
  const [query, setQuery] = useState("");
  let arrayOfProducts = props.products
    .filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((product) => (
      <ProductItem
        setProduct={props.setProduct}
        key={product.id}
        product={product}
        Filterd={props.Filterd}
      />
    ));

  return (
    <product>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{arrayOfProducts}</ListWrapper>
    </product>
  );
};

export default ProductList;

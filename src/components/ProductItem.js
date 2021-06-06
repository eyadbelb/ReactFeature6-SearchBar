// Styling
import { ProductWrapper } from "../styles";

const ProductItem = (props) => {
  const product = props.product;

  return (
    <ProductWrapper>
      <img
        alt={props.product.name}
        onClick={() => props.setProduct(product)}
        src={props.product.image}
      />
      <p>{props.product.name}</p>
      <p className="product-price">{props.product.price} KD</p>
    </ProductWrapper>
  );
};

export default ProductItem;

import { DetailWrapper } from "../styles";

const ProductDetail = (props) => {
  return (
    <DetailWrapper>
      <h1>{props.product.name}</h1>
      <img src={props.product.image} alt={props.product.name} />
      <p>{props.product.detalis} </p>
      <p>{props.product.price}</p>
      <button onClick={() => props.setProduct(null)}> GO BACK </button>
    </DetailWrapper>
  );
};

export default ProductDetail;

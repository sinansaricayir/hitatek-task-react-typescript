import { IProduct } from "../../interfaces/IProduct";
import ProductItem from "./ProductItem";

let localData = localStorage.getItem("products");
let products: IProduct[] = localData ? JSON.parse(localData) : [];

const Products: React.FC = () => {
  return (
    <div className="products-wrapper flex flex-wrap gap-8 ">
      {products.map((product, index) => (
        <ProductItem {...product} key={index} />
      ))}
    </div>
  );
};

export default Products;

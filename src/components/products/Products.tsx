import { IProduct } from "../../interfaces/IProduct";
import ProductItem from "./ProductItem";
import { useEffect, useState } from "react";

const Products: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    let localData = localStorage.getItem("products");
    let parsedData = localData ? JSON.parse(localData) : [];
    setProducts(parsedData);
  }, []);

  return (
    <div className="products-wrapper flex flex-wrap items-center justify-center gap-8 ">
      {products.map((product, index) => (
        <ProductItem {...product} key={index} />
      ))}
    </div>
  );
};

export default Products;

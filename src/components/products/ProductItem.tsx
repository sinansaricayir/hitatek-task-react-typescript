import { CiHeart } from "react-icons/ci";
import { GoGitCompare } from "react-icons/go";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";

interface ProductItemProps {
  categoryName: string;
  categoryTitle: string;
  title: string;
  imageUrl: string;
  price: number;
}

const ProductItem: React.FC<ProductItemProps> = ({
  categoryName,
  categoryTitle,
  title,
  imageUrl,
  price,
}) => {
  return (
    <div className="product-item border hover:shadow-2xl cursor-pointer select-none transition-all duration-300 hover:scale-105 p-2 w-[250px]">
      <div className="flex flex-col ml-2">
        <p className="text-gray-300 font-bold"> {categoryTitle} </p>
        <p className="text-black font-bold text-xl">{title}</p>
      </div>
      <div className="product-image">
        <img
          src={imageUrl}
          className="h-[200px] object-cover w-full min-w-[150px]"
        />
      </div>
      <div className="flex justify-between mx-2 text-2xl border-b mb-2 font-bold">
        <p>{price}$</p>
        <small className="border flex items-center justify-center rounded-full mb-2 p-2 bg-gray-200 hover:bg-yellow-300">
          <MdOutlineShoppingCartCheckout />
        </small>
      </div>
      <div className="flex justify-between mx-2 my-2 text-xl text-gray-300 font-bold">
        <small className="flex items-center justify-center">
          <CiHeart className="mr-1" /> Wishlist
        </small>
        <small className="flex items-center justify-center">
          <GoGitCompare className="mr-1" /> Compare
        </small>
      </div>
      <p className="ml-2 mb-2 text-gray-300">{categoryName}</p>
    </div>
  );
};

export default ProductItem;

import { CiHeart } from "react-icons/ci";
import { GoGitCompare } from "react-icons/go";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { IProductItemProps } from "../../interfaces/IProductItemProps";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

const ProductItem: React.FC<IProductItemProps> = ({
  id,
  categoryName,
  categoryTitle,
  title,
  imageUrl,
  price,
}) => {
  const dispatch = useDispatch();

  const addProduct = (): void => {
    dispatch(
      addToCart({
        id: id,
        categoryName: categoryName,
        categoryTitle: categoryTitle,
        title: title,
        imageUrl: imageUrl,
        price: price,
        quantity: 1,
      })
    );
  };

  return (
    <div
      onClick={addProduct}
      className="product-item border hover:shadow-2xl cursor-pointer select-none transition-all duration-300 hover:scale-105 p-2 w-[250px]"
    >
      <div className="flex flex-col ml-2">
        <p className="text-gray-300 font-bold"> {categoryTitle} </p>
        <p className="text-black font-bold text-xl">{title}</p>
      </div>
      <div className="product-image">
        <img
          src={imageUrl}
          alt=""
          className="h-[200px] w-[200px] object-cover min-w-[150px]"
        />
      </div>
      <div className="flex items-center justify-between mx-2 text-2xl my-2 font-bold">
        <p className="mx-2">{price}$</p>
        <small
          onClick={addProduct}
          className="border flex items-center justify-center rounded-full p-2 mx-2  bg-yellow-200"
        >
          <MdOutlineShoppingCartCheckout className="animate-pulse" />
        </small>
      </div>
      <div className="flex items-center justify-between mx-2 my-2 text-xl text-gray-300 font-bold border-t">
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

import { Button, message } from "antd";
import {
  ClearOutlined,
  PlusCircleOutlined,
  MinusCircleOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, allRemoveItem, removeItem } from "../../redux/cartSlice";

const CartTotals = () => {
  const cart = useSelector((state: RootState) => state.cartSlice.cart);
  const total = useSelector((state: RootState) => state.cartSlice.total);
  console.log(total);

  const dispatch = useDispatch();

  const deleteAll = (): void => {
    if (
      window.confirm("Sepetteki tüm ürünleri silmek istediğinize emin misiniz?")
    ) {
      dispatch(allRemoveItem());
      message.success("Silme işlemi başarılı.");
    }
  };

  const getOrder = (): void => {
    dispatch(allRemoveItem());
    message.success("Siparişiniz alındı.");
  };

  return (
    <div className="cart h-full max-h-[calc(100vh_-_90px)] flex flex-col">
      <h2 className="bg-blue-600 text-white p-4 font-bold tracking-wide">
        Sepetteki Ürünler
      </h2>
      <ul className="cart-items px-2 flex flex-col gap-y-3 pt-2 py-2 overflow-y-auto">
        {cart.length > 0 ? (
          cart.map((item) => (
            <li className="cart-item flex justify-between">
              <div className="flex items-center">
                <img
                  src={item.imageUrl}
                  alt=""
                  className="h-16 w-16 object-cover cursor-pointer"
                />
                <div className="flex flex-col pl-2">
                  <b>{item.title}</b>
                  <span>
                    {item.price}$ X {item.quantity}
                  </span>
                </div>
              </div>
              <div className="flex items-center">
                <Button
                  onClick={() => dispatch(addToCart(item))}
                  type="primary"
                  size="small"
                  className="w-full flex items-center justify-center !rounded-full bg-blue-500"
                  icon={<PlusCircleOutlined />}
                />

                <Button
                  onClick={() => dispatch(removeItem(item.id))}
                  type="primary"
                  size="small"
                  className="w-full flex items-center justify-center !rounded-full bg-blue-500"
                  icon={<DeleteOutlined />}
                />
              </div>
            </li>
          ))
        ) : (
          <div className="text-center mt-2 font-bold">Sepette ürün yok...</div>
        )}
      </ul>
      <div className="cart-totals mt-auto">
        <div className="border-b border-t mt-4">
          <div className="flex justify-between p-2">
            <b className="text-xl text-green-500">Genel Toplam</b>
            <span className="text-xl">
              {total} <span className="text-green-500">$</span>
            </span>
          </div>
        </div>
        <div className="py-4 px-2">
          <Button
            onClick={getOrder}
            type="primary"
            size="large"
            className="w-full bg-blue-500"
          >
            Sipariş Oluştur
          </Button>

          <Button
            onClick={deleteAll}
            type="primary"
            size="large"
            className="w-full mt-2 flex items-center justify-center"
            icon={<ClearOutlined />}
            danger
          >
            Sil
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartTotals;

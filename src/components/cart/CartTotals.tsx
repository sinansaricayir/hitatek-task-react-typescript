import { Button, Popconfirm } from "antd";
import {
  ClearOutlined,
  PlusCircleOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const CartTotals = () => {
  const navigate = useNavigate();

  return (
    <div className="cart h-full max-h-[calc(100vh_-_90px)] flex flex-col">
      <h2 className="bg-blue-600 text-white p-4 font-bold tracking-wide">
        Sepetteki Ürünler
      </h2>
      <ul className="cart-items px-2 flex flex-col gap-y-3 pt-2 py-2 overflow-y-auto">
        <li className="cart-item flex justify-between">
          <div className="flex items-center">
            <img
              src="data:image/jpeg;base64,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"
              alt=""
              className="h-16 w-16 object-cover cursor-pointer"
            />
            <div className="flex flex-col pl-2">
              <b>Macbook</b>
              <span>1200$ X 1</span>
            </div>
          </div>
          <div className="flex items-center">
            <Button
              type="primary"
              size="small"
              className="w-full flex items-center justify-center !rounded-full bg-blue-500"
              icon={<PlusCircleOutlined />}
            />
            <span className="font-bold inline-block w-6 text-center"></span>
            <Button
              type="primary"
              size="small"
              className="w-full flex items-center justify-center !rounded-full bg-blue-500"
              icon={<MinusCircleOutlined />}
            />
          </div>
        </li>

        <div className="text-center mt-2 font-bold">Sepette ürün yok...</div>
      </ul>
      <div className="cart-totals mt-auto">
        <div className="border-b border-t">
          <div className="flex justify-between p-2">
            <b>Ara Toplam</b>
            <span>55.00₺</span>
          </div>
          <div className="flex justify-between p-2">
            <b>KDV %10 </b>
            <span className="text-red-700">5.5₺</span>
          </div>
        </div>
        <div className="border-b mt-4">
          <div className="flex justify-between p-2">
            <b className="text-xl text-green-500">Genel Toplam</b>
            <span className="text-xl">55₺</span>
          </div>
        </div>
        <div className="py-4 px-2">
          <Button type="primary" size="large" className="w-full bg-blue-500">
            Sipariş Oluştur
          </Button>

          <Popconfirm
            title="Ürün Silme "
            description="Ürünü silmek istediğinizden emin misiniz ?"
            okText="Evet"
            cancelText="Hayır"
            className="w-full mt-2 flex items-center justify-center"
          >
            <Button
              type="primary"
              size="large"
              className="w-full mt-2 flex items-center justify-center"
              icon={<ClearOutlined />}
              danger
            >
              Sil
            </Button>
          </Popconfirm>
        </div>
      </div>
    </div>
  );
};

export default CartTotals;

import { Link, useNavigate } from "react-router-dom";
import { Badge, Input, message } from "antd";
import {
  SearchOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Header = () => {
  const navigate = useNavigate();
  const cart = useSelector((state: RootState) => state.cartSlice.cart);

  const logout = () => {
    if (window.confirm("Çıkış yapmak istediğinize emin misiniz?")) {
      localStorage.removeItem("user");
      navigate("/login");
      message.success("Çıkış işlemi başarılı.");
    }
  };

  return (
    <div className="border-b mb-6">
      <header className="py-4 px-6 flex justify-between items-center gap-10">
        <div className="logo">
          <Link to="/dashboard">
            <h2 className="text-2xl font-bold md:text-4xl">
              <img src="https://www.hitatek.com/tr/images/logo.png" alt="" />
            </h2>
          </Link>
        </div>
        <div className="header-search flex-1">
          <Input
            size="large"
            placeholder="Ürün Ara ..."
            prefix={<SearchOutlined />}
            className="rounded-full max-w-[auto]"
          />
        </div>
        <div className="flex justify-content items-center gap-8">
          <Link to="/" className="flex flex-col items-center justify-center">
            <HomeOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">Anasayfa</span>
          </Link>
          <Badge count={cart.length} offset={[0, 0]}>
            <Link
              to="/cart"
              className="flex flex-col items-center justify-center"
            >
              <ShoppingCartOutlined className="md:text-2xl text-xl" />
              <span className="md:text-xs text-[10px]">Sepet</span>
            </Link>
          </Badge>
          <div
            onClick={logout}
            className="flex flex-col items-center justify-center cursor-pointer hover:text-red-500"
          >
            <LogoutOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">Çıkış</span>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;

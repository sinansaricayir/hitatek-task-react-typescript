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
import { useTranslation } from "react-i18next";

const Header = () => {
  const navigate = useNavigate();
  const cart = useSelector((state: RootState) => state.cartSlice.cart);
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  const handleChangeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  const logout = () => {
    if (window.confirm(`${t("warning.logout")}`)) {
      localStorage.removeItem("user");
      navigate("/login");
      message.success(`${t("warning.logoutMessage")}`);
    }
  };

  return (
    <div className="border-b mb-6">
      <header className="py-4 px-6 flex justify-between items-center gap-10">
        <div className="logo">
          <Link to="/dashboard">
            <h2 className="font-bold text-4xl">
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
        <div className="flex items-center justify-center gap-2">
          <img
            onClick={() => handleChangeLanguage("tr")}
            src="https://www.hitatek.com/en/images/tr.png"
            alt=""
            className="h-8 w-8 hover:scale-125 transition-all duration-300"
          />
          <img
            onClick={() => handleChangeLanguage("en")}
            src="https://www.hitatek.com/en/images/en.png"
            alt=""
            className="h-8 w-8 hover:scale-125 transition-all duration-300"
          />
        </div>
        <div className="flex justify-content items-center gap-8">
          <Link to="/" className="flex flex-col items-center justify-center">
            <HomeOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">
              {t("header.homepage")}
            </span>
          </Link>
          <Badge count={cart.length} offset={[0, 0]}>
            <Link to="#" className="flex flex-col items-center justify-center">
              <ShoppingCartOutlined className="md:text-2xl text-xl" />
              <span className="md:text-xs text-[10px]">
                {t("header.basket")}
              </span>
            </Link>
          </Badge>
          <div
            onClick={logout}
            className="flex flex-col items-center justify-center cursor-pointer hover:text-red-500"
          >
            <LogoutOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">{t("header.logout")}</span>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;

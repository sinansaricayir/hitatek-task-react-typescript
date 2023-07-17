import Header from "../components/Header";
import { PlusOutlined, EditOutlined } from "@ant-design/icons";
import { useState } from "react";
import Add from "../components/products/Add";
import Products from "../components/products/Products";
import { useTranslation } from "react-i18next";

const Dashboard = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const handleChangeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      <Header />
      <div className="home px-6 flex md:flex-row flex-col justify-between gap-10 h-screen">
        <div className="categories flex md:flex-col flex-row overflow-auto md:max-h-[calc(100vh_-_112px)] min-h-[125px] pb-10">
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="bg-blue-500 p-8 flex flex-col items-center justify-center text-white"
          >
            <PlusOutlined className="text-4xl" />{" "}
            <small className="mt-4 text-lg">Ürün Ekle</small>
          </button>
        </div>
        <div className="products flex-[8] max-h-[calc(100vh_-_112px)] overflow-y-auto pb-10 min-h-[500px] ">
          <Products />
        </div>
        <div>
          <button onClick={() => handleChangeLanguage("en")}>English</button>
          <button onClick={() => handleChangeLanguage("tr")}>Türkçe</button>
        </div>
        <div>
          <h1>{t("cart.title")}</h1>
          <button>{t("cart.add")}</button>
          <button>{t("cart.increment")}</button>
          <button>{t("cart.decrement")}</button>
          <button>{t("cart.remove")}</button>
          <button>{t("cart.allRemove")}</button>
        </div>
      </div>
      7
      <Add
        isAddModalOpen={isAddModalOpen}
        setIsAddModalOpen={setIsAddModalOpen}
      />
    </>
  );
};

export default Dashboard;

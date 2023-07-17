import Header from "../components/Header";
import { PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
import Add from "../components/products/Add";
import Products from "../components/products/Products";
import { useTranslation } from "react-i18next";

const Dashboard = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <div className="home px-6 flex md:flex-row flex-col justify-between gap-10 h-screen">
        <div className="addProduct flex md:flex-col flex-row overflow-auto md:max-h-[calc(100vh_-_112px)] min-h-[125px] pb-10">
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="bg-blue-500 p-8 flex flex-col items-center justify-center text-white"
          >
            <PlusOutlined className="text-4xl" />{" "}
            <small className="mt-4 text-lg">{t("product.add")}</small>
          </button>
        </div>
        <div className="products flex-[8] max-h-[calc(100vh_-_112px)] overflow-y-auto pb-10 min-h-[500px] ">
          <Products />
        </div>
      </div>

      <Add
        isAddModalOpen={isAddModalOpen}
        setIsAddModalOpen={setIsAddModalOpen}
      />
    </>
  );
};

export default Dashboard;

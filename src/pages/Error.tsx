import React from "react";
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

const Error: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Result
      status="404"
      title="404"
      subTitle="Üzgünüz, aradığınız sayfa bulunmamaktadır!"
      extra={
        <Button
          onClick={() => navigate("/")}
          type="primary"
          className="bg-blue-500"
        >
          Anasayfa'ya git
        </Button>
      }
    />
  );
};

export default Error;

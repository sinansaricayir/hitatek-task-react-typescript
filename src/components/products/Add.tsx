import { Button, Form, Input, Modal, message } from "antd";
import { IModal } from "../../interfaces/IModal";
import { IProduct } from "../../interfaces/IProduct";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";


const Add: React.FC<IModal> = ({ isAddModalOpen, setIsAddModalOpen }) => {
  const [form] = Form.useForm();
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    let localData = localStorage.getItem("products");
    let parsedData = localData ? JSON.parse(localData) : [];
    setProducts(parsedData);
  }, []);

  const onFinish = (value: any) => {
    try {
      //create IProduct object and assign values
      const product: IProduct = {
        id: uuidv4(),
        categoryName: value.categoryName,
        categoryTitle: value.categoryTitle,
        title: value.title,
        imageUrl: value.imageUrl,
        price: value.price,
      };

      let updatedProducts = [...products, product];

      localStorage.setItem("products", JSON.stringify(updatedProducts));

      setProducts(updatedProducts);

      message.success("Ürün başarıyla eklendi.");
      setIsAddModalOpen(false);
      form.resetFields();
    } catch (error) {
      console.log(error);
      message.error("Hata oluştu!");
    }
  };

  return (
    <Modal
      title="Yeni Ürün Ekle"
      open={isAddModalOpen}
      onCancel={() => setIsAddModalOpen(false)}
      footer={false}
    >
      <Form layout="vertical" onFinish={onFinish} form={form}>
        <Form.Item
          label={"Kategori Adı"}
          name="categoryName"
          rules={[
            {
              required: true,
              message: "Bu Alan Boş Geçilemez!",
            },
          ]}
        >
          <Input placeholder="kategori adı giriniz" />
        </Form.Item>
        <Form.Item
          label={"Kategori Başlığı"}
          name="categoryTitle"
          rules={[
            {
              required: true,
              message: "Bu Alan Boş Geçilemez!",
            },
          ]}
        >
          <Input placeholder="kategori başlığı giriniz" />
        </Form.Item>
        <Form.Item
          label={"Ürün Başlığı"}
          name="title"
          rules={[
            {
              required: true,
              message: "Bu Alan Boş Geçilemez!",
            },
          ]}
        >
          <Input placeholder="ürün başlığı giriniz" />
        </Form.Item>
        <Form.Item
          label={"Görsel Url"}
          name="imageUrl"
          rules={[
            {
              required: true,
              message: "Bu Alan Boş Geçilemez!",
            },
          ]}
        >
          <Input placeholder="ürün görsel url giriniz" />
        </Form.Item>
        <Form.Item
          label={"Fiyat"}
          name="price"
          rules={[
            {
              required: true,
              message: "Bu Alan Boş Geçilemez!",
            },
          ]}
        >
          <Input placeholder="fiyat bilgisi giriniz" />
        </Form.Item>
        <Form.Item className="flex justify-end mb-0">
          <Button type="primary" htmlType="submit" className="bg-blue-500">
            Oluştur
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default Add;

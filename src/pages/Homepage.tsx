import Categories from "../components/Category";
import Header from "../components/Header";
import CartTotals from "../components/cart/CartTotals";
import Products from "../components/products/Products";

const Homepage = () => {
  return (
    <>
      <Header />
      <div className="home px-6 flex md:flex-row flex-col justify-between gap-10 h-screen">
        <div className="categories flex md:flex-col flex-row overflow-auto md:max-h-[calc(100vh_-_112px)] min-h-[125px] pb-10">
          <Categories name="Tümü" />
          <Categories name="Laptop" />
          <Categories name="Telefon" />
        </div>
        <div className="products flex-[8]  max-h-[calc(100vh_-_112px)] overflow-y-auto pb-10 min-h-[500px] ">
          <Products />
        </div>
        <div className="cart-totals min-w-[300px] md:-mr-[24px] md:-mt-[24px] md:pb-0 pb-12 border">
          <CartTotals />
        </div>
      </div>
    </>
  );
};

export default Homepage;

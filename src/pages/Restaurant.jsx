import HeaderWhite from "../components/layouts/HeaderWhite";
import Footer from "../components/layouts/Footer";
import DetailInfoRestaurant from "../components/restaurants/DetailInfoRestaurant";
import Products from "../components/restaurants/Products";

function Restaurant() {
  return (
    <div>
      <HeaderWhite />
      <div className="flex flex-wrap justify-center">
        <DetailInfoRestaurant />

        <div
          className=" flex w-full flex-wrap justify-center py-10"
          style={{ backgroundColor: "#f7f7f7" }}
        >
          <Products />
          <div className="mt-20 flex justify-center" style={{ width: 1200 }}>
            <h4 className="">Chúng tôi luôn cố gắng cập nhật thông tin chính xác nhất. <a href="/" className="text-sky-500">Hãy báo với chúng tôi</a> nếu bạn thấy bất kỳ thông tin không chính xác nào.</h4>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Restaurant;

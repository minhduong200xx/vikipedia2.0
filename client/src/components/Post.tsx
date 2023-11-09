import Card from "./Card";
import { Link } from "react-router-dom";
const Post: React.FC = () => {
  return (
    <div className="w-[80%] h-full">
      <h1 className="text-2xl font-bold border-b">Bài viết chọn lọc</h1>
      <div className="w-full h-42 flex flex-row gap-2">
        <div className="w-[80%] h-40 border p-3 mt-2 flex items-center justify-center flex-col">
          <h2 className="text-lg font-medium">
            Bài viết chọn lọc tại Vikipedia Tiếng Việt
          </h2>
          <p>
            Bài viết chọn lọc đại diện cho phần tốt nhất mà Vikipedia mang lại.
            Đây là những bài viết, hình ảnh và nhiều sự đóng góp khác thể hiện
            kết quả tốt đẹp của những nỗ lực hợp tác nhằm phát triển Wikipedia.
            Tất cả những nội dung chọn lọc đều trải qua quá trình xem xét, trừ
            các hình ảnh chọn lọc đã được chọn trên Vikimedia Commons, để chắc
            chắn rằng chúng đạt được những tiêu chuẩn cao nhất và có thể trở
            thành những ví dụ điển hình về mục đích cuối cùng của chúng ta. Một
            ngôi sao màu vàng (Ngôi sao nội dung chọn lọc) ở góc bên phải, đầu
            trang cho biết rằng nội dung này đã được chọn lọc.
          </p>
        </div>
        <div className="w-[50%] h-40 border p-3 mt-2 flex flex-col">
          <b className="text-lg">Lưu trữ</b>
          <ul className="list-disc flex flex-row gap-6 px-4 w-full">
            <li>
              <Link to={"2020"} className="text-blue-600">
                2020
              </Link>
            </li>
            <li>
              <Link to={"2021"} className="text-blue-600">
                2021
              </Link>
            </li>
            <li>
              <Link to={"2022"} className="text-blue-600">
                2022
              </Link>
            </li>
            <li>
              <Link to={"2023"} className="text-blue-600">
                2023
              </Link>
            </li>
          </ul>
          <b className="text-lg">Xem thêm</b>
          <ul className="list-disc gap-6 px-4 w-full ">
            <li>
              <Link to={"/random-article"} className="text-blue-600">
                Bài viết chọn lọc ngẫu nhiên
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full h-full flex flex-col gap-2 py-2 mx-auto">
        <span className="w-full h-8 text-2xl font-medium bg-slate-100">
          <h1 className="w-fit mx-auto">Bài viết chọn lọc trên trang chính</h1>
        </span>
        <span className="w-fit h-fit gap-2 grid grid-cols-2">
          <Card />
          <Card />
        </span>
        <span className="w-full h-8 text-2xl font-medium bg-slate-100">
          <h1 className="w-fit mx-auto">Nội dung theo lĩnh vực</h1>
        </span>
      </div>
    </div>
  );
};
export default Post;

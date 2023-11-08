import React from "react";
import { StarFilled } from "@ant-design/icons";
//các loại thẻ hiển thị tại trang chính
const Card = () => {
  return (
    <div className="w-[2/3] h-fit  border shadow-lg p-2">
      <h1 className="font-semibold text-xl h-8 bg-slate-100 rounded-t-lg">
        <StarFilled className="text-yellow-600 bg-slate-300 h-8 rounded-tl-lg px-2 mr-2" />
        Bài viết chọn lọc
      </h1>
      <span className="pl-2 flex flex-row w-fit">
        Trần Thái Tông (9 tháng 7 năm 1218 – 5 tháng 5 năm 1277) là vị hoàng đế
        đầu tiên của Hoàng triều Trần nước Đại Việt. Ông giữ ngôi từ ngày 10
        tháng 1 năm 1226 tới ngày 30 tháng 3 năm 1258, sau đó làm Thái thượng
        hoàng cho đến khi qua đời năm 1277.
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/L%C4%83ng_Tr%E1%BA%A7n_Th%C3%A1i_T%C3%B4ng.jpg/390px-L%C4%83ng_Tr%E1%BA%A7n_Th%C3%A1i_T%C3%B4ng.jpg"
          alt="Lăng Vua Trần Thái Thông"
          className="h-32 w-48"
        />
      </span>
      <p className="pl-2">
        Trần Cảnh sinh ra vào thời Lý, quê ở huơng Tức Mặc, phủ Thiên Trường
        (nay là phường Lộc Vượng, thành phố Nam Định, tỉnh Nam Định). Ông là con
        của Trần Thừa là Phụ quốc Thái úy của Nhà Lý do có công phò tá vua Huệ
        Tông trong loạn Quách Bốc. Họ Trần lúc này đã là thế lực chính trị nắm
        triều đình nhà Lý. Lên bảy tuổi, ông được Điện tiền Chỉ huy sứ Trần Thủ
        Độ vốn là chú họ tiến cử làm Chi hậu chính chi ứng cục, hầu hạ cho nữ
        hoàng nhỏ tuổi Lý Chiêu Hoàng. Cuối năm 1225 – đầu năm 1226, Trần Thủ Độ
        buộc Lý Chiêu Hoàng cưới và nhường ngôi cho Trần Cảnh, tức Hoàng đế Trần
        Thái Tông. Tân hoàng đế mời cha là Trần Thừa làm Thái thượng hoàng, Trần
        Thủ Độ làm Thái sư, lại phong Chiêu Hoàng làm Chiêu Thánh Hoàng hậu. [
        {<b>Đọc tiếp</b>}]
      </p>
    </div>
  );
};
export default Card;

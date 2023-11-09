import { BookFilled, CalendarFilled, LikeFilled } from "@ant-design/icons";
import Banner from "../components/Banner";
import SelectedCard from "../components/SelectedCard";
import FactCard from "../components/FactCard";
import DayInThePast from "../components/DayInThePast";

const Home: React.FC = () => {
  return (
    <div className="flex flex-row h-full">
      <div className=" w-36 h-full"></div>
      <div className="w-[80%] h-full">
        <Banner />

        <div className=" w-full grid grid-cols-2 gap-4 p-4">
          <SelectedCard />
          <div className="w-full flex flex-col justify-between">
            <FactCard />
            <DayInThePast />
          </div>
          <div className="w-full h-fit  border shadow-lg p-2">
            <h1 className="font-semibold text-xl h-8 bg-slate-100 rounded-t-lg">
              <LikeFilled className="text-blue-600 bg-slate-300 h-8 rounded-tl-lg px-2 mr-2" />
              Bài viết tốt
            </h1>
            <span className="pl-2 flex flex-row w-fit">
              Trần Thái Tông (9 tháng 7 năm 1218 – 5 tháng 5 năm 1277) là vị
              hoàng đế đầu tiên của Hoàng triều Trần nước Đại Việt. Ông giữ ngôi
              từ ngày 10 tháng 1 năm 1226 tới ngày 30 tháng 3 năm 1258, sau đó
              làm Thái thượng hoàng cho đến khi qua đời năm 1277.
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/L%C4%83ng_Tr%E1%BA%A7n_Th%C3%A1i_T%C3%B4ng.jpg/390px-L%C4%83ng_Tr%E1%BA%A7n_Th%C3%A1i_T%C3%B4ng.jpg"
                alt="Lăng Vua Trần Thái Thông"
                className="h-32 w-48"
              />
            </span>
            <p className="pl-2">
              Trần Cảnh sinh ra vào thời Lý, quê ở huơng Tức Mặc, phủ Thiên
              Trường (nay là phường Lộc Vượng, thành phố Nam Định, tỉnh Nam
              Định). Ông là con của Trần Thừa là Phụ quốc Thái úy của Nhà Lý do
              có công phò tá vua Huệ Tông trong loạn Quách Bốc. Họ Trần lúc này
              đã là thế lực chính trị nắm triều đình nhà Lý. Lên bảy tuổi, ông
              được Điện tiền Chỉ huy sứ Trần Thủ Độ vốn là chú họ tiến cử làm
              Chi hậu chính chi ứng cục, hầu hạ cho nữ hoàng nhỏ tuổi Lý Chiêu
              Hoàng. Cuối năm 1225 – đầu năm 1226, Trần Thủ Độ buộc Lý Chiêu
              Hoàng cưới và nhường ngôi cho Trần Cảnh, tức Hoàng đế Trần Thái
              Tông. Tân hoàng đế mời cha là Trần Thừa làm Thái thượng hoàng,
              Trần Thủ Độ làm Thái sư, lại phong Chiêu Hoàng làm Chiêu Thánh
              Hoàng hậu. [{<b>Đọc tiếp</b>}]
            </p>
          </div>

          <div className="w-full h-fit  border shadow-lg p-2">
            <h1 className="font-semibold text-xl h-8 bg-slate-100 rounded-t-lg">
              <LikeFilled className="text-blue-600 bg-slate-300 h-8 rounded-tl-lg px-2 mr-2" />
              Bài viết tốt
            </h1>
            <span className="pl-2 flex flex-row w-fit">
              Trần Thái Tông (9 tháng 7 năm 1218 – 5 tháng 5 năm 1277) là vị
              hoàng đế đầu tiên của Hoàng triều Trần nước Đại Việt. Ông giữ ngôi
              từ ngày 10 tháng 1 năm 1226 tới ngày 30 tháng 3 năm 1258, sau đó
              làm Thái thượng hoàng cho đến khi qua đời năm 1277.
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/L%C4%83ng_Tr%E1%BA%A7n_Th%C3%A1i_T%C3%B4ng.jpg/390px-L%C4%83ng_Tr%E1%BA%A7n_Th%C3%A1i_T%C3%B4ng.jpg"
                alt="Lăng Vua Trần Thái Thông"
                className="h-32 w-48"
              />
            </span>
            <p className="pl-2">
              Trần Cảnh sinh ra vào thời Lý, quê ở huơng Tức Mặc, phủ Thiên
              Trường (nay là phường Lộc Vượng, thành phố Nam Định, tỉnh Nam
              Định). Ông là con của Trần Thừa là Phụ quốc Thái úy của Nhà Lý do
              có công phò tá vua Huệ Tông trong loạn Quách Bốc. Họ Trần lúc này
              đã là thế lực chính trị nắm triều đình nhà Lý. Lên bảy tuổi, ông
              được Điện tiền Chỉ huy sứ Trần Thủ Độ vốn là chú họ tiến cử làm
              Chi hậu chính chi ứng cục, hầu hạ cho nữ hoàng nhỏ tuổi Lý Chiêu
              Hoàng. Cuối năm 1225 – đầu năm 1226, Trần Thủ Độ buộc Lý Chiêu
              Hoàng cưới và nhường ngôi cho Trần Cảnh, tức Hoàng đế Trần Thái
              Tông. Tân hoàng đế mời cha là Trần Thừa làm Thái thượng hoàng,
              Trần Thủ Độ làm Thái sư, lại phong Chiêu Hoàng làm Chiêu Thánh
              Hoàng hậu. [{<b>Đọc tiếp</b>}]
            </p>
          </div>
          <div className="w-full h-fit  border shadow-lg p-2">
            <h1 className="font-semibold text-xl h-8 bg-slate-100 rounded-t-lg">
              <BookFilled className="text-red-600 bg-slate-300 h-8 rounded-tl-lg px-2 mr-2" />
              Các lĩnh vực
            </h1>
            <li>
              …trên tờ báo Tổ quốc, nữ ca sĩ <b>Hà Nhi</b> đã được ví von như ca
              sĩ "tri ân người yêu cũ"?
            </li>
            <li>
              …tác giả Mashima Hiro cho biết nguồn cảm hứng sáng tác bộ manga{" "}
              <b>Fairy Tail</b> đến từ việc ngồi trong quán bar và tiệc tùng với
              bạn bè?
            </li>
            <li>
              …<b>núi Phú Cường</b> ở An Giang từng bị quân Khmer Đỏ chiếm đóng?
            </li>
            <li>
              …<b>James B. Tapp </b>là phi công đầu tiên thuộc Không lực Lục
              quân Hoa Kỳ được công nhận là phi công ách khi thực hiện các nhiệm
              vụ tầm xa trên bầu trời Nhật Bản trên các chiếc P-51 trong Thế
              chiến II?
            </li>
            <li>
              …trên tờ báo Tổ quốc, nữ ca sĩ <b>Hà Nhi</b> đã được ví von như ca
              sĩ "tri ân người yêu cũ"?
            </li>
            <li>
              …tác giả Mashima Hiro cho biết nguồn cảm hứng sáng tác bộ manga{" "}
              <b>Fairy Tail</b> đến từ việc ngồi trong quán bar và tiệc tùng với
              bạn bè?
            </li>
            <li>
              …<b>núi Phú Cường</b> ở An Giang từng bị quân Khmer Đỏ chiếm đóng?
            </li>
            <li>
              …<b>James B. Tapp </b>là phi công đầu tiên thuộc Không lực Lục
              quân Hoa Kỳ được công nhận là phi công ách khi thực hiện các nhiệm
              vụ tầm xa trên bầu trời Nhật Bản trên các chiếc P-51 trong Thế
              chiến II?
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;

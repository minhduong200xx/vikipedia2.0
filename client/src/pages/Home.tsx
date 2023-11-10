import { BookFilled } from "@ant-design/icons";
import Banner from "../components/Banner";
import SelectedCard from "../components/SelectedCard";
import FactCard from "../components/FactCard";
import DayInThePast from "../components/DayInThePast";
import GoodCard from "../components/GoodCard";
import Categories from "../components/Categories";

const Home: React.FC = () => {
  return (
    <div className="flex flex-row h-full">
      <div className=" w-36 h-full"></div>
      <div className="w-[80%] h-full">
        <Banner />

        <div className=" w-full grid grid-cols-2 gap-4 p-4">
          <div className="flex flex-col gap-4">
            <SelectedCard />
            <GoodCard />
          </div>
          <div className="flex flex-col gap-4">
            <FactCard />
            <DayInThePast />
            <Categories />
            <div className="w-full h-fit  border shadow-lg p-2">
              <h1 className="font-semibold text-xl h-8 bg-slate-100 rounded-t-lg">
                <BookFilled className="text-red-600 bg-slate-300 h-8 rounded-tl-lg px-2 mr-2" />
                Các lĩnh vực
              </h1>
              <li>
                …trên tờ báo Tổ quốc, nữ ca sĩ <b>Hà Nhi</b> đã được ví von như
                ca sĩ "tri ân người yêu cũ"?
              </li>
              <li>
                …tác giả Mashima Hiro cho biết nguồn cảm hứng sáng tác bộ manga{" "}
                <b>Fairy Tail</b> đến từ việc ngồi trong quán bar và tiệc tùng
                với bạn bè?
              </li>
              <li>
                …<b>núi Phú Cường</b> ở An Giang từng bị quân Khmer Đỏ chiếm
                đóng?
              </li>
              <li>
                …<b>James B. Tapp </b>là phi công đầu tiên thuộc Không lực Lục
                quân Hoa Kỳ được công nhận là phi công ách khi thực hiện các
                nhiệm vụ tầm xa trên bầu trời Nhật Bản trên các chiếc P-51 trong
                Thế chiến II?
              </li>
              <li>
                …trên tờ báo Tổ quốc, nữ ca sĩ <b>Hà Nhi</b> đã được ví von như
                ca sĩ "tri ân người yêu cũ"?
              </li>
              <li>
                …tác giả Mashima Hiro cho biết nguồn cảm hứng sáng tác bộ manga{" "}
                <b>Fairy Tail</b> đến từ việc ngồi trong quán bar và tiệc tùng
                với bạn bè?
              </li>
              <li>
                …<b>núi Phú Cường</b> ở An Giang từng bị quân Khmer Đỏ chiếm
                đóng?
              </li>
              <li>
                …<b>James B. Tapp </b>là phi công đầu tiên thuộc Không lực Lục
                quân Hoa Kỳ được công nhận là phi công ách khi thực hiện các
                nhiệm vụ tầm xa trên bầu trời Nhật Bản trên các chiếc P-51 trong
                Thế chiến II?
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;

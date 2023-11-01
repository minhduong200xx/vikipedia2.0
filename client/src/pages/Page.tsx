import { Anchor, Typography, Divider, Descriptions } from "antd";
import Emblem from "../assets/img/Emblem_of_Hanoi.svg.png";
const { Title, Paragraph, Link } = Typography;
import pages from "../utils/data";
const Page = () => {
  const data = pages[0];

  return (
    <div className="flex flex-row h-full">
      <div className=" w-36 h-full flex flex-col font-bold gap-2">
        <Anchor direction="vertical" items={data.subtitle} />
      </div>
      <div className="w-[70%] h-full">
        <Title level={3} className="text-2xl font-bold border-b">
          {data.title}
        </Title>
        {data.subtitle.map((item, index) => (
          <div key={index}>
            <Title level={4} className="text-2xl font-bold border-b">
              {item.title}
            </Title>
            <div id={item.href.replace("#", "")}>
              {data.paragraph[index].segment.map((i) => (
                <Paragraph>{i.content}</Paragraph>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="w-96 h-full mx-4 mt-8 border p-2">
        <h1 className="bg-yellow-200 h-8 mx-auto text-center text-xl font-bold">
          Hà Nội
        </h1>
        <div className="desc mx-auto w-fit flex flex-col items-center gap-2">
          <Link>Thành phố trực thuộc trung ương</Link>
          <b>Thành phố Hà Nội</b>
          <img title="Biểu trưng" src={Emblem} className="w-24 h-24" />
          <p>Biểu trưng</p>
        </div>
        <Divider />
        <Descriptions title="" column={1}>
          <Descriptions.Item
            label="Biệt danh"
            labelStyle={{ fontWeight: "bold", color: "black" }}
          >
            <ul>
              Hiện nay:
              <li className="ml-4">Hà Thành</li>
              <li className="ml-4">Thành phố vì hoà bình</li>
              <li className="ml-4">Thủ đô ngàn năm văn hiến</li>
              <li className="ml-4">Đất kinh kỳ</li>
            </ul>
          </Descriptions.Item>
          <Descriptions.Item
            label="Tên cũ"
            labelStyle={{ fontWeight: "bold", color: "black" }}
          >
            <div>
              <Link>Hà Thành </Link>,<Link>Thành phố vì hoà bình </Link>,
              <Link>Thủ đô ngàn năm văn hiến </Link>,<Link>Đất kinh kỳ </Link>
            </div>
          </Descriptions.Item>
        </Descriptions>
        <h1 className="bg-yellow-200 h-6 mx-auto text-center text-sm  font-bold">
          Hành chính
        </h1>
        <Descriptions title="" column={1}>
          <Descriptions.Item
            label="Quốc gia"
            labelStyle={{ fontWeight: "bold", color: "black" }}
          >
            Việt Nam
          </Descriptions.Item>
        </Descriptions>
      </div>
    </div>
  );
};
export default Page;

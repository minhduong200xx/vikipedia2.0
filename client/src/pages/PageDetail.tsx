import {
  Anchor,
  Typography,
  Divider,
  Descriptions,
  Result,
  Button,
} from "antd";
// import Emblem from "../assets/img/Emblem_of_Hanoi.svg.png";
const { Title, Paragraph } = Typography;
import { Link, useParams } from "react-router-dom";
import pages from "../utils/data";
const PageDetail = () => {
  const { id } = useParams();
  const data = pages.find((item) => item.id == id);
  return (
    <div className="flex flex-row h-full">
      {data ? (
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
              {data.title}
            </h1>
            <div className="desc mx-auto w-fit flex flex-col items-center gap-2">
              {data.shortDesc.map((item) => (
                <b key={item}>{item}</b>
              ))}
              <img
                title={data.images[0].title}
                src={data.images[0].src}
                className="w-24 h-24"
              />
              <p>{data.images[0].title}</p>
            </div>
            <Divider />
            <div></div>
            <Descriptions title="" column={1}>
              {data.description.items.map((item) => (
                <Descriptions.Item
                  key={item.key}
                  label={item.label}
                  labelStyle={{ fontWeight: "bold", color: "black" }}
                >
                  <ul>
                    {item.children.map((i) => (
                      <Link to={i.link}>{i.name}</Link>
                    ))}
                  </ul>
                </Descriptions.Item>
              ))}
            </Descriptions>
          </div>
        </div>
      ) : (
        <Result
          className="mx-auto"
          status="404"
          title="404"
          subTitle="Sorry, the page you visited does not exist."
          extra={<Button>Quay lại trang chủ</Button>}
        />
      )}
    </div>
  );
};
export default PageDetail;

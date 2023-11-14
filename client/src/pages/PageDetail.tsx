import {
  Anchor,
  Typography,
  Divider,
  Descriptions,
  Result,
  Button,
  Spin,
} from "antd";
import { useEffect, useState } from "react";
// import Emblem from "../assets/img/Emblem_of_Hanoi.svg.png";
const { Title, Paragraph } = Typography;
import { Link, useParams } from "react-router-dom";
import getAllPage from "../hooks/useGetAllPages";
import { subtle } from "crypto";
const PageDetail: React.FC = () => {
  const { id } = useParams();
  const pages = getAllPage();
  const data = pages.find((item) => item.id == id);
  const [loading, setLoading] = useState(true);
  const [showResult, setShowResult] = useState(false);
  const subtitle =
    data?.paragraph &&
    data?.paragraph.map((item, index: number) => ({
      key: index,
      href: `#${index}`,
      title: item.title,
    }));
  useEffect(() => {
    const delay = 1500;
    const timer = setTimeout(() => {
      setShowResult(true);
      setLoading(false);
    }, delay);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-row h-full">
      {data ? (
        <div className="flex flex-row h-full">
          <div className=" w-36 h-full flex flex-col font-bold gap-2">
            <Anchor direction="vertical" items={subtitle}></Anchor>
          </div>
          <div className="w-[70%] h-full">
            <Title level={3} className="text-2xl font-bold border-b">
              {data.title}
            </Title>
            {subtitle &&
              subtitle.map((item, index) => (
                <div key={index}>
                  <Title level={4} className="text-2xl font-bold border-b">
                    {item.title}
                  </Title>
                  <div id={subtitle && subtitle[index].href.replace("#", "")}>
                    {data.paragraph &&
                      data.paragraph[index].segment.map((i) => (
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
            <div className=" mx-auto w-fit flex flex-col items-center gap-2">
              {data.shortDesc &&
                data.shortDesc.map((item) => <b key={item}>{item}</b>)}
              {data.images &&
                data.images.map((item, index) => (
                  <div>
                    <img
                      title={item && item.name}
                      src={item && item?.thumbUrl}
                      className="w-24 h-24"
                    />
                    <p>{data.imgName && data.imgName[index]}</p>
                  </div>
                ))}
            </div>
            <Divider />
            <div></div>
            <Descriptions title="" column={1} layout={"vertical"}>
              {data.items &&
                data?.items.map((item) => (
                  <Descriptions.Item
                    key={item.label}
                    label={item.label}
                    labelStyle={{
                      fontWeight: "bold",
                      color: "black",
                    }}
                  >
                    <ul className="px-4 list-disc">
                      {item.children &&
                        item.children.map((i) => (
                          <Link to={`/pages/${i.value}`}>
                            <li>{i.value}</li>
                          </Link>
                        ))}
                    </ul>
                  </Descriptions.Item>
                ))}
            </Descriptions>
          </div>
        </div>
      ) : loading ? (
        <Spin className="mx-auto top-96" />
      ) : (
        showResult && (
          <Result
            className="mx-auto"
            status="404"
            title="404"
            subTitle="Trang bạn tìm kiếm không tồn tại"
            extra={
              <Link to={"/"}>
                <Button>Quay lại trang chủ</Button>
              </Link>
            }
          />
        )
      )}
    </div>
  );
};
export default PageDetail;

import { Card, Carousel, Empty, Result } from "antd";
import { useAuth } from "../contexts/AuthContext";
import { useEffect, useState } from "react";
import axios, { AxiosError, AxiosResponse } from "axios";
import { PageTypes } from "../types/types";
import { Link } from "react-router-dom";
import { EditOutlined, ReadOutlined } from "@ant-design/icons";
import Meta from "antd/es/card/Meta";
import Paragraph from "antd/es/typography/Paragraph";

const Suggestions: React.FC = () => {
  const { user } = useAuth();
  const [pages, setPages] = useState<PageTypes[]>([]);
  useEffect(() => {
    if (user) {
      const config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "http://localhost:8080/pages/suggestion",
        headers: {
          "Content-Type": "application/json",
        },
        data: { id: user._id },
      };
      axios
        .request(config)
        .then((response: AxiosResponse) => {
          setPages(response.data);
        })
        .catch((error: AxiosError) => {
          console.log(error);
        });
    }
  }, [user]);
  console.log(pages);

  return (
    <div hidden={user ? false : true}>
      <h1>Đề xuất cho bạn</h1>
      {pages && pages.length > 0 ? (
        <Carousel autoplay>
          {pages.map((item: PageTypes) => (
            <Card
              style={{
                width: "100%",
                backgroundColor: "transparent",
                border: "none",
              }}
              key={item.id}
              cover={
                <img
                  alt="example"
                  src={item.images[0].src}
                  className="w-full h-60 p-3 rounded"
                />
              }
              actions={[
                <Link to={`/page/${item.id}`} className="text-base font-medium">
                  <ReadOutlined key="read" />
                  <h2>Đọc tiếp</h2>
                </Link>,
                <Link to={`/page/${item.id}`} className="text-base font-medium">
                  <EditOutlined key="edit" />
                  <h2>Sửa</h2>
                </Link>,
              ]}
            >
              <Meta
                title={item.title}
                description={
                  <Paragraph ellipsis={{ rows: 6 }}>
                    {item.paragraph[0].segment[0].content + "..."}
                  </Paragraph>
                }
              />
            </Card>
          ))}
        </Carousel>
      ) : (
        <Empty description="Không có đề xuất nào cho bạn" />
      )}
    </div>
  );
};
export default Suggestions;

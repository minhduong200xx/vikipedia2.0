import { Link, useParams } from "react-router-dom";
import pages from "../utils/data";
import { EditOutlined, ReadOutlined } from "@ant-design/icons";
import Meta from "antd/es/card/Meta";
import { Button, Card, Result } from "antd";
import Paragraph from "antd/es/typography/Paragraph";

const Pages: React.FC = () => {
  const { key } = useParams();
  const data = key
    ? pages.filter((item) =>
        item.title.toLowerCase().includes(key.toLowerCase())
      )
    : pages;
  console.log(data);

  return (
    <div>
      {data.length > 0 ? (
        <div className="grid grid-cols-4 gap-8">
          {data.map((item) => (
            <Link to={`/page/${item.id}`}>
              <Card
                style={{ width: "100%", height: "fit-content" }}
                cover={
                  <img
                    alt="example"
                    src={item.images[0].src}
                    className="w-full h-60 p-3"
                  />
                }
                actions={[
                  <Link to={`/page/${item.id}`}>
                    <ReadOutlined key="read" />
                    <h2>Đọc tiếp</h2>
                  </Link>,
                  <Link to={`/page/${item.id}`}>
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
            </Link>
          ))}
        </div>
      ) : (
        <Result
          className="mx-auto"
          status="404"
          title="404"
          subTitle={`Xin lỗi chúng tôi không tìm thấy dữ liệu với từ khoá "${key}"`}
          extra={<Button>Quay lại trang chủ</Button>}
        />
      )}
    </div>
  );
};
export default Pages;

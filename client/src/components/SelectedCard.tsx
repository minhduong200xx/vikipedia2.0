import React from "react";
import { EditOutlined, ReadOutlined, StarFilled } from "@ant-design/icons";
import { Avatar, Button, Card } from "antd";
import pages, { selectedPages } from "../utils/data";
import { Link } from "react-router-dom";
import Item from "antd/es/list/Item";
//các loại thẻ hiển thị tại trang chính
const { Meta } = Card;

const SelectedCard: React.FC = () => {
  const currentDate = new Date();
  const currentSelectedCard = selectedPages.find(
    (item) =>
      currentDate > new Date(item.startDate) &&
      currentDate < new Date(item.endDate)
  );

  const content = currentSelectedCard
    ? pages.find((item) => (item.id = currentSelectedCard.pageId))
    : "";

  return (
    <div className="w-[2/3] h-fit  border shadow-lg p-2">
      <h1 className="font-semibold text-xl h-8 bg-slate-100 rounded-t-lg">
        <StarFilled className="text-yellow-600 bg-slate-300 h-8 rounded-tl-lg px-2 mr-2" />
        Bài viết chọn lọc
      </h1>
      {content && (
        <Card
          style={{ width: "100%" }}
          cover={
            <img
              alt="example"
              src={content.images[0].src}
              className="w-full h-60 p-3"
            />
          }
          actions={[
            <Link to={`/page/${content.id}`}>
              <ReadOutlined key="read" />
              <h2>Đọc tiếp</h2>
            </Link>,
            <Link to={`/page/${content.id}`}>
              <EditOutlined key="edit" />
              <h2>Sửa</h2>
            </Link>,
          ]}
        >
          <Meta
            title={content.title}
            description={content.paragraph[0].segment[0].content + "..."}
          />
        </Card>
      )}
    </div>
  );
};
export default SelectedCard;

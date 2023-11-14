import React from "react";
import { EditOutlined, ReadOutlined, StarFilled } from "@ant-design/icons";
import { Card } from "antd";
import { selectedPages } from "../utils/data";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Paragraph from "antd/es/typography/Paragraph";
import useGetAllPage from "../hooks/useGetAllPages";
import { PageTypes } from "../types/types";
//các loại thẻ hiển thị tại trang chính
const { Meta } = Card;

const SelectedCard: React.FC = () => {
  const currentDate = new Date();
  const pages = useGetAllPage();
  const currentSelectedCard = selectedPages.find(
    (item) =>
      currentDate > new Date(item.startDate) &&
      currentDate < new Date(item.endDate)
  );
  console.log(currentSelectedCard);
  const [selected, setSelected] = useState<PageTypes | undefined>();
  useEffect(() => {
    const content = currentSelectedCard
      ? pages.find((item) => item.id === currentSelectedCard.pageId)
      : "";
    if (content) setSelected(content);
  }, [pages]);

  console.log(selected);

  return (
    <div className="w-[2/3] h-fit  border shadow-lg p-2 bg-gradient-to-tl from-orange-200 to-yellow-100 rounded">
      <h1 className="font-semibold text-xl text-slate-50 h-8 bg-orange-500 rounded-t-lg">
        <StarFilled className="text-yellow-400 bg-orange-500 h-8 rounded-tl-lg px-2 mr-2" />
        Bài viết chọn lọc
      </h1>
      {selected && (
        <Card
          style={{
            width: "100%",
            backgroundColor: "transparent",
            border: "none",
          }}
          cover={
            <img
              alt="example"
              src={selected.images ? selected?.images[0]?.thumbUrl : ""}
              className="w-full h-60 p-3 rounded"
            />
          }
          actions={[
            <Link to={`/page/${selected.id}`} className="text-base font-medium">
              <ReadOutlined key="read" />
              <h2>Đọc tiếp</h2>
            </Link>,
            <Link to={`/page/${selected.id}`} className="text-base font-medium">
              <EditOutlined key="edit" />
              <h2>Sửa</h2>
            </Link>,
          ]}
        >
          <Meta
            title={selected.title}
            description={
              <Paragraph ellipsis={{ rows: 6 }}>
                {selected.paragraph &&
                  selected?.paragraph[0].segment[0].content + "..."}
              </Paragraph>
            }
          />
        </Card>
      )}
    </div>
  );
};
export default SelectedCard;

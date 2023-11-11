import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { EditOutlined, ReadOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Card, Result, Pagination } from "antd";
import Meta from "antd/es/card/Meta";
import Paragraph from "antd/es/typography/Paragraph";
import pages from "../utils/data";

const Pages: React.FC = () => {
  const { key } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [searchText, setSearchText] = useState<string>("");
  const itemsPerPage = 4;

  const filteredPages = key
    ? pages.filter((item) =>
        item.title.toLowerCase().includes(key.toLowerCase())
      )
    : pages;

  const sortPages = (
    order: "asc" | "desc",
    pagesToSort: typeof filteredPages
  ) => {
    return [...pagesToSort].sort((a, b) => {
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();
      return order === "asc"
        ? titleA.localeCompare(titleB)
        : titleB.localeCompare(titleA);
    });
  };

  const applySearchFilter = (pagesToFilter: typeof filteredPages) => {
    return pagesToFilter.filter((item) =>
      item.title.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  const sortedPages = sortPages(sortOrder, applySearchFilter(filteredPages));

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = sortedPages.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSortChange = (value: "asc" | "desc") => {
    setSortOrder(value);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    setCurrentPage(1); // Reset page when search text changes
  };

  return (
    <div className="">
      <div className="flex justify-between mb-4">
        <select
          className="border rounded-lg px-4 py-1"
          value={sortOrder}
          onChange={(e) => handleSortChange(e.target.value as "asc" | "desc")}
        >
          <option value="asc">Sắp xếp thứ A-Z</option>
          <option value="desc">Sắp xếp thứ Z-A</option>
        </select>
        <div className="flex border p-2 w-[350px] rounded-lg h-full">
          <input
            type="text"
            className="w-[95%] h-full focus:outline-none px-2"
            value={searchText}
            onChange={handleSearchChange}
            placeholder="Tìm kiếm..."
          />
          <SearchOutlined />
        </div>
      </div>
      {currentData.length > 0 ? (
        <div className="flex flex-col gap-5">
          <div className="grid grid-cols-4 gap-8">
            {currentData.map((item) => (
              <Link to={`/page/${item.id}`} key={item.id}>
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
                    <Link to={`/page/replace/${item.id}`}>
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
          <Pagination
            defaultCurrent={1}
            total={sortedPages.length}
            pageSize={itemsPerPage}
            onChange={handlePageChange}
          />
        </div>
      ) : (
        <Result
          className="mx-auto"
          status="404"
          title="404"
          subTitle={`Xin lỗi chúng tôi không tìm thấy dữ liệu với từ khoá "${
            key ? key : searchText
          }"`}
          extra={<Button>Quay lại trang chủ</Button>}
        />
      )}
    </div>
  );
};

export default Pages;

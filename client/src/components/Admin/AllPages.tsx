import React, { useState, useEffect } from "react";

import { Button, Table } from "antd";

import { PageTypes } from "../../types/types";
import useGetAllPage from "../../hooks/useGetAllPages";
import Column from "antd/es/table/Column";

import { DeleteFilled, EditFilled, EyeFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";

const AllPages: React.FC = () => {
  const data: PageTypes[] = useGetAllPage();
  const [tableData, setTableData] = useState<
    {
      id: string;
      title: string;
      content: string;
    }[]
  >();
  useEffect(() => {
    // Ensure data is not undefined before processing
    if (data) {
      const newData = data.map((item) => ({
        id: item.id,
        title: item.title,
        content: item.paragraph[0]?.segment[0]?.content || "",
      }));

      setTableData((prevTableData) => [...(prevTableData || []), ...newData]);
    }
  }, [data]);
  return (
    <div className="h-full w-full">
      <Button>Thêm bài viết</Button>
      <Table
        dataSource={tableData}
        style={{ width: "100%" }}
        pagination={{ pageSize: 4 }}
      >
        <Column title="STT" dataIndex="id" width={60} />
        <Column title="Tên bài viết" dataIndex="title" width={120} />
        <Column title="Nội dung" dataIndex="content" width={400} ellipsis />
        <Column
          title="Tuỳ chọn"
          dataIndex="id"
          width={80}
          render={(id) => (
            <div className="flex flex-row w-full gap-3">
              <Button className="w-6 h-6 flex items-center pl-1">
                <EditFilled className="text-green-500 text-center" />
              </Button>
              <Link
                to={`/page/${id}`}
                className="w-6 h-6 flex items-center pl-1"
              >
                <EyeFilled className="text-blue-500 text-center" />
              </Link>
              <Button className="w-6 h-6 flex items-center pl-1">
                <DeleteFilled className="text-red-500 text-center" />
              </Button>
            </div>
          )}
        />
      </Table>
    </div>
  );
};

export default AllPages;

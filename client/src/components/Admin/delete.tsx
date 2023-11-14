import React, { useState, useEffect } from "react";
import { Button, Table, Modal } from "antd";
import {  CheckOutlined, EyeFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";
import useGetAllPage from "../../hooks/useGetAllPages";
import { PageTypes } from "../../types/types";
import axios from "axios"; 

import Column from "antd/es/table/Column";

const DeletePages: React.FC = () => {
  const data: PageTypes[] = useGetAllPage();
  const [tableData, setTableData] = useState<
    {
      id: string;
      title: string;
      content: string;
    }[]
  >();
  const [selectedPageId, setSelectedPageId] = useState<string | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    if (data) {
      const newData = data.map((item) => ({
        id: item.id,
        title: item.title,
        content: item.paragraph[0]?.segment[0]?.content || "",
      }));

      setTableData((prevTableData) => [...(prevTableData || []), ...newData]);
    }
  }, [data]);

  const handleDeleteClick = (id: string) => {
    setSelectedPageId(id);
    showModal();
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleConfirm = () => {
    axios
      .delete(`http://localhost:8080/pages/${selectedPageId}`)
      .then((response) => {
        console.log(JSON.stringify(response.data));

        
        const updatedTableData = tableData?.filter((item) => item.id !== selectedPageId);
        setTableData(updatedTableData);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsModalVisible(false);
        setSelectedPageId(null);
      });
  };

  const handleCancel = () => {
 
    setIsModalVisible(false);
    setSelectedPageId(null);
  };

  return (
    <div className="h-full w-full">
      <select name="" id="" className="border py-2 px-3 rounded-lg mb-3">
        <option className="py-2 px-3" value="">Sắp xếp theo số lượng vote</option>
      </select>
      <Table dataSource={tableData} style={{ width: "100%" }} pagination={{ pageSize: 4 }}>
      <Column title="STT" dataIndex="id" width={60} />
        <Column title="Tên bài viết" dataIndex="title" width={120} />
        <Column title="Nội dung" dataIndex="content" width={400} ellipsis />
        <Column title="Lý do" width={30} />
        <Column
          title="Tuỳ chọn"
          dataIndex="id"
          width={80}
          render={(id) => (
            <div className="flex flex-row w-full gap-3">
              <Button className="w-6 h-6 flex items-center pl-1" onClick={() => handleDeleteClick(id)}>
                <CheckOutlined className="text-green-500 text-center" />
              </Button>
              <Link to={`/page/${id}`} className="w-6 h-6 flex items-center pl-1">
                <EyeFilled className="text-blue-500 text-center" />
              </Link>
            </div>
          )}
        />
      </Table>
      {/* Modal xác nhận */}
      <Modal title="Xác nhận Xóa" visible={isModalVisible} onOk={handleConfirm} onCancel={handleCancel}>
        <p>Bạn có chắc chắn muốn xóa trang này không?</p>
      </Modal>
    </div>
  );
};

export default DeletePages;

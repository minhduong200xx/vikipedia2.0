import React, { useState } from 'react';
import { Space, Table, } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Link}from 'react-router-dom'
interface DataType {
  key: string;
  name: string;
  content: string;
  date: string;
  reason: string;
  vote: number
}

const Delete: React.FC = () => {
  const [data, setData] = useState<DataType[]>([
    {
      key: '1',
      name: 'John Brown',
      content: 'New 1',
      date: 'New York No. 1 Lake Park',
      reason: 'Không thích',
      vote: 1
    },
    {
      key: '2',
      name: 'Jim Green',
      content: 'New 2',
      date: 'London No. 1 Lake Park',
      reason: 'Không thích',
      vote: 1
    },
    {
      key: '3',
      name: 'Joe Black',
      content: 'New 3',
      date: 'Sydney No. 1 Lake Park',
      reason: 'Không thích',
      vote: 1
    },
    {
      key: '4',
      name: 'Joe Black1',
      content: 'New 4',
      date: 'Sydney No. 1 Lake Park',
      reason: 'Không thích',
      vote: 1
    },
  ]);


  const handleDelete = (key: string) => {
    const updatedData = data.filter(item => item.key !== key);
    setData(updatedData);
  };

  const columns: ColumnsType<DataType> = [
    {
      title: 'STT',
      dataIndex: 'key',
      key: 'key',
    },
    {
      title: 'Tên bài viết',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
      ellipsis: true,
    },
    {
      title: 'Ngày yêu cầu',
      dataIndex: 'date',
      key: 'date',
      ellipsis: true,
    },
    {
      title: 'Lý do xóa bài',
      dataIndex: 'reason',
      key: 'reason',
      ellipsis: true,
    },
    {
      title: 'Vote',
      dataIndex: 'vote',
      key:'vote'
    },
    {
      title: '',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <a className='border px-2 py-1 bg-green-500 text-white rounded-lg' onClick={() => handleDelete(record.key)}>Yes</a>
          <a className='border px-2 py-1 bg-black text-white rounded-lg'>No</a>
          <a href=""><Link to="/admin/delete/view">View</Link></a>
        </Space>
      ),
    },
  ];

  return <Table columns={columns} dataSource={data} />;
};

export default Delete;

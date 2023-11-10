import React from 'react';
import { Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
  key: string;
  name: string;
  content: string;
  date: string;

}

const columns: ColumnsType<DataType> = [
    {
        title:'STT',
        dataIndex:'key',
        key:'key',
    },
    {
    title: 'Tên bài viết',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
    ellipsis: true,
    },
    {
    title: 'Nội dung sửa bài viết',
    dataIndex: 'content',
    key: 'content',
    ellipsis: true,
    },
    {
    title: 'Ngày sửa bài',
    dataIndex: 'date',
    key: 'date',
    ellipsis: true,
    },
    {
    title: '',
    key: 'action',
    render: () => (
      <Space size="middle">
        <a className='border px-2 py-1 bg-green-500 text-white rounded-lg'>Yes</a>
        <a className='border px-2 py-1 bg-black text-white rounded-lg'>No</a>
        <a>View</a>
      </Space>
    ),
    },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    content: 'New 1',
    date: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    content: 'New 2',
    date: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    content: 'New 3',
    date: 'Sydney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Joe Black1',
    content: 'New 4',
    date: 'Sydney No. 1 Lake Park',
  },
];

const Update: React.FC = () => <Table columns={columns} dataSource={data} />;

export default Update;
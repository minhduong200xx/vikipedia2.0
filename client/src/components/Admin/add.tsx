import React from 'react';
import { Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import pages from '../../utils/data'

interface DataType {
  key: string;
  name: string;
  content: string;

}

const columns: ColumnsType<DataType> = [
    {
        title:'STT',
        dataIndex:'id',
        key:'id',
    },
    {
    title: 'Tên bài viết',
    dataIndex: 'title',
    key: 'title',
    render: (text) => <a>{text}</a>,
    ellipsis: true,
    },
    {
      title: 'Nội dung bài viết',
      dataIndex: 'content',
      key: 'content',
      render: (text, record) => (
        <p>
          {record.paragraph
            .flatMap((para) => para.segment)
            .map((seg) => seg.content)
            .join(' ')}
        </p>
      ),
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

const data: DataType[] = pages;
console.log(data);


const Add: React.FC = () => <Table
columns={columns}
dataSource={data}
pagination={{
  pageSize: 9, 
}}
/>;

export default Add;
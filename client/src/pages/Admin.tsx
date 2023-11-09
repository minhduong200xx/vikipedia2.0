import React, { useState } from 'react';
import {
    FileAddOutlined,
  FileSyncOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  FileExcelOutlined 
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import Wiki from '../assets/img/wikipedia.jpg'
import { Link, Outlet,  } from "react-router-dom";
const { Header, Sider, Content } = Layout;

const Admin: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className='w-full h-screen'>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="h-16 px-3 my-5 font-bold text-xs flex flex-row items-center gap-3 text-white cursor-pointer md">
            <img src={Wiki} className="w-14 h-14" /> VIKIPEDIA ADMIN
        </div>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <FileAddOutlined />,
              label: <Link to="/admin/add">Bài viết mới</Link>,
            },
            {
              key: '2',
              icon: <FileSyncOutlined />,
              label: <Link to="/admin/update">Bài viết mới được sửa</Link>,
            },
            {
              key: '3',
              icon: <FileExcelOutlined />,
              label: <Link to="/admin/delete">Bài viết yêu cầu xóa</Link>,
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
            <Outlet/>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Admin;
import React, { useState } from "react";
import {
  FieldTimeOutlined,
  FileSearchOutlined,
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  StarOutlined,
  UserOutlined,
  ZhihuOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme, Select, Dropdown, MenuProps } from "antd";
import SearchBar from "./Search";
const { Header, Sider, Content } = Layout;
import Wiki from "../assets/img/wikipedia.jpg";
import { Footer } from "antd/es/layout/layout";
import { Option } from "antd/es/mentions";
import { Outlet, useNavigate, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import pages from "../utils/data";
import { useAuth } from "../contexts/AuthContext";

const LayoutWeb: React.FC = () => {
  const { user, logout } = useAuth();
  console.log(user);
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <Link to={"/admin"} hidden={user?.role == "admin" ? false : true}>
          Bảng điều khiển
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link to={"/"} onClick={() => logout()}>
          Đăng xuất
        </Link>
      ),
    },
  ];
  const [hidden, setHidden] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const navigate = useNavigate();
  return (
    <Layout className="h-full w-full">
      <Sider trigger={null} hidden={!hidden}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <HomeOutlined />,
              label: t("home"),
              onClick: () => navigate("/"),
            },
            {
              key: "2",
              icon: <StarOutlined />,
              label: t("selective content"),
              onClick: () => navigate("/contents/post"),
            },
            {
              key: "3",
              icon: <FileSearchOutlined />,
              label: t("random article"),
              onClick: () =>
                navigate(`/page/${Math.floor(Math.random() * pages.length)}`),
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{ padding: 0, background: colorBgContainer }}
          className="flex flex-row items-center justify-between"
        >
          <div className="flex flex-row gap-5 h-16 items-center">
            <Button
              type="text"
              icon={hidden ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setHidden(!hidden)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
            <Link
              to={"/"}
              className="h-16 font-bold text-xl flex flex-row items-center gap-3"
            >
              <img src={Wiki} className="w-8 h-8" /> VIKIPEDIA
            </Link>
            <SearchBar />
          </div>
          <div className="h-16 flex flex-row items-center gap-3 mr-10">
            <Select
              defaultValue={"vi"}
              style={{ width: 120 }}
              onChange={changeLanguage}
              suffixIcon={<ZhihuOutlined />}
            >
              <Option value={"vi"}>Tiếng Việt</Option>
              <Option value={"en"}>English</Option>
              <Option value={"jp"}>日本語</Option>
              <Option value={"zh"}>中文</Option>
              <Option value={"ko"}>한국어</Option>
            </Select>
            <div className="w-fit flex flex-row items-center gap-2">
              {user ? (
                <Dropdown.Button
                  menu={{ items }}
                  placement="bottom"
                  icon={<UserOutlined />}
                >
                  {user.username}
                </Dropdown.Button>
              ) : (
                <div className="w-fit flex flex-row items-center gap-2">
                  <Button className="bg-red-300 hover:bg-blue-400">
                    <Link to={"/register"}>{t("register")}</Link>
                  </Button>
                  <Button>
                    <Link to={"/login"}>{t("login")}</Link>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </Header>
        {/* <Watermark content="VIKIPEDIA" zIndex={1}> */}
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            width: "100%",
            background: colorBgContainer,
            zIndex: 9,
          }}
        >
          <Outlet />
        </Content>
        {/* </Watermark> */}
        <Footer
          className="mx-auto w-fit flex flex-col justify-center items-center"
          style={{
            padding: 0,
            background: colorBgContainer,
            textAlign: "center",
          }}
        >
          Vikipedia ©2023 Created by TDN
        </Footer>
      </Layout>
    </Layout>
  );
};

export default LayoutWeb;

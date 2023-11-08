import { LockOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";
const Register = () => {
  const [human, setHuman] = useState(false);
  const handleSubmit = (values: unknown) => {
    console.log(values);
    // xử lý logic đăng ký
  };
  const checkToken = (token: string | null) => {
    token ? setHuman(true) : setHuman(false);
  };
  return (
    <div className="mx-auto w-96 h-fit my-8 flex flex-col items-center">
      <h2 className="font-bold text-xl p-3">Đăng ký tài khoản</h2>
      <Form
        name="register"
        className="bg-slate-100 p-8 rounded-lg flex flex-col gap-2"
        onFinish={handleSubmit}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Tên đăng nhập"
          />
        </Form.Item>
        <Form.Item
          name="password"
          hasFeedback
          rules={[{ required: true, message: "Nhập mật khẩu!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Mật khẩu"
          />
        </Form.Item>
        <Form.Item
          name="confirm"
          hasFeedback
          dependencies={["password"]}
          rules={[
            {
              required: true,
              message: "Xác nhận lại mật khẩu",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("Mật khẩu nhập lại không khớp")
                );
              },
            }),
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Nhập lại mật khẩu"
          />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            prefix={<MailOutlined className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>
        <ReCAPTCHA
          className=""
          sitekey="6LdVipMoAAAAAKI2EvA4ks0wZsmOa5rkeba3XlI8"
          onChange={checkToken}
        />
        <Form.Item className="mx-auto py-3">
          <Button
            htmlType="submit"
            disabled={!human}
            className="shadow-md mx-2 bg-slate-100"
          >
            Đăng ký
          </Button>
          Hoặc{" "}
          <Link to={"/login"} className="font-bold">
            Đăng nhập
          </Link>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Register;

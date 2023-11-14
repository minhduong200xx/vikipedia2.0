import {
  Form,
  Input,
  Space,
  Upload,
  Button,
  Card,
  Col,
  Row,
  Select,
} from "antd";
import useGetAllPage from "../hooks/useGetAllPages";
import { PageTypes } from "../types/types";
import { useState, useEffect } from "react";

import type { RcFile, UploadProps } from "antd/es/upload";
import type { UploadFile } from "antd/es/upload/interface";
import Title from "antd/es/typography/Title";
import { CloseOutlined, PlusOutlined } from "@ant-design/icons";

import { useForm } from "antd/es/form/Form";
import TextArea from "antd/es/input/TextArea";
import { useParams } from "react-router-dom";
import { category } from "../utils/data";
import axios from "axios";
const { Option } = Select;
const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
const Editor: React.FC = () => {
  const { id } = useParams();
  const pages = useGetAllPage();
  const [tableData, setTableData] = useState<PageTypes>();
  const [fileList, setFileList] = useState<UploadFile[]>();

  const [form] = useForm();
  useEffect(() => {
    if (id) {
      const data = pages.find((item: PageTypes) => item.id === id);
      setTableData(data);
      form.setFieldsValue(data);
    } else form.setFieldsValue({ id: pages.length + 1 });
  }, [pages]);

  const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const onFinish = (values: any) => {
    const data = values;

    const config = {
      method: id ? "patch" : "post",
      maxBodyLength: Infinity,
      url: id
        ? `http://localhost:8080/pages/${id}`
        : "http://localhost:8080/pages/add",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios
      .request(config)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Form
      name={id ? "edit" : "add"}
      initialValues={tableData}
      onFinish={onFinish}
      form={form}
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
    >
      <Title>{id ? `Sửa trang` : "Thêm Trang Mới"}</Title>
      <Form.Item name="id" label="ID">
        <Input disabled />
      </Form.Item>
      <Form.Item
        name="title"
        label="Tên Trang/Bài viết"
        initialValue={tableData?.title}
      >
        <Input
          placeholder={tableData?.title || "Nhập tên Trang/Bài Viết"}
          value={tableData?.title}
        />
      </Form.Item>

      <Form.Item
        name="shortDesc"
        initialValue={tableData?.shortDesc}
        label="Mô tả ngắn"
      >
        <Input placeholder="Nhập vào mô tả ngắn" />
      </Form.Item>
      <Form.Item
        name="shortDesc"
        initialValue={tableData?.shortDesc}
        label="Mô tả ngắn"
      >
        <Input placeholder="Nhập vào mô tả ngắn" />
      </Form.Item>
      <Form.Item
        name="lang"
        initialValue={tableData?.shortDesc}
        label="Ngôn ngữ gốc"
      >
        <Select
          defaultValue="vi"
          options={[
            { value: "vi", label: "Việt Nam" },
            { value: "en", label: "Anh" },
            { value: "zh", label: "Trung Quốc " },
            { value: "ko", label: "Hàn Quốc" },
            { value: "jp", label: "Nhật Bản" },
          ]}
        ></Select>
      </Form.Item>
      <Form.Item name="category" label="Danh mục">
        <Select options={category}></Select>
      </Form.Item>
      <Form.Item
        name="images"
        label="Tải lên bộ sưu tập ảnh"
        valuePropName="fileList"
        getValueFromEvent={(e) => e.fileList}
      >
        <Upload
          action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
          listType={"picture-circle"}
          fileList={fileList}
          showUploadList={{ showPreviewIcon: false }}
          onChange={handleChange}
        >
          {uploadButton}
        </Upload>
      </Form.Item>
      <Form.Item
        name="imgsName"
        valuePropName="value"
        label="Nhập tên cho các ảnh"
        getValueFromEvent={(e) => {
          return e.target.value.split(",");
        }}
      >
        <Input placeholder='Nhập tên cho các ảnh ngăn cách bởi dấu ","' />
      </Form.Item>
      <Row>
        <Col span={4} className="flex justify-end px-2">
          Các đoạn văn:
        </Col>
        <Col span={14}>
          <Form.List name="paragraph" initialValue={tableData?.paragraph}>
            {(fields, { add, remove }) => (
              <div
                style={{ display: "flex", rowGap: 16, flexDirection: "column" }}
              >
                {fields.map((field) => (
                  <Card
                    size="small"
                    title={`Đoạn văn ${field.name + 1}`}
                    key={field.key}
                    extra={
                      <CloseOutlined
                        onClick={() => {
                          remove(field.name);
                        }}
                      />
                    }
                  >
                    <Form.Item
                      label="Tiêu đề đoạn"
                      name={[field.name, "title"]}
                    >
                      <Input />
                    </Form.Item>

                    {/* Nest Form.List */}
                    <Form.Item label="Nội dung">
                      <Form.List name={[field.name, "segment"]}>
                        {(subFields, subOpt) => (
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              rowGap: 16,
                            }}
                          >
                            {subFields.map((subField) => (
                              <Space key={subField.key}>
                                <Form.Item
                                  noStyle
                                  name={[subField.name, "content"]}
                                >
                                  <TextArea
                                    style={{ width: 650, height: 100 }}
                                  />
                                </Form.Item>
                                <CloseOutlined
                                  onClick={() => {
                                    subOpt.remove(subField.name);
                                  }}
                                />
                              </Space>
                            ))}
                            <Button
                              type="dashed"
                              size="small"
                              style={{ width: "fit-content" }}
                              onClick={() => subOpt.add()}
                              block
                            >
                              + Thêm đoạn văn nhỏ
                            </Button>
                          </div>
                        )}
                      </Form.List>
                    </Form.Item>
                  </Card>
                ))}

                <Button type="dashed" onClick={() => add()} block>
                  + Thêm đoạn văn lớn
                </Button>
              </div>
            )}
          </Form.List>
        </Col>
      </Row>
      <Form.Item
        label="Thông tin"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        style={{ padding: 12 }}
        initialValue={tableData?.description}
      >
        <Form.List name="items" initialValue={tableData?.items}>
          {(fields, { add, remove }) => (
            <div
              style={{ display: "flex", rowGap: 16, flexDirection: "column" }}
            >
              {fields.map((field) => (
                <Card
                  size="small"
                  title={`Thuộc tính ${[field.name + 1]}`}
                  key={field.key}
                  extra={
                    <CloseOutlined
                      onClick={() => {
                        remove(field.name);
                      }}
                    />
                  }
                >
                  <Form.Item label="Tên" name={[field.name, "label"]}>
                    <Input />
                  </Form.Item>

                  <Form.Item label="Giá trị">
                    <Form.List name={[field.name, "children"]}>
                      {(subFields, subOpt) => (
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            rowGap: 16,
                          }}
                        >
                          {subFields.map((subField) => (
                            <Space key={subField.key}>
                              <Form.Item
                                noStyle
                                name={[subField.name, "value"]}
                              >
                                <Input />
                              </Form.Item>

                              <CloseOutlined
                                onClick={() => {
                                  subOpt.remove(subField.name);
                                }}
                              />
                            </Space>
                          ))}
                          <Button
                            type="dashed"
                            size="small"
                            style={{ width: "fit-content" }}
                            onClick={() => subOpt.add()}
                            block
                          >
                            + Giá trị
                          </Button>
                        </div>
                      )}
                    </Form.List>
                  </Form.Item>
                </Card>
              ))}

              <Button type="dashed" onClick={() => add()} block>
                + Thêm thuộc tính
              </Button>
            </div>
          )}
        </Form.List>
      </Form.Item>
      <Form.Item>
        <Button type="default" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default Editor;

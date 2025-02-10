import React, { useState } from "react";
import { Button, Form, Input, Switch, Typography, Row, Col, message, Upload } from "antd";
import { Select } from "antd";
import { PlusOutlined } from "@ant-design/icons";

export const ProductsForm = () => {
  const { Title } = Typography;
  const [form] = Form.useForm();
  const [imagePreview, setImagePreview] = useState(null);

  const filtersOptions = [
    { label: "Electronics", value: "Electronics" },
    { label: "Clothing", value: "Clothing" },
  ];

  const handleImageUpload = (info) => {
    if (info.file.status === "done" || info.file.originFileObj) {
      const file = info.file.originFileObj || info.file;
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG files!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  };

  const onFinish = (values) => {
    console.log("Form Submitted:", values);
    message.success("Product has been submitted successfully!");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Form Submission Failed:", errorInfo);
    message.error("Please fix the errors in the form.");
  };

  return (
    <div>
      <Form
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout="vertical"
      >
        {/* Category and Brand */}
        <Row gutter={16}>
          <Col span={10}>
            <Form.Item
              label="Category"
              name="category"
              rules={[{ required: true, message: "Please select a category!" }]}
            >
              <Select
                showSearch
                placeholder="Select a Category"
                optionFilterProp="label"
                options={filtersOptions}
              />
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item
              label="Brand"
              name="brand"
              rules={[{ required: true, message: "Please select a brand!" }]}
            >
              <Select
                showSearch
                placeholder="Select a Brand"
                optionFilterProp="label"
                options={filtersOptions}
              />
            </Form.Item>
          </Col>
        </Row>

        {/* Name and Description */}
        <Row gutter={16}>
          <Col span={10}>
            <Form.Item
              label="Product Name"
              name="name"
              rules={[{ required: true, message: "Please enter a product name!" }]}
            >
              <Input placeholder="Enter product name" />
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item
              label="Description"
              name="description"
              rules={[{ required: true, message: "Please input a description!" }]}
            >
              <Input placeholder="Enter some details about it..." />
            </Form.Item>
          </Col>
        </Row>

        {/* Image Upload */}
        <Row>
          <Col span={10}>
            <Form.Item label="Product Image" name="image">
              <Upload
                listType="picture-card"
                showUploadList={false}
                beforeUpload={beforeUpload}
                onChange={handleImageUpload}
              >
                {imagePreview ? (
                  <img
                    src={imagePreview}
                    alt="Preview"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                ) : (
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <PlusOutlined />
                    <div style={{ marginTop: 8 }}>Upload</div>
                  </div>
                )}
              </Upload>
            </Form.Item>
          </Col>
        </Row>

        {/* Status and Submit */}
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="status" valuePropName="checked">
              <Switch defaultChecked />
              <span style={{ marginLeft: 8 }}>Active (Uncheck to make inactive)</span>
            </Form.Item>
          </Col>
          <Col span={5}>
            <Form.Item>
              <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
                Submit
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

import React from "react";
import { Button, Form, Input, Switch, Typography, Row, Col, message } from "antd";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

export const CategoryForm = () => {
  const { Title } = Typography;
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Form Submitted:", values);
    message.success("Category has been submitted successfully!");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Form Submission Failed:", errorInfo);
    message.error("Please fix the errors in the form.");
  };

  const onSwitchChange = (checked) => {
    console.log(`Switch toggled to: ${checked}`);
  };

  return (
    <div>
      {/* <Title className="mb-15" level={5}>
        Add/Update Category
      </Title> */}
      <Form
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout="vertical"
        // style={{ maxWidth: 800 }}
      >
        {/* Name and Description Inline */}
        <Row gutter={16}>
          <Col span={10}>
            <Form.Item
              label="Name"
              name="name"
              rules={[
                { required: true, message: "Please input a category name!" },
              ]}
            >
              <Input placeholder="Category Name" />
            </Form.Item>
          </Col>
          <Col span={14}>
            <Form.Item
              label="Description"
              name="description"
              rules={[
                { required: true, message: "Please input a description!" },
              ]}
            >
              <Input placeholder="Enter some details about it..." />
            </Form.Item>
          </Col>
        </Row>

        {/* Switch for Status */}
        <Row>
          <Col span={12}>
            <Form.Item
              name="status"
              valuePropName="checked"
              style={{ textAlign: "left" }}
            >
              <Switch defaultChecked onChange={onSwitchChange} />
              <span style={{ marginLeft: 8 }}>
                Active (Uncheck to make this category inactive)
              </span>
            </Form.Item>
          </Col>
        </Row>

        {/* Submit Button */}
        <Row>
          <Col span={5}>
            <Form.Item style={{ textAlign: "right" }}>
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

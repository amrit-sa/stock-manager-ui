import React, { useState } from "react";
import { Button, Form, Input, Switch, Typography, Row, Col, message } from "antd";
import { Select } from "antd";
import TextArea from "antd/es/input/TextArea";

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

export const BrandsForm = () => {
    const { Title } = Typography;
    const [selectedCategory, setSelectedCategory] = useState("");

    const handleCategoryFilter = (value) => {
        if (value === 'all') {
            setSelectedCategory(null);
        } else {
            setSelectedCategory(value);
        }
        // Apply filtering logic here
    };
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


    const onChange = (value) => {
        console.log(`selected ${value}`);
    };
    const onSearch = (value) => {
        console.log('search:', value);
    };


    const filtersOptions = [
        { label: "Electronics", value: "Electronics" },
        { label: "Clothing", value: "Clothing" },
    ];

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
                            label="Category"
                            name="category"
                            rules={[
                                { required: true, message: "Please select a category!" },
                            ]}
                        >
                            <Select
                                showSearch
                                placeholder="Select a Category first"
                                optionFilterProp="label"
                                onChange={onChange}
                                onSearch={onSearch}
                                options={filtersOptions}
                            />
                        </Form.Item>
                    </Col>

                </Row>

                <Row gutter={16}>
                    <Col span={10}>
                        <Form.Item
                            label="Brand Name"
                            name="name"
                            rules={[
                                { required: true, message: "Please enter a Name!" },
                            ]}
                        >
                            <Input placeholder="Enter brand name" />
                        </Form.Item>
                    </Col>
                    <Col span={10}>
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

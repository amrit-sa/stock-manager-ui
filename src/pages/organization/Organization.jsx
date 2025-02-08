import React, { useState } from "react";
import {
    Card,
    Col,
    Row,
    Typography,
    Input,
    Button,
    Modal,
    Form,
    message,
    Space,
} from "antd";
import { LinkOutlined, PlusOutlined, RightOutlined } from "@ant-design/icons";
import card from "../../assets/images/info-card-1.jpg";
import SimpleTable from "../../components/SimpleTable";

const Organization = () => {
    const { Title } = Typography;

    // State for Modal visibility
    const [isModalVisible, setIsModalVisible] = useState(false);

    // State for organization ID input
    const [orgId, setOrgId] = useState("");

    const handleLinkOrganization = () => {
        if (!orgId) {
            message.error("Please enter an Organization ID!");
            return;
        }
        // Replace this with your linking logic
        message.success(`Linked to Organization ID: ${orgId}`);
        setOrgId("");
    };

    const handleCreateOrganization = (values) => {
        // Replace this with your organization creation logic
        message.success(`Organization "${values.name}" created successfully!`);
        setIsModalVisible(false);
    };

    return (
        <div>
            <Row gutter={[24, 0]}>
                <Col xs={24} className="mb-24">
                    <Card bordered={false} className="circlebox h-full">
                        <Title className="font-regular text-muted pt-0" level={5}>
                            Link your organization or create a new one
                        </Title>
                        <Row gutter={[16, 16]}>
                            {/* Input and Link Section */}
                            <Col span={16}>

                                <Space.Compact
                                    style={{
                                        width: '100%',
                                    }}
                                >
                                    <Input
                                        placeholder="Enter Organization ID"
                                        value={orgId}
                                        onChange={(e) => setOrgId(e.target.value)}
                                    />
                                    <Button
                                        type="primary"
                                        icon={<LinkOutlined />}
                                        onClick={handleLinkOrganization}
                                    >
                                        Link
                                    </Button>
                                </Space.Compact>
                            </Col>
                            {/* Create Organization Button */}
                            <Col span={8}>
                                <Button
                                    type="primary"
                                    icon={<PlusOutlined />}
                                    onClick={() => setIsModalVisible(true)}
                                >
                                    Create Organization
                                </Button>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>

            <Row gutter={[24, 0]}>
                <Col xs={24} className="mb-24">
                    <Card bordered={false} className="circlebox h-full">

                        <Title className="font-regular text-muted pt-0" level={4}>
                            Organization Name
                        </Title>
                    </Card>
                </Col>
                <Col xs={24} className="mb-24">
                    <Card bordered={false} className="circlebox h-full">
                        <Title className="font-regular text-muted pt-0" level={5}>
                            Categories
                        </Title>
                        <SimpleTable 
                            // columns={categoriesColumn} 
                            // data={categoriesData} 
                        />
                    </Card>
                </Col>
            </Row>

            {/* Modal for Creating Organization */}
            <Modal
                title="Create Organization"
                visible={isModalVisible}
                onCancel={() => setIsModalVisible(false)}
                footer={null}
            >
                <Form layout="vertical" onFinish={handleCreateOrganization}>
                    <Form.Item
                        label="Organization Name"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: "Please input the organization name!",
                            },
                        ]}
                    >
                        <Input placeholder="Enter organization name" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" block>
                            Create
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default Organization;

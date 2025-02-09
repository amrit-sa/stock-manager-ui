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
    Descriptions
} from "antd";
import { LinkOutlined, PlusOutlined, RightOutlined } from "@ant-design/icons";
import card from "../../assets/images/info-card-1.jpg";
import SimpleTable from "../../components/SimpleTable";
import Categories from "../category";
import Paragraph from "antd/lib/typography/Paragraph";



// const items = [
//     {
//       key: '1',
//       label: 'UserName',
//       children: 'Zhou Maomao',
//     },
//     {
//       key: '2',
//       label: 'Telephone',
//       children: '1810000000',
//     },
//     {
//       key: '3',
//       label: 'Live',
//       children: 'Hangzhou, Zhejiang',
//     },
//     {
//       key: '4',
//       label: 'Remark',
//       children: 'empty',
//     },
//     {
//       key: '5',
//       label: 'Address',
//       children: 'No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China',
//     },
//   ];

const Organization = () => {
    const { Title, Text } = Typography;

    // State for Modal visibility
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [categoryShow, setCategoryShow] = useState(false);

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
                    <Card bordered={false} className="criclebox h-full">
                        <Row gutter>
                            <Col
                                xs={24}
                                md={12}
                                sm={24}
                                lg={12}
                                xl={14}
                                className="mobile-24"
                            >
                                <div className="h-full col-content p-20">
                                    <div className="ant-muse">
                                        <Text>Your Organization:</Text>
                                        <Title level={5}>ABC Enterprices</Title>
                                        <Paragraph className="lastweek mb-36">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        </Paragraph>
                                    </div>
                                    <div className="card-footer">
                                        {!categoryShow && <a className="icon-move-right" href="#" onClick={() => setCategoryShow((prev) => !prev)}>
                                            See Categories
                                            {<RightOutlined />}
                                        </a>}
                                    </div>
                                </div>
                            </Col>
                            <Col
                                xs={24}
                                md={12}
                                sm={24}
                                lg={12}
                                xl={10}
                                className="col-img"
                            >
                                <div className="ant-cret text-right">
                                    <img src={card} alt="" className="border10" />
                                </div>
                            </Col>

                            <Col xs={24}>
                                {categoryShow && <Categories />}
                            </Col>
                        </Row>
                    </Card>
                </Col>



                


            </Row>

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

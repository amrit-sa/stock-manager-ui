import React, { useState } from "react";
import {
    Card,
    Col,
    Row,
    Typography,
    message,
} from "antd";
import SimpleTable from "../../components/SimpleTable";
import CustomTable from "../../components/CustomTable";

const Categories = () => {
    const { Title } = Typography;

    // State for Modal visibility
    const [isModalVisible, setIsModalVisible] = useState(false);

    // State for organization ID input
    const [orgId, setOrgId] = useState("");

    const columns = [
        {
            title: "Category ID",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "Category Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Created At",
            dataIndex: "createdAt",
            key: "createdAt",
        },
    ];

    const data = [
        { id: "1", name: "Electronics", createdAt: "2023-01-10" },
        { id: "2", name: "Clothing", createdAt: "2023-02-15" },
    ];

    return (
        <div>


            <Row gutter={[24, 0]}>

                <Col xs={24} className="mb-24">
                    {/* <Card bordered={false} className="circlebox h-full">
                        <Title className="font-regular text-muted pt-0" level={5}>
                            Categories
                        </Title>
                        <SimpleTable 
                            // columns={categoriesColumn} 
                            // data={categoriesData} 
                        />

                    </Card> */}
                        <CustomTable columns={columns} data={data} loading={false} title={'Categories'} />
                </Col>
            </Row>





        </div>
    );
};

export default Categories;

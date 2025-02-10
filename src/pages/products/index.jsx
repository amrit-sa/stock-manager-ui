import React, { useState } from "react";
import {
    Card,
    Col,
    Row,
    Typography,
    Button,
} from "antd";
import { withCard } from "../../hoc/withCardWrapper";
import ProductsTable from "./ProductsTable";
import { ProductsForm } from "./ProductsForm";

const Products = () => {
    const { Title } = Typography;

    const [isModalVisible, setIsModalVisible] = useState(false);
    const FormWithCard = withCard(ProductsForm);

    const handleCloseFormEvent = () => setIsModalVisible(false)
    return (
        <div>
            <Row gutter={[24, 0]}>
                <Col xs={24} className="mb-2">
                    <Card bordered={false} className="circlebox h-full">
                        {isModalVisible ?
                            <FormWithCard
                                title={"Add/Update Products"}
                                onClose={handleCloseFormEvent}
                            />
                            : <>
                                <Col span={4} offset={21} className="mb-2">
                                    <Button
                                        type="primary"
                                        htmlType="button"
                                        onClick={() => setIsModalVisible(true)}
                                    >
                                        Add a new Products
                                    </Button>
                                </Col>
                                <ProductsTable />
                            </>
                        }
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Products;

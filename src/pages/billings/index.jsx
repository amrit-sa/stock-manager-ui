import React, { useState } from "react";
import { Table, InputNumber, Typography, Button, Row, Col, Card } from "antd";
import BillingTable from "./BillingTable";
import Checkout from "./checkout";

const Billings = ({ onCheckout }) => {
    const { Title } = Typography;

    const [products, setProducts] = useState([
        { key: "1", name: "Product A", remainingQty: 50, originalPrice: 100, quantity: 0, price: 0 },
        { key: "2", name: "Product B", remainingQty: 30, originalPrice: 200, quantity: 0, price: 0 },
    ]);
    const [checkoutViewState, setCheckoutViewState] = useState(false);

    const handleUpdate = (key, field, value) => {
        setProducts((prev) =>
            prev.map((product) => (product.key === key ? { ...product, [field]: value } : product))
        );
    };



    return (
        <div>
            <Row gutter={[24, 0]}>
                <Col xs={24} className="mb-2">
                    <Card bordered={false} className="circlebox h-full">
                        {checkoutViewState ? <Checkout products={products} onSubmit={()=>{}} /> : <>
                            <Title level={4}>Products Listing</Title>
                            <BillingTable />
                            {/* <Table columns={columns} dataSource={products} pagination={false} /> */}
                            <Row justify="end" style={{ marginTop: 20 }}>
                                <Col>
                                    <Button type="primary" onClick={() => setCheckoutViewState(true)}>
                                        Checkout
                                    </Button>
                                </Col>
                            </Row>
                        </>
                        }
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Billings;
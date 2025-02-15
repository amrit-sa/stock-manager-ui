import React, { useState } from "react";
import { Table, InputNumber, Typography, Button, Row, Col } from "antd";

const Checkout = ({ products, onSubmit }) => {
  const { Title } = Typography;

  const [discount, setDiscount] = useState(0);

  const totalSum = products.reduce((sum, product) => sum + product.quantity * product.price, 0);
  const finalPayable = totalSum - discount;

  const columns = [
    { title: "Product", dataIndex: "name", key: "name" },
    { title: "Quantity", dataIndex: "quantity", key: "quantity" },
    { title: "Price", dataIndex: "price", key: "price" },
    { title: "Total", key: "total", render: (_, record) => record.quantity * record.price },
  ];

  return (
    <div>
      <Title level={4}>Checkout</Title>
      <Table columns={columns} dataSource={products} pagination={false} />
      <Row style={{ marginTop: 20 }}>
        <Col span={12}>
          <InputNumber
            min={0}
            value={discount}
            onChange={setDiscount}
            placeholder="Discount"
          />
        </Col>
        <Col span={12} style={{ textAlign: "right" }}>
          <div>
            Total: ₹{totalSum}
            <br />
            Payable: ₹{finalPayable}
          </div>
        </Col>
      </Row>
      <Row justify="end" style={{ marginTop: 20 }}>
        <Col>
          <Button type="primary" onClick={onSubmit}>
            Submit
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Checkout;

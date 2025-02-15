import React from "react";
import { Card, Col, Row, Typography, Table, Button, Select } from "antd";
import { BarChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts"; // For charts
import LineChart from "./ProductsChart";
import EChart from "./salesChart";


const Reports = () => {
    const { Title } = Typography;

    // Sample data for charts
    const chartData = [
        { name: "Day 1", Sales: 400, Products: 240 },
        { name: "Day 2", Sales: 300, Products: 221 },
        { name: "Day 3", Sales: 200, Products: 229 },
        { name: "Day 4", Sales: 278, Products: 200 },
        { name: "Day 5", Sales: 189, Products: 218 },
        { name: "Day 6", Sales: 239, Products: 250 },
        { name: "Day 7", Sales: 349, Products: 300 },
    ];

    // Sample data for table
    const tableData = [
        { key: "1", billId: "B001", date: "2025-02-01", totalAmount: 500 },
        { key: "2", billId: "B002", date: "2025-02-02", totalAmount: 700 },
        { key: "3", billId: "B003", date: "2025-02-03", totalAmount: 450 },
    ];

    const tableColumns = [
        { title: "Bill ID", dataIndex: "billId", key: "billId" },
        { title: "Date", dataIndex: "date", key: "date" },
        { title: "Total Amount", dataIndex: "totalAmount", key: "totalAmount" },
        {
            title: "Actions",
            key: "actions",
            render: (_, record) => (
                <div>
                    <Button type="link">View</Button>
                    <Button type="link" danger>
                        Edit
                    </Button>
                </div>
            ),
        },
    ];

    return (
        <div>
            {/* Charts Section */}
            <Row gutter={[24, 24]}>
                <Col xs={24}>
                    <Card bordered={false}>
                        {/* <Title level={4}>Sales and Product Reports</Title> */}
                        <Select defaultValue="7 Days" style={{ width: 120, marginBottom: 20 }}>
                            <Select.Option value="7 Days">7 Days</Select.Option>
                            <Select.Option value="30 Days">30 Days</Select.Option>
                            <Select.Option value="All Time">All Time</Select.Option>
                        </Select>
                        {/* <Row gutter={24}>
              <Col xs={24} lg={12}>
                <BarChart width={400} height={300} data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Sales" fill="#8884d8" />
                </BarChart>
              </Col>
              <Col xs={24} lg={12}>
                <LineChart width={400} height={300} data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="Products" stroke="#82ca9d" />
                </LineChart>
              </Col>
            </Row> */}

                        <Row gutter={[24, 0]}>
                            <Col xs={24} sm={24} md={12} lg={12} xl={10}>
                                {/* <Card bordered={false} className="circlebox h-full"> */}
                                    <EChart />
                                {/* </Card> */}
                            </Col>
                            <Col xs={24} sm={24} md={12} lg={12} xl={14}>
                                {/* <Card bordered={false} className="circlebox h-full"> */}
                                    <LineChart />
                                {/* </Card> */}
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>

            {/* Bills Table */}
            <Row gutter={[24, 24]} style={{ marginTop: 20 }}>
                <Col xs={24}>
                    <Card bordered={false}>
                        <Title level={5}>Previous seven (7) Bills</Title>
                        <Table columns={tableColumns} dataSource={tableData} pagination={false} />
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Reports;

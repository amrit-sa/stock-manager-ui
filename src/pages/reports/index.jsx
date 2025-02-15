import React from "react";
import { Card, Col, Row, Typography, Table, Button, Select, List } from "antd";
import { BarChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts"; // For charts
import LineChart from "./ProductsChart";
import EChart from "./salesChart";


const download = [
    <svg
      width="15"
      height="15"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      key="0"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 17C3 16.4477 3.44772 16 4 16H16C16.5523 16 17 16.4477 17 17C17 17.5523 16.5523 18 16 18H4C3.44772 18 3 17.5523 3 17ZM6.29289 9.29289C6.68342 8.90237 7.31658 8.90237 7.70711 9.29289L9 10.5858L9 3C9 2.44772 9.44771 2 10 2C10.5523 2 11 2.44771 11 3L11 10.5858L12.2929 9.29289C12.6834 8.90237 13.3166 8.90237 13.7071 9.29289C14.0976 9.68342 14.0976 10.3166 13.7071 10.7071L10.7071 13.7071C10.5196 13.8946 10.2652 14 10 14C9.73478 14 9.48043 13.8946 9.29289 13.7071L6.29289 10.7071C5.90237 10.3166 5.90237 9.68342 6.29289 9.29289Z"
        fill="#111827"
      ></path>
    </svg>,
  ];

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
    const invoiceData = [
        {
            date: "March, 01, 2021",
            invoiceId: "#MS-415646",
            amount: "$180",
          },
          {
            date: "February, 12, 2021",
            invoiceId: "#RV-126749",
            amount: "$250",
          },
          {
            date: "April, 05, 2020",
            invoiceId: "#FB-212562",
            amount: "$550",
          },
          {
            date: "June, 25, 2019",
            invoiceId: "#QW-103578",
            amount: "$400",
          },
          {
            date: "March, 03, 2019",
            invoiceId: "#AR-803481",
            amount: "$700",
          },
        // { key: "1", billId: "B001", date: "2025-02-01", totalAmount: 500 },
        // { key: "2", billId: "B002", date: "2025-02-02", totalAmount: 700 },
        // { key: "3", billId: "B003", date: "2025-02-03", totalAmount: 450 },
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
                    <Card bordered={false}
                        title={[<h6 className="font-semibold m-0">Invoices</h6>]}
                        extra={[
                            <Button type="primary">
                                <span>EXPORT ALL</span>
                            </Button>,
                        ]}
                    >
                        <List
                            itemLayout="horizontal"
                            className="invoice-list"
                            dataSource={invoiceData}
                            renderItem={(item) => (
                                <List.Item
                                    actions={[<Button type="link">{download} PDF</Button>]}
                                >
                                    <List.Item.Meta
                                        title={item.date}
                                        description={item.invoiceId}
                                    />
                                    <div className="amount">{item.amount}</div>
                                </List.Item>
                            )}
                        />

                        {/* <Title level={5}>Invoices</Title> */}
                        {/* <Table columns={tableColumns} dataSource={tableData} pagination={false} /> */}
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Reports;

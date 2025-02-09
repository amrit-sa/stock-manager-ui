import React from "react";
import { Card, Col, Row, Table, Typography } from "antd";

const { Title } = Typography;
const CustomTable = ({ columns, data, loading, filters, title }) => {
    return (
        <>
            <Row gutter={[24, 0]}>
                <Col xs={24} className="mb-24">
                    <Card bordered={false} className="circlebox h-full">
                        <Title className="font-regular text-muted pt-0" level={5}>
                            {title}
                        </Title>
                        {filters && (
                            <div style={{ marginBottom: 16 }}>
                                {filters.map((filter, index) => (
                                    <filter.component
                                        key={index}
                                        {...filter.props}
                                        style={{ marginRight: 8 }}
                                    />
                                ))}
                            </div>
                        )}
                        <Table
                            columns={columns}
                            dataSource={data}
                            loading={loading}
                            rowKey="id"
                            // bordered
                            pagination={{ pageSize: 10 }}
                        />
                    </Card>
                </Col>
            </Row>
        </>

    );
};

export default CustomTable;

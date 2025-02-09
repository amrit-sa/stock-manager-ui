
// create an hoc which take a component and wraps it around Card from Ant
import React from "react";
import { Card, Col, Row, Typography, Button } from "antd";
import { CloseCircleOutlined, CloseOutlined } from "@ant-design/icons";

const { Title } = Typography;

export const withCard = (WrappedComponent) => {
    return ({ title, onClose, ...props }) => {
        return (
            <Card
                // title={
                //     <Row>
                //         <Col span={16}>
                //             <Title level={3}>{title || ''}</Title>
                //         </Col>
                //         <Col span={8} align="right">
                //             {props.children}
                //         </Col>
                //     </Row>
                // }
                title={title}
                extra={
                    onClose && (
                        <span
                            onClick={onClose}
                            style={{
                                color: '#f5222d',
                                cursor: 'pointer',
                                fontSize: '16px'  // Adjust size as needed
                            }}
                        >
                            <CloseOutlined />
                        </span>
                    )
                }
                bordered={false}

            >
                <WrappedComponent {...props} />
            </Card>
        );
    };
};
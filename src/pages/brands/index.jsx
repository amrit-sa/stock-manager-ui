import React, { useState } from "react";
import {
    Card,
    Col,
    Row,
    Typography,
    Button,
} from "antd";
import { withCard } from "../../hoc/withCardWrapper";
import BrandsTable from "./BrandsTabls";
import { BrandsForm } from "./BrandsForm";

const Categories = () => {
    const { Title } = Typography;

    const [isModalVisible, setIsModalVisible] = useState(false);
    const FormWithCard = withCard(BrandsForm);

    const handleCloseFormEvent = () => setIsModalVisible(false)
    return (
        <div>
            <Row gutter={[24, 0]}>
                <Col xs={24} className="mb-2">
                    <Card bordered={false} className="circlebox h-full">
                        {isModalVisible ?
                            <FormWithCard
                                title={"Add/Update Brand"}
                                onClose={handleCloseFormEvent}
                            />
                            : <>
                                <Col span={4} offset={21} className="mb-2">
                                    <Button
                                        type="primary"
                                        htmlType="button"
                                        onClick={() => setIsModalVisible(true)}
                                    >
                                        Add a new Brand
                                    </Button>
                                </Col>
                                <BrandsTable />
                            </>
                        }
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Categories;

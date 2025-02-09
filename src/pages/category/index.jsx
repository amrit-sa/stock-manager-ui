import React, { useState } from "react";
import {
    Card,
    Col,
    Row,
    Typography,
    Button,
} from "antd";
import { CategoryTable } from "./CategoryTable";
import { CategoryForm } from "./CategoryForm";
import { withCard } from "../../hoc/withCardWrapper";

const Categories = () => {
    const { Title } = Typography;

    const [isModalVisible, setIsModalVisible] = useState(false);
    const FormWithCard = withCard(CategoryForm);

    const handleCloseFormEvent = () => setIsModalVisible(false)
    return (
        <div>
            <Row gutter={[24, 0]}>
                <Col xs={24} className="mb-2">
                    <Card bordered={false} className="circlebox h-full">
                        {isModalVisible ?
                            <FormWithCard
                                title={"Add/Update Category"}
                                onClose={handleCloseFormEvent}
                            />
                            : <>
                                <Col span={4} offset={21} className="mb-2">
                                    <Button
                                        type="primary"
                                        htmlType="button"
                                        onClick={() => setIsModalVisible(true)}
                                    >
                                        Add a new Category
                                    </Button>
                                </Col>
                                <CategoryTable />
                            </>
                        }
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Categories;

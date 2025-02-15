import React, { useState } from "react";
import CustomTable from "../../components/CustomTable";
import { Avatar, Button, InputNumber, Select, Space, Tooltip, Typography } from "antd";
import ava1 from "../../assets/images/logo-shopify.svg";
import { DeleteOutlined, DollarOutlined, EditOutlined, ShoppingCartOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;
const ProductsTable = () => {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedBrand, setSelectedBrand] = useState("");

    const handleCategoryFilter = (value) => {
        if (value === 'all') {
            setSelectedCategory(null);
        } else {
            setSelectedCategory(value);
        }
        setSelectedBrand(""); // Reset brand when category changes
    };

    const handleBrandFilter = (value) => {
        if (value === 'all') {
            setSelectedBrand(null);
        } else {
            setSelectedBrand(value);
        }
    };

    const columns = [
        {
            title: "Product ID",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "Product",
            dataIndex: "product",
            key: "product",
            render: (_, product) => (
                <>
                  <Avatar.Group>
                    <Avatar
                      className="shape-avatar"
                      shape="square"
                      size={40}
                      src={product?.img || null}
                    ></Avatar>
                    <div className="avatar-info">
                      <Title level={5}>{product.name || ''}</Title>
                      <p>{product.description || ''}</p>
                    </div>
                  </Avatar.Group>{" "}
                </>
              )
        },
        {
            title: "Brand",
            dataIndex: "brand",
            key: "brand",
        },
        {
            title: "Category",
            dataIndex: "category",
            key: "category",
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            render: (status) => status? 'Active' : 'Inactive',
        },
        {
            title: "Quantity",
            dataIndex: "quantity",
            key: "quantity",
            render: (_, product) => (
              <InputNumber
                min={0}
                defaultValue={product.quantity || 0}
                addonBefore={<ShoppingCartOutlined />}
                placeholder="Set quantity"
                onChange={(value) => {
                  console.log("Updated Quantity:", value);
                }}
              />
            ),
          },
          
          // Price Column
          {
            title: "Price",
            dataIndex: "price",
            key: "price",
            render: (_, product) => (
              <InputNumber
                min={0}
                defaultValue={product.price || 0}
                addonBefore={<DollarOutlined />}
                placeholder="Set price"
                onChange={(value) => {
                  console.log("Updated Price:", value);
                }}
              />
            ),
          },
          {
            title: "Actions",
            dataIndex: "action",
            key: "action",
            render: (_, record) => (
              <Space size="middle">
                {/* Edit Button */}
                <Tooltip title="Edit">
                  <Button
                    type="primary"
                    icon={<EditOutlined />}
                    onClick={() => handleEdit(record)}
                  />
                </Tooltip>
                
                {/* Delete Button */}
                <Tooltip title="Delete">
                  <Button
                    type="primary"
                    danger
                    icon={<DeleteOutlined />}
                    onClick={() => handleDelete(record)}
                  />
                </Tooltip>
              </Space>
            ),
          },
    ];

    const data = [
        { id: "1", name: "iPhone 13", img: ava1, price: "$799", category: "Electronics", brand: "Apple", description:"Sample product description..." },
        { id: "2", name: "Air Max", img: ava1, price: "$150", category: "Clothing", brand: "Nike", description:"Sample product description..." },
    ].filter(
        (item) =>
            (!selectedCategory || item.category === selectedCategory) &&
            (!selectedBrand || item.brand === selectedBrand)
    );

    const filters = [
        {
            component: Select,
            props: {
                placeholder: "Select Category",
                options: [
                    { label: "All", value: "all" },
                    { label: "Electronics", value: "Electronics" },
                    { label: "Clothing", value: "Clothing" },
                ],
                onChange: handleCategoryFilter,
                style: { width: 200 },
            },
        },
        {
            component: Select,
            props: {
                placeholder: "Select Brand",
                options: [
                    { label: "All", value: "all" },
                    { label: "Apple", value: "Apple" },
                    { label: "Nike", value: "Nike" },
                ],
                onChange: handleBrandFilter,
                style: { width: 200 },
                disabled: !selectedCategory, // Disable brand filter until a category is selected
            },
        },
    ];

    return <CustomTable
        columns={columns}
        data={data}
        filters={filters}
        title={'Products'}
    />;
};

export default ProductsTable;

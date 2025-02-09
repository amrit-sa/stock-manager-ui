import React, { useState } from "react";
import CustomTable from "../../components/CustomTable";
import { Select } from "antd";

const Products = () => {
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
            title: "Product Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Price",
            dataIndex: "price",
            key: "price",
        },
    ];

    const data = [
        { id: "1", name: "iPhone 13", price: "$799", category: "Electronics", brand: "Apple" },
        { id: "2", name: "Air Max", price: "$150", category: "Clothing", brand: "Nike" },
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

export default Products;

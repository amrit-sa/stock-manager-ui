import React, { useState } from "react";
import CustomTable from "../../components/CustomTable";
import { Select } from "antd";

const Brands = () => {
    const [selectedCategory, setSelectedCategory] = useState("");

    const handleCategoryFilter = (value) => {
        if (value === 'all') {
            setSelectedCategory(null);
        } else {
            setSelectedCategory(value);
        }
        // Apply filtering logic here
    };

    const columns = [
        {
            title: "Brand ID",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "Brand Name",
            dataIndex: "name",
            key: "name",
        },
    ];

    const data = [
        { id: "1", name: "Apple", category: "Electronics" },
        { id: "2", name: "Nike", category: "Clothing" },
    ].filter((item) => !selectedCategory || item.category === selectedCategory);

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
    ];

    return <CustomTable
        columns={columns}
        data={data}
        filters={filters}
        title={'Brands'}
    />;
};

export default Brands;

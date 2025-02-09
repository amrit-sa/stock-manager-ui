import React, { useState } from "react";
import CustomTable from "../../components/CustomTable";
import { Select } from "antd";

const BrandsTable = () => {
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
        {
            title: "Category",
            dataIndex: "category",
            key: "category",
        },
        {
            title: "Description",
            dataIndex: "description",
            key: "description",
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            render: (status) => status? 'Active' : 'Inactive',
        },
        {
            title: "",
            dataIndex: "action",
            key: "action",
            render: (_, record) => (
                <span>
                    <a href="#">Edit</a>
                    <span className="ant-divider" />
                    <a href="#">Delete</a>
                </span>
            )
        },
    ];

    const data = [
        { id: "1", name: "Apple", category: "Electronics",description: "Jlkj fds sdflk  jsdkfj js fkjslf sf.", status:true },
        { id: "2", name: "T-Shirt", category: "Clothing",description: "Jlkj fds sdflk  jsdkfj js fkjslf sf.", status:false },
        { id: "3", name: "Ertiga", category: "Vehicle",description: "Jlkj fds sdflk  jsdkfj js fkjslf sf.", status:true },
        { id: "4", name: "Innova", category: "Vehicle",description: "Jlkj fds sdflk  jsdkfj js fkjslf sf.", status:true },
        { id: "5", name: "Pant", category: "Clothing",description: "Jlkj fds sdflk  jsdkfj js fkjslf sf.", status:false },
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
                    { label: "Vehicle", value: "Vehicle" },
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

export default BrandsTable;

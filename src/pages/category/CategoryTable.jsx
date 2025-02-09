import CustomTable from "../../components/CustomTable";

export const CategoryTable = () => {

    const columns = [
        {
            title: "Category ID",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "Category Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Created At",
            dataIndex: "createdAt",
            key: "createdAt",
        },
    ];

    const data = [
        { id: "1", name: "Electronics", createdAt: "2023-01-10" },
        { id: "2", name: "Clothing", createdAt: "2023-02-15" },
    ];

    return (
        <CustomTable columns={columns} data={data} loading={false} title={'Categories'} />
    );
};
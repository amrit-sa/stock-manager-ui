import React from 'react';
import { Space, Table, Tag, Avatar, Typography } from 'antd';


const { Title } = Typography;
const columns = [
    {
        title: 'Category type',
        dataIndex: 'category',
        key: 'category',
        render: (_, record) => <>
            <Avatar.Group>
                <Avatar
                    className="shape-avatar"
                    shape="square"
                    size={40}
                    src={record?.img || ''}
                ></Avatar>
                <div className="avatar-info">
                    <Title level={5}>{record?.name}</Title>
                    <p>{record?.description}</p>
                </div>
            </Avatar.Group>{" "}
            {/* <div>
                <img src={record?.img || ''} height={50} />
                <span>{record?.name || ''}</span>
                <h6>{record?.description || ''}</h6>
            </div> */}
        </>,
    },
    {
        title: 'Status',
        key: 'status',
        dataIndex: 'status',
        render: (_, { status }) => (
            <>
                <Tag color={status === false ? 'geekblue' : 'green'} >
                    {status === false ? 'Inactive' : 'Active'}
                </Tag>
            </>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a>Edit</a>
                <a>Delete</a>
            </Space>
        ),
    },
];
const data = [
    {
        key: '1',
        name: 'Category one 1',
        description: 'Category one description details...',
        status: true,
        img: 'https://i.pravatar.cc/180?img=1',
    },
    {
        key: '2',
        name: 'Category two 2',
        description: 'Category 2 description details...',
        status: false,
        img: 'https://i.pravatar.cc/180?img=2',
    },
];

const SimpleTable = ({ columnProp = columns, dataProp = data }) => <Table columns={columnProp} dataSource={dataProp} />;
export default SimpleTable;
import React from 'react'
import { Table } from 'antd';

const columns = [
    {
        title: 'Type',
        dataIndex: 'type',
        key: `type`,
        render: text => <p>{text}</p>,
    },
    {
        title: 'Setup',
        dataIndex: 'setup',
        key: 'setup',
        render: text => <p>{text}</p>,
    },
    {
        title: 'Punch Line',
        dataIndex: 'punchline',
        key: 'punchline',
        render: text => <p>{text}</p>,
    },
]

export const DataSection = ({data}) => {

    return (
        <div className="table-container">
            <Table 
                columns={columns} 
                dataSource={data} 
                style={{width:"70%"}}
                rowKey="_id" 
            />
        </div>
    )
}
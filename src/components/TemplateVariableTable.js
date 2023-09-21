// components/TemplateVariableTable.js
import React, { useState } from 'react';
import { Table, Button, Space } from 'antd';
import { v4 as uuidv4 } from 'uuid';

const TemplateVariableTable = ({ columns, data, onSubmit }) => {
    const [dataSource, setDataSource] = useState(data);

    // useEffect(()=>{
    //     setDataSource(data);
    // }, [data]);

    console.log(data)
    console.log(columns)
    const handleAddRow = () => {
        const newRow = { key: uuidv4(), ...columns.reduce((acc, col) => ({ ...acc, [col.dataIndex]: '' }), {}) };
        setDataSource([...dataSource, newRow]);
    };

    const handleSave = () => { onSubmit(dataSource) };

    const handleDelete = (key) => {
        const updatedData = dataSource.filter((row) => row.key !== key);
        setDataSource(updatedData)
    };

    const handleCellChange = (key, dataIndex, value) => {
        const updatedData = dataSource.map((row) => {
            if (row.key === key) {
                return { ...row, [dataIndex]: value };
            }
            return row;
        });
        setDataSource(updatedData);
    };

    const variableColumns = columns.map((col) => {
        if (col.dataIndex === 'action') {
            return {
                ...col,
                render: (_, record) => (
                    <Space size="small">
                        <a onClick={() => handleDelete(record.key)}>Delete</a>
                    </Space>
                ),
            };
        }
        return {
            ...col,
            onCell: (record) => ({
                record,
                inputType: 'text',
                dataIndex: col.dataIndex,
                title: col.title,
                handleCellChange,
            }),
        };
    });

    return (
        <div>
            <Table bordered dataSource={dataSource} columns={variableColumns} pagination={false} rowKey="key" />
            <Button onClick={handleAddRow} type='primary' style={{ margin: '16px 0' }}>AddRow</Button>
            <Button onClick={handleSave} type='primary'>Save</Button>
        </div>
    );
}

export default TemplateVariableTable;
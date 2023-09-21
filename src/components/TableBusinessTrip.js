// components/TableBusinessTrip.js
import React from 'react';
import TemplateVariableTable from './TemplateVariableTable';

const TableBusinessTrip = () => {
    const columns = [
        {title: 'Duration', dataIndex: 'duration', key: 'duration', editable: true},
        {title: 'Name', dataIndex: 'name', key: 'name', editable: true},
        {title: 'Action', dataIndex: 'action', key: 'action',}
    ];

    const data = [
        {key: '1', duration: '8/28-8/30', name: 'LX'},
        {key: '2', duration: '8/28-8/30', name: 'LX'},
    ];

    const onSubmit = (editedData) => {
        console.log("Submiting Business Trip Data: ", editedData)
    };

    return (
        <div>
            <TemplateVariableTable columns={columns} data={data} onSubmit={onSubmit} />
        </div>
    );
};

export default TableBusinessTrip;
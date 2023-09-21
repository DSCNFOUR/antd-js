// components/TableVacationPlan.js
import React from 'react';
import TemplateVariableTable from './TemplateVariableTable';

const TableVacationPlan = () => {
    const columns = [
        {title: 'Duration', dataIndex: 'duration', key: 'duration', editable: true,},
        {title: 'Name', dataIndex: 'name', key: 'name', editable: true,},
        {title: 'Action', dataIndex: 'action', key: 'action'}
    ];

    const data = [
        { key: '1', duration: '8/23 -8/29', name: 'CJJ' },
        { key: '2', duration: '9/18 -9/19', name: 'YJJ & LXY' },
    ];

    const onSubmit = (editedData) => {
        console.log('Submitting Vacation Plan Table: ', editedData)
    };

    return (
        <div>
            <TemplateVariableTable columns={columns} data={data} onSubmit={onSubmit} />
        </div>
    );
};

export default TableVacationPlan;
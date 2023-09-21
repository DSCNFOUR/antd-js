// components/TableDuty.js
import React from 'react';
import TemplateVariableTable from './TemplateVariableTable';
const TableDuty = () => {
    const columns = [
        { title: 'Group', dataIndex: 'group', key: 'group', editable: true, },
        { title: 'Responsible', dataIndex: 'responsible', key: 'responsible', },
        { title: 'Action', dataIndex: 'action', key: 'action'}
    ];

    const data = [
        { key: '1', group: 'Support Center', responsible: 'L2-1 SJ' },
        { key: '2', group: 'Backend', responsible: 'DK' }
    ];

    const onSubmit = (editedData) => {
        console.log('Submitting data for Duty:', editedData);
    };

    return (
        <div>
            <TemplateVariableTable columns={columns} data={data} onSubmit={onSubmit} />
        </div>
    );
}

export default TableDuty;
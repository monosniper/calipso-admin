import React from 'react';
import {BooleanField, Datagrid, DateField, ExportButton, List, TextField, TextInput, TopToolbar} from "react-admin";
import SortableDatagridHeader from "../SortableDatagridHeader";

const ListActions = (props) => (
    <TopToolbar>
        <ExportButton/>
    </TopToolbar>
);

const ListFilters = [
    <TextInput label="Search" source="q" alwaysOn />,
];

const PricingList = (props) => {
    const headerCells = [
        {id: 'id', label: 'ID'},
        {id: 'title', label: 'Название'},
        {id: 'amount', label: 'Цена'},
        {id: 'isRegular', label: 'Регулярный платеж'},
    ];

    return (
        <>
            <List {...props}  sort={{ field: 'created_at', order: 'DESC' }} actions={<ListActions />} filters={ListFilters}>
                <Datagrid rowClick={'edit'} {...props} header={<SortableDatagridHeader headerCells={headerCells} />}>
                    <TextField source={'id'} />
                    <TextField source={'title'} />
                    <TextField source={'amount'} />
                    <BooleanField source={'isRegular'} />
                </Datagrid>
            </List>
        </>
    );
};

export default PricingList;
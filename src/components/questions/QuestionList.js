import React from 'react';
import {Datagrid, DateField, ExportButton, List, TextField, TextInput, TopToolbar} from "react-admin";
import SortableDatagridHeader from "../SortableDatagridHeader";

const ListActions = (props) => (
    <TopToolbar>
        <ExportButton/>
    </TopToolbar>
);

const ListFilters = [
    <TextInput label="Search" source="q" alwaysOn />,
];

const QuestionList = (props) => {
    const headerCells = [
        {id: 'id', label: 'ID'},
        {id: 'title', label: 'Вопрос'},
        {id: 'answer', label: 'Ответ'},
        {id: 'created_at', label: 'Дата создания'},
    ];

    return (
        <>
            <List {...props}  sort={{ field: 'created_at', order: 'DESC' }} actions={<ListActions />} filters={ListFilters}>
                <Datagrid rowClick={'edit'} {...props} header={<SortableDatagridHeader headerCells={headerCells} />}>
                    <TextField source={'id'} />
                    <TextField source={'title'} />
                    <TextField source={'answer'} />
                    <DateField source={'created_at'} />
                </Datagrid>
            </List>
        </>
    );
};

export default QuestionList;
import React, {useMemo} from 'react';
import {
    CreateButton,
    Datagrid,
    DateField, EmailField,
    ExportButton,
    FunctionField,
    List,
    TextField,
    TextInput,
    TopToolbar
} from "react-admin";
import SortableDatagridHeader from "../SortableDatagridHeader";
import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";
import {linkToRecord, useResourceContext} from "ra-core";

const ListActions = (props) => (
    <TopToolbar>
        <ExportButton/>
    </TopToolbar>
);

const ListFilters = [
    <TextInput label="Search" source="q" alwaysOn />,
];

const FeedbackAnswer = ({ record }) => {
    return (
        <div>
            {record.answer}
        </div>
    );
};

const stopPropagation = e => e.stopPropagation();

const AnswerButton = ({ record }) => {
    return (
        <Button
            component={Link}
            to={`feedbacks/${record.id}/answer`}
            onClick={stopPropagation}
        >Ответить</Button>
    );
}

const FeedBackList = (props) => {
    const headerCells = [
        {id: 'id', label: 'ID'},
        {id: 'theme', label: 'Тема'},
        {id: 'email', label: 'E-mail'},
        {id: 'created_at', label: 'Дата создания'},
        {id: null, label: '', sortable: false},
    ];

    return (
        <>
            <List {...props}  sort={{ field: 'created_at', order: 'DESC' }} actions={<ListActions />} filters={ListFilters}>
                <Datagrid expand={<FeedbackAnswer />} rowClick={'show'} {...props} header={<SortableDatagridHeader headerCells={headerCells} />}>
                    <TextField source={'id'} />
                    <TextField source={'theme'} />
                    <EmailField source={'email'} />
                    <DateField source={'created_at'} />
                    <AnswerButton />
                </Datagrid>
            </List>
        </>
    );
};

export default FeedBackList;
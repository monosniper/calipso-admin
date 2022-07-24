import {
    CreateButton,
    Datagrid,
    DatagridBody,
    EditButton,
    ExportButton,
    List,
    TextField,
    TextInput,
    TopToolbar
} from "react-admin";
import SortableDatagridHeader from "../../SortableDatagridHeader";
import React from "react";
import {Checkbox, TableCell, TableRow} from "@material-ui/core";

const FreelanceCategoryListActions = (props) => (
    <TopToolbar>
        <CreateButton/>
        <ExportButton/>
    </TopToolbar>
);

const FreelanceCategoryListFilters = [
    <TextInput label="Search" source="q" alwaysOn />,
];

const FreelanceCategoryListRow = ({ record, resource, id, onToggleItem, children, selected, selectable, basePath }) => {

    return (
        <TableRow key={id}>
            {/* first column: selection checkbox */}
            <TableCell padding="none">
                <Checkbox
                    checked={selected}
                    onClick={event => onToggleItem(id, event)}
                />
            </TableCell>
            <TableCell>
                <TextField textAlign={'center'} source={'id'} record={record}/>
            </TableCell>
            <TableCell>
                <TextField source={'name'} record={record}/>
            </TableCell>
            <TableCell>
                <TextField source={'freelancers_count'} record={record}/>
            </TableCell>
            <TableCell>
                <TextField source={'items_count'} record={record}/>
            </TableCell>
            <TableCell>
                <EditButton  record={record}/>
            </TableCell>
        </TableRow>
    );
}

const FreelanceCategoryListBody = props => <DatagridBody {...props} row={<FreelanceCategoryListRow />} />;

export const FreelanceCategoryList = (props) => {
    const headerCells = [
        {id: 'id', label: 'ID'},
        {id: 'name', label: 'Название'},
        {id: 'freelancers_count', label: 'Кол-во специалистов', sortable: false},
        {id: 'items_count', label: 'Кол-во заказов', sortable: false},
    ];

    return (
        <List {...props} sort={{ field: 'created_at', order: 'DESC' }} actions={<FreelanceCategoryListActions />} filters={FreelanceCategoryListFilters}>
            <Datagrid {...props} rowClick="show" header={<SortableDatagridHeader headerCells={headerCells} />}>
                <TextField source={'id'} />
                <TextField source={'name'} />
                <TextField source={'freelancers_count'} />
                <TextField source={'items_count'} />
            </Datagrid>
        </List>
    );
};
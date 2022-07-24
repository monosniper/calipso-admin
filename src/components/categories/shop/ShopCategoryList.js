import {
    CreateButton, Datagrid,
    DatagridBody,
    EditButton,
    ExportButton,
    FunctionField,
    List,
    TextField,
    TextInput,
    TopToolbar
} from "react-admin";
import {Checkbox, TableCell, TableRow} from "@material-ui/core";
import SortableDatagridHeader from "../../SortableDatagridHeader";
import React from "react";

const ShopCategoryListActions = (props) => (
    <TopToolbar>
        <CreateButton/>
        <ExportButton/>
    </TopToolbar>
);

const ShopCategoryListFilters = [
    <TextInput label="Search" source="q" alwaysOn />,
];

const ShopCategoryListRow = ({ record, resource, id, onToggleItem, children, selected, selectable, basePath }) => {
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
                <TextField source={'items_count'} record={record}/>
            </TableCell>
            <TableCell>
                $<TextField source={'sales_sum'} record={record}/>
            </TableCell>
            <TableCell>
                <EditButton record={record} />
            </TableCell>
        </TableRow>
    );
}

const ShopCategoryListBody = props => <DatagridBody {...props} row={<ShopCategoryListRow />} />;

export const ShopCategoryList = ({ classes, ...props }) => {
    const headerCells = [
        {id: 'id', label: 'ID'},
        {id: 'name', label: 'Название'},
        {id: 'items_count', label: 'Кол-во лотов', sortable: false},
        {id: 'sales_sum', label: 'Сумма продаж', sortable: false},
    ];

    return (
        <>
            <List {...props}  sort={{ field: 'created_at', order: 'DESC' }} actions={<ShopCategoryListActions />} filters={ShopCategoryListFilters}>
                <Datagrid rowClick={'show'} {...props} header={<SortableDatagridHeader headerCells={headerCells} />}>
                    <TextField source={'id'} />
                    <TextField source={'name'} />
                    <TextField source={'items_count'} />
                    <FunctionField source={'sales_sum'} render={record => `$${record.sales_sum}`}/>
                </Datagrid>
            </List>
        </>
    );
};
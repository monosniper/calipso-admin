import React from 'react';
import {
    BooleanField,
    ChipField,
    CreateButton,
    Datagrid,
    DatagridBody,
    DateField,
    EmailField, ExportButton,
    FilterButton, FunctionField,
    Link,
    List,
    TextField, TextInput,
    TopToolbar
} from "react-admin";
import SortableDatagridHeader from "../SortableDatagridHeader";
import {Checkbox, TableCell, TableRow} from "@material-ui/core";
import UserField from "../users/UserField";
import LinkField from "../LinkField";
import RolesField from "../users/RolesField";
import TagsField from "../TagsField";

const ListActions = (props) => (
    <TopToolbar>
        <FilterButton/>
        <CreateButton/>
        <ExportButton/>
    </TopToolbar>
);

const filters = [
    <TextInput label="Search" source="q" alwaysOn />,
];

const OrderDescription = ({ record }) => (
    <div dangerouslySetInnerHTML={{ __html: record.description }} />
);

const OrdersList = (props) => {
    const headerCells = [
        {id: 'id', label: 'ID'},
        {id: 'title', label: 'Заголовок'},
        {id: 'offers_count', label: 'Кол-во откликов'},
        {id: 'category', label: 'Категория'},
        {id: 'user', label: 'Автор'},
        {id: 'freelancer', label: 'Исполнитель'},
        {id: 'price', label: 'Цена'},
        {id: 'isSafe', label: 'Сейф'},
        {id: 'isUrgent', label: 'Срочный'},
        {id: 'status', label: 'Статус', sortable: false},
        {id: 'created_at', label: 'Дата создания'},
    ];

    return (
        <List {...props} sort={{ field: 'created_at', order: 'DESC' }} actions={<ListActions />} filters={filters}>
            <Datagrid expand={<OrderDescription />} rowClick={'edit'} header={<SortableDatagridHeader headerCells={headerCells} isExpanded={true} />}>
                <TextField source="id" />
                <LinkField link={'orders'} getId={(record) => record.id} isToSite={true} field={<TextField source="title" />} />
                <TextField source="offers_count" />
                <LinkField link={'categories/freelance'} getId={(record) => record.category_id} field={<TextField source="category.name" />} />
                <LinkField link={'users'} getId={(record) => record.user_id} isShow={true} field={<UserField {...props} getUser={(record) => record.user} />} />
                <LinkField link={'users'} getId={(record) => record.freelancer ? record.freelancer_id : null} isShow={true} field={<UserField {...props} getUser={(record) => record.freelancer} />} />
                <FunctionField source={'price'} render={record => `$${record.price}`}/>
                <BooleanField source={'isSafe'} label={'Сейф'}/>
                <BooleanField source={'isUrgent'} label={'Срочный'}/>
                <ChipField source={'status'} />
                <DateField source="created_at" />
            </Datagrid>
        </List>
    );
};

export default OrdersList;
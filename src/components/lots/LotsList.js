import React from 'react';
import {
    BooleanField,
    ChipField,
    CreateButton,
    Datagrid,
    DateField,
    ExportButton,
    FilterButton, FunctionField,
    List,
    TextField, TextInput,
    TopToolbar
} from "react-admin";
import SortableDatagridHeader from "../SortableDatagridHeader";
import UserField from "../users/UserField";
import LinkField from "../LinkField";
import { InputLabel } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import {makeStyles} from "@material-ui/core/styles";

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

const useStyles = makeStyles((theme) => ({
    root: {
        width: 'fit-content',
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: theme.shape.borderRadius,
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.secondary,
        '& span': {
            margin: theme.spacing(1),
        },
        '& hr': {
            margin: theme.spacing(0, 0.5),
        },
    },
}));

const LotDescription = ({ record }) => {
    const classes = useStyles();

    return (
        <div>
            <InputLabel style={{margin: '.5rem 0'}}>Характеристики</InputLabel>
            {record.properties.map(prop => (
                <Grid container alignItems="center" className={classes.root}>
                    <span>{prop.key}</span>
                    <Divider orientation="vertical" flexItem />
                    <span>{prop.value}</span>
                </Grid>
            ))}
            <InputLabel style={{margin: '.5rem 0'}}>Описание</InputLabel>
            <div dangerouslySetInnerHTML={{ __html: record.description }} />
        </div>
    )
};

const LotsList = (props) => {
    const headerCells = [
        {id: 'id', label: 'ID'},
        {id: 'title', label: 'Заголовок'},
        {id: 'price', label: 'Цена'},
        {id: 'status', label: 'Статус'},
        {id: 'isPremium', label: 'Премиум'},
        {id: 'views', label: 'Просмотры'},
        {id: 'user', label: 'Автор'},
        {id: 'category', label: 'Категория'},
        {id: 'created_at', label: 'Дата создания'},
    ];

    return (
        <List {...props} sort={{ field: 'created_at', order: 'DESC' }} actions={<ListActions />} filters={filters}>
            <Datagrid rowClick='edit' expand={<LotDescription />} header={<SortableDatagridHeader headerCells={headerCells} isExpanded={true} />}>
                <TextField source="id" />
                <LinkField link={'lots'} getId={(record) => record.id} isShow={true} field={<TextField source="title" />}/>
                <FunctionField source={'price'} render={record => record.discount_price ? (<span>${record.discount_price} <strike>${record.price}</strike></span>) : `$${record.price}`}/>
                <ChipField source={'status'} />
                <BooleanField source={'isPremium'} />
                <TextField source={'views'} />
                <LinkField link={'users'} getId={(record) => record.user.id} isShow={true} field={<UserField {...props} getUser={(record) => record.user} />} />
                <LinkField link={'categories/shop'} getId={(record) => record.category.id} isShow={true} field={<TextField {...props} source="category.name" />} />
                <DateField source="created_at" />
            </Datagrid>
        </List>
    );
};

export default LotsList;
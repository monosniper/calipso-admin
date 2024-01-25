import React from 'react';
import {
    ChipField,
    CreateButton,
    Datagrid,
    DateField,
    ExportButton,
    List,
    TextField,
    TopToolbar
} from "react-admin";
import SortableDatagridHeader from "../SortableDatagridHeader";
import UserField from "../users/UserField";
import LinkField from "../LinkField";

const ListActions = (props) => (
    <TopToolbar>
        <CreateButton/>
        <ExportButton/>
    </TopToolbar>
);


const ReviewText = ({ record }) => {
    return (
        <div>
            <div dangerouslySetInnerHTML={{ __html: record.content }} />
        </div>
    );
};

function ReviewableField({ record, props }) {
    if(record.reviewable_type === 'App/Models/User') {
        return <LinkField
            link={'users'}
            getId={(record) => record.reviewable_id}
            isShow={true}
            field={<UserField {...props} getUser={(record) => record.user} />}
        />;
    } else {
        return <LinkField
            link={'lots'}
            getId={(record) => record.reviewable_id}
            isShow={true}
            field={<TextField {...props} source={'id'} />}
        />;
    }
}

const ReviewsList = (props) => {
    const headerCells = [
        {id: 'id', label: 'ID'},
        {id: 'title', label: 'Заголовок'},
        {id: 'rating', label: 'Рейтинг'},
        {id: 'reviewable_type', label: 'Цель'},
        {id: 'user', label: 'Автор'},
        {id: 'created_at', label: 'Дата создания'},
    ];

    return (
        <List {...props} sort={{ field: 'created_at', order: 'DESC' }} actions={<ListActions />}>
            <Datagrid rowClick='edit' expand={<ReviewText />} header={<SortableDatagridHeader headerCells={headerCells} isExpanded={true} />}>
                <TextField source="id" />
                <TextField source={'title'} />
                <ChipField source={'rating'} />
                <ReviewableField props={props} />
                <LinkField link={'users'} getId={(record) => record.user.id} isShow={true} field={<UserField {...props} getUser={(record) => record.user} />} />
                <DateField source="created_at" />
            </Datagrid>
        </List>
    );
};

export default ReviewsList;
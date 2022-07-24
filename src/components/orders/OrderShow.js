import {
    ReferenceField,
    Show,
    SimpleShowLayout,
    ReferenceManyField,
    EditButton,
    BooleanField,
    Datagrid,
    TextField,
    NumberField,
    Tab,
    TabbedShowLayout, RichTextField, DateField, FunctionField, ChipField, useRecordContext,
} from "react-admin";
import React from "react";
import LinkField from "../LinkField";
import UserField from "../users/UserField";
import {InputLabel} from "@material-ui/core";
import TagsField from "../TagsField";

export const OrderShow = (props) => {
    return <Show {...props}>
        <TabbedShowLayout>
            <Tab label="Общие">
                <TextField label="Id" source="id" />
                <TextField source='title' label={'Заголовок'} />
                <InputLabel style={{margin: '.5rem 0'}}>Категория</InputLabel>
                <LinkField
                    link={'categories/freelance'}
                    getId={(record) => record.category.id}
                    field={<TextField source="category.name" />}
                />
                <InputLabel style={{margin: '.5rem 0'}}>Автор</InputLabel>
                <LinkField
                    link={'users'}
                    getId={(record) => record.user.id}
                    isShow={true}
                    field={<UserField {...props}
                        getUser={(record) => record.user}
                    />}
                />
                <InputLabel style={{margin: '.5rem 0'}}>Фрилансер</InputLabel>
                <LinkField
                    link={'users'}
                    getId={(record) => record.freelancer ? record.freelancer.id : null}
                    isShow={true}
                    field={<UserField {...props}
                        getUser={(record) => record.freelancer}
                    />}
                />
                <BooleanField source={'isUrgent'} label={'Срочный'}/>
                <BooleanField source={'isSafe'} label={'Сейф'}/>
                <FunctionField source={'price'} render={record => `$${record.price}`} label={'Цена'}/>
                <TextField source='days' label={'Кол-во дней'} />
                <InputLabel style={{margin: '.5rem 0'}}>Теги</InputLabel>
                <TagsField source={'tags'} />
                <ChipField source={'status'} label={'Статус'} />
                <DateField source="created_at" label={'Дата создания'} />
            </Tab>
            <Tab label="Описание" path="description">
                <RichTextField source="description" addLabel={false} />
            </Tab>
            <Tab label={"Отклики"} path="offers">
                <ReferenceManyField reference="offers" target="order_id" addLabel={false}>
                    <Datagrid>
                        <TextField source='days' label={'Кол-во дней'} />
                        <FunctionField source={'price'} render={record => `$${record.price}`} label={'Цена'}/>
                        <TextField source="content" label={'Отклик'} />
                        <LinkField
                            label={'Автор'}
                            link={'users'}
                            getId={(record) => record.user.id}
                            isShow={true}
                            field={<UserField {...props}
                                getUser={(record) => record.user}
                            />}
                        />
                        <BooleanField source="isSafe" label={'Сейф'} />
                        <DateField source="created_at" />
                    </Datagrid>
                </ReferenceManyField>
            </Tab>
        </TabbedShowLayout>
    </Show>;
}
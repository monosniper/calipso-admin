import {ReferenceField, Show, SimpleShowLayout, TextField, TopToolbar, EditButton, DeleteButton} from "react-admin";
import React from "react";
import {CategoryTitle} from "../CategoryTitle";

const CategoryActions = ({ basePath, data, resource }) => {
    return <TopToolbar>
        <EditButton basePath={basePath} record={data} />
        <DeleteButton basePath={basePath} record={data} />
    </TopToolbar>;
}

export const FreelanceCategoryShow = (props) => {
    return <Show title={<CategoryTitle />} actions={<CategoryActions />} {...props}>
        <SimpleShowLayout>
            <TextField source='name' />
            <ReferenceField label="Родительская категория" link='show' source="parent_id" reference="categories/freelance">
                <TextField source="name" />
            </ReferenceField>
        </SimpleShowLayout>
    </Show>;
}
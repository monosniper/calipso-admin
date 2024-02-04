import React from "react";
import {AutocompleteInput, Create, required, SimpleForm, ReferenceInput, TextInput} from "react-admin";

export const ShopCategoryCreate = (props) => {
    return (
        <Create title="Создать категорию" {...props}>
            <SimpleForm>
                <TextInput validate={required()} label='Название' source="name" />
                <ReferenceInput label="Родитель" source="parent_id" reference="categories/shop">
                    <AutocompleteInput optionText="name" optionValue="id" />
                </ReferenceInput>
            </SimpleForm>
        </Create>
    );
};
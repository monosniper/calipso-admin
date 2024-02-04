import React from "react";
import {AutocompleteInput, ReferenceInput, Create, required, SimpleForm, TextInput} from "react-admin";

export const FreelanceCategoryCreate = (props) => {
    return (
        <Create title="Создать категорию" {...props}>
            <SimpleForm>
                <TextInput validate={required()} label='Название' source="name" />
                <ReferenceInput label="Родитель" source="parent_id" reference="categories/freelance">
                    <AutocompleteInput optionText="name" optionValue="id" />
                </ReferenceInput>
            </SimpleForm>
        </Create>
    );
}

import React, {useEffect, useState} from "react";
import {useGetList} from "ra-core";
import {AutocompleteInput, Edit, required, SimpleForm, TextInput} from "react-admin";

export const FreelanceCategoryEdit = (props) => {
    const [categories, setCategories] = useState([]);
    const { data, loading, error } = useGetList('categories/freelance');

    useEffect(() => {
        !loading && setCategories(Object.entries(data).map(item => {
            return {
                id: item[1].id,
                name: item[1].name,
            }
        }).filter(item => parseInt(props.id) !== item.id))
    }, [data]);

    return (
        <Edit {...props}>
            <SimpleForm>
                <TextInput validate={required()} label='Название' source="name" />
                <AutocompleteInput label='Родитель' choices={categories} source="parent_id" />
            </SimpleForm>
        </Edit>
    );
}
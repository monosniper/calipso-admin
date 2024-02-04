import React, {useEffect, useState} from "react";
import {useGetList} from "ra-core";
import {AutocompleteInput, Create, required, SimpleForm, TextInput} from "react-admin";

export const ShopCategoryCreate = (props) => {
    const [categories, setCategories] = useState([]);
    const { data, loading, error } = useGetList('categories/shop', {filter: false});

    useEffect(() => {
        !loading && setCategories(Object.entries(data).map(item => {
            return {
                id: item[1].id,
                name: item[1].name,
            }
        }))
    }, [data]);

    return (
        <Create title="Создать категорию" {...props}>
            <SimpleForm>
                <TextInput validate={required()} label='Название' source="name" />
                <AutocompleteInput label='Родитель' choices={categories} source="parent_id" />
            </SimpleForm>
        </Create>
    );
};
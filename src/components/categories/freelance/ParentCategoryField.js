import {useGetOne, useRecordContext} from "react-admin";
import React from "react";

export const ParentCategoryField = (props) => {
    const record = useRecordContext(props);
    const {data, loading, error} = useGetOne('categories/freelance', record.parent_id);

    if(error) return '';

    return loading ? '' : (
        <span>{data.name}</span>
    );
}
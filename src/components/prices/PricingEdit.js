import React from 'react';
import {BooleanInput, Edit, NumberInput, required, SimpleForm, TextInput} from "react-admin";

const PricingEdit = (props) => {
    return (
        <Edit title="Изменить цену" {...props}>
            <SimpleForm>
                <TextInput validate={required()} label='Название' source="title" />
                <NumberInput validate={required()} label='Стоимость' source="amount" />
                <BooleanInput label='Регулярный платеж' source="isRegular" />
            </SimpleForm>
        </Edit>
    );
};

export default PricingEdit;
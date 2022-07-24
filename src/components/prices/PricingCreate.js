import React from 'react';
import {BooleanInput, Create, NumberInput, required, SimpleForm, TextInput} from "react-admin";

const PricingCreate = (props) => {
    return (
        <Create title="Создать цену" {...props}>
            <SimpleForm>
                <TextInput validate={required()} label='Название' source="title" />
                <NumberInput validate={required()} label='Стоимость' source="amount" />
                <BooleanInput label='Регулярный платеж' source="isRegular" />
            </SimpleForm>
        </Create>
    );
};

export default PricingCreate;
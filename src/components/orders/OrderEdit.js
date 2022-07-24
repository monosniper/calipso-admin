import * as React from 'react';
import {
    DateInput,
    Edit,
    EditProps,
    NullableBooleanInput,
    TextInput,
    PasswordInput,
    Toolbar,
    useTranslate,
    FormWithRedirect,
    required,
    email,
    FieldProps,
    AutocompleteArrayInput,
    SimpleForm,
    NumberInput,
    ReferenceInput,
    SelectInput,
    BooleanInput,
    ReferenceArrayInput, SelectArrayInput, FileInput, FileField,
} from 'react-admin';
import { Box, Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import UserField from "../users/UserField";
import RichTextInput from "ra-input-rich-text";

export const styles = {
    first_name: { display: 'inline-block' },
    last_name: { display: 'inline-block', marginLeft: 32 },
    min: { maxWidth: 544 },
    email: { width: 544 },
    address: { maxWidth: 544 },
    field: { width: 256 },
    zipcode: { display: 'inline-block' },
    city: { display: 'inline-block', marginLeft: 32 },
    comment: {
        maxWidth: '20em',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
    password: { display: 'inline-block' },
    password_confirmation: { display: 'inline-block', marginLeft: 32 },
};

const useStyles = makeStyles(styles);

const OrderEdit = (props) => {
    const classes = useStyles(props);
    const translate = useTranslate();

    return (
        <Edit {...props}>
            <SimpleForm>
                <TextInput
                    source="title" label='Название'
                    fullWidth
                    validate={requiredValidate}
                    helperText={false}
                    formClassName={classes.min}
                    id='title'
                />
                <RichTextInput label='Описание' validate={requiredValidate} source="description" formClassName={classes.min} />
                <div style={{display: "flex", width: '100%', gap: 32}}>
                    <NumberInput
                        source="price"
                        label='Цена'
                        validate={requiredValidate}
                        formClassName={classes.field}
                    />
                    <NumberInput
                        source="days"
                        label='Кол-во дней'
                        validate={requiredValidate}
                        formClassName={classes.field}
                    />
                </div>
                <div style={{display: "flex", width: '100%', gap: 32}}>
                    <ReferenceInput label="Категория" source="category_id" reference="categories/freelance" validate={requiredValidate}>
                        <SelectInput optionText="name" optionValue="id" />
                    </ReferenceInput>
                    <BooleanInput label="Срочный заказ" source="isUrgent" />
                    <BooleanInput label="Работа через сейф" source="isSafe" />
                </div>
                <ReferenceArrayInput filter={{for: 'orders'}} source="tag_ids" reference="tags">
                    <SelectArrayInput optionText="name"  />
                </ReferenceArrayInput>
                <FileInput multiple={true} source="order_files" label="Файлы" formClassName={classes.min}>
                    <FileField source="original_url" src="original_url" title="file_name" />
                </FileInput>
            </SimpleForm>
        </Edit>
    );
};

const requiredValidate = [required()];

export default OrderEdit;
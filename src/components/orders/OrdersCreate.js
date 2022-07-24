import * as React from 'react';
import {
    Create,
    SimpleForm,
    TextInput,
    useTranslate,
    BooleanInput,
    PasswordInput,
    FileField,
    SelectInput,
    required,
    FileInput,
    ReferenceInput,
    SelectArrayInput,
    ReferenceArrayInput,
    email,
    AutocompleteArrayInput, NumberInput,
} from 'react-admin';
import { Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import RichTextInput from 'ra-input-rich-text';
import { withStyles } from '@material-ui/core/styles';
import {useGetList} from "ra-core";
import {useEffect, useState} from "react";

export const styles = {
    title: { maxWidth: 544 },
    description: { maxWidth: 544},
    first_name: { display: 'inline-block' },
    last_name: { display: 'inline-block', marginLeft: 32 },
    email: { width: 544 },
    min: { maxWidth: 544 },
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

export const validatePasswords = ({password,password_confirmation,}) => {
    const errors = {};

    if (password && password_confirmation && password !== password_confirmation) {
        errors.password_confirmation = [
            'resources.users.errors.password_mismatch',
        ];
    }

    return errors;
};

const OrderCreate = withStyles({ card: { overflow: 'initial' } })(props => {
    const classes = useStyles(props);
    const translate = useTranslate();
    const {data, loading, error} = useGetList('tags', false,false, {for: 'orders'});
    const [tags, setTags] = useState([]);

    useEffect(() => {
        if(!loading && !error) setTags(Object.values(data));
    }, [data]);

    return (
        <Create {...props}>
            <SimpleForm
                // validate={validatePasswords}
            >
                <TextInput
                    source="title" label='Название'
                    fullWidth
                    validate={requiredValidate}
                    helperText={false}
                    formClassName={classes.title}
                    id='title'
                />
                <RichTextInput label='Описание' validate={requiredValidate} source="description" formClassName={classes.description} />
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
                <AutocompleteArrayInput
                    onCreate={() => {
                        const newTagName = prompt('Новый тег:');
                        const newTag = { id: newTagName.toLowerCase(), name: newTagName };
                        setTags([...tags, newTag]);
                        return newTag;
                    }}
                    filter={{for: 'orders'}}
                    source="tag_names"
                    choices={tags}
                >
                    <SelectArrayInput optionText="name" optionValue='name' />
                </AutocompleteArrayInput >
                <FileInput formClassName={classes.min} multiple={true} source="order_files" label="Файлы">
                    <FileField source="src" title="title" />
                </FileInput>
            </SimpleForm>
        </Create>
    );
});

const requiredValidate = [required()];

const SectionTitle = ({ label }) => {
    const translate = useTranslate();

    return (
        <Typography variant="h6" gutterBottom>
            {translate(label)}
        </Typography>
    );
};

const Separator = () => <Box pt="1em" />;

export default OrderCreate;
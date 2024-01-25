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
    RadioButtonGroupInput,
    ReferenceArrayInput,
    ImageInput,
    ImageField,
    email,
    AutocompleteArrayInput, NumberInput, SelectField,
} from 'react-admin';
import { Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import RichTextInput from 'ra-input-rich-text';
import { withStyles } from '@material-ui/core/styles';
import { ArrayInput, SimpleFormIterator, DateInput } from 'react-admin';

const styles = {
    title: { maxWidth: 544 },
    description: { maxWidth: 544},
    first_name: { display: 'inline-block' },
    last_name: { display: 'inline-block', marginLeft: 32 },
    email: { width: 544 },
    min: { maxWidth: 544 },
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

const requiredValidate = [required()];

const ReviewCreate = withStyles({ card: { overflow: 'initial' } })(props => {
    const classes = useStyles(props);

    return (
        <Create {...props}>
            <SimpleForm>
                <TextInput
                    source="title" label='Заголовок'
                    fullWidth
                    validate={requiredValidate}
                    helperText={false}
                    formClassName={classes.title}
                    id='title'
                />
                <RichTextInput label='Текст' validate={requiredValidate} source="conent" formClassName={classes.description} />
                <div style={{display: "flex", width: '100%', gap: 32}}>
                    <RadioButtonGroupInput source="rating" choices={[
                        { id: '1', name: '1' },
                        { id: '2', name: '2' },
                        { id: '3', name: '3' },
                        { id: '4', name: '4' },
                        { id: '5', name: '5' },
                    ]} />
                    <SelectInput label="Тип" source="reviewable_type" choices={[
                        { id: 'lot', name: 'Лот' },
                        { id: 'user', name: 'Пользователь' },
                    ]} />
                </div>
                <div style={{display: "flex", width: '100%', gap: 32}}>
                    <ReferenceInput label="Лот" source="reviewable_id" reference="lots">
                        <SelectInput optionText="title" optionValue="id" />
                    </ReferenceInput>
                    <ReferenceInput label="Пользователь" source="reviewable_id" reference="users">
                        <SelectInput optionText="name" optionValue="id" />
                    </ReferenceInput>
                </div>
                <ReferenceInput label="Автор" source="user_id" reference="users">
                    <SelectInput optionText="name" optionValue="id" />
                </ReferenceInput>
            </SimpleForm>
        </Create>
    );
});


export default ReviewCreate;
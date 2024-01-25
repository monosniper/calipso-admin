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
                    <SelectInput source="status" choices={[
                        { id: 'moderation', name: 'Модерация' },
                        { id: 'active', name: 'Активный' },
                        { id: 'rejected', name: 'Отклонен' },
                    ]} />
                </div>
                <div style={{display: "flex", width: '100%', gap: 32}}>
                    <ReferenceInput label="Категория" source="category_id" reference="categories/shop" validate={requiredValidate}>
                        <SelectInput optionText="name" optionValue="id" />
                    </ReferenceInput>
                    <BooleanInput label="Премиум" source="isPremium" />
                </div>
                <ReferenceArrayInput filter={{for: 'orders'}} source="tag_ids" reference="tags">
                    <SelectArrayInput optionText="name" optionValue={'id'}/>
                </ReferenceArrayInput>
                <ArrayInput source="properties" formClassName={classes.min}>
                    <SimpleFormIterator>
                        <TextInput source="key" />
                        <TextInput source="value" />
                    </SimpleFormIterator>
                </ArrayInput>
                <FileInput source="archive" label="Архив" formClassName={classes.min}>
                    <FileField source="src" title="title" />
                </FileInput>
                <ImageInput multiple={true} source="images" label="Картинки" accept="image/*" formClassName={classes.min}>
                    <ImageField source="src" title="title" />
                </ImageInput>
            </SimpleForm>
        </Create>
    );
});


export default ReviewCreate;
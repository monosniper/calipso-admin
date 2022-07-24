import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {
    ArrayInput,
    BooleanInput,
    Edit, FileField, FileInput, ImageField, ImageInput,
    NumberInput, ReferenceArrayInput,
    ReferenceInput, required, SelectArrayInput,
    SelectInput,
    SimpleForm, SimpleFormIterator,
    TextInput,
    useTranslate
} from "react-admin";
import RichTextInput from "ra-input-rich-text";

export const styles = {
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

const LotEdit = (props) => {
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
                    <SelectArrayInput optionText="name" />
                </ReferenceArrayInput>
                <ArrayInput source="properties" formClassName={classes.min}>
                    <SimpleFormIterator>
                        <TextInput source="key" />
                        <TextInput source="value" />
                    </SimpleFormIterator>
                </ArrayInput>
                <FileInput validate={requiredValidate} source="archive" label="Архив" formClassName={classes.min}>
                    <FileField source="original_url" src="original_url" title="file_name" />
                </FileInput>
                <ImageInput validate={requiredValidate} multiple={true} source="images" label="Картинки" accept="image/*" formClassName={classes.min}>
                    <ImageField source="original_url" src="original_url" title="file_name" />
                </ImageInput>
            </SimpleForm>
        </Edit>
    );
};

const requiredValidate = [required()];

export default LotEdit;
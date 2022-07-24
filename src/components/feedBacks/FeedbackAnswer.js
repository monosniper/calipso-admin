import React, {useEffect, useState} from 'react';
import {Card, CardContent} from "@material-ui/core";
import {
    ArrayInput,
    BooleanInput, FileField, FileInput, ImageField, ImageInput,
    NumberInput, ReferenceArrayInput,
    ReferenceInput, required, SelectArrayInput,
    SelectInput,
    SimpleForm, SimpleFormIterator,
    TextInput,
    Title,
    useTranslate
} from "react-admin";
import {useGetOne} from "ra-core";
import {makeStyles} from "@material-ui/core/styles";
import RichTextInput from "ra-input-rich-text";

const FeedbackAnswer = (props) => {

    const feedback_id = props.match.params.id;
    const {data, loading} = useGetOne('feedBacks', feedback_id);

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
    const classes = useStyles(props);

    return loading ? (
        <Card>
            <Title title="Ответить" />
            <CardContent>
                <p>Загрузка</p>
            </CardContent>
        </Card>
    ) : (
        <Card>
            <Title title={`Обратная связь #${data.id}`} />
            <CardContent>
                <h3>Тема: {data.theme}</h3>

                {data.content}

                <SimpleForm>
                    <RichTextInput label='Описание' validate={requiredValidate} source="description" formClassName={classes.description} />
                </SimpleForm>
            </CardContent>
        </Card>
    );
};

const requiredValidate = [required()];

export default FeedbackAnswer;
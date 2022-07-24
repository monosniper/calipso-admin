import React from 'react';
import {Edit, required, SimpleForm, TextInput} from "react-admin";

const QuestionEdit = (props) => {
    return (
        <Edit {...props}>
            <SimpleForm>
                <TextInput validate={required()} label='Вопрос' source="title" />
                <TextInput multiline validate={required()} label='Ответ' source="answer" />
            </SimpleForm>
        </Edit>
    );
};

export default QuestionEdit;
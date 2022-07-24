import React from 'react';
import {Create, required, SimpleForm, TextInput} from "react-admin";

const QuestionCreate = (props) => {
    return (
        <Create title="Создать вопрос" {...props}>
            <SimpleForm>
                <TextInput validate={required()} label='Вопрос' source="title" />
                <TextInput multiline validate={required()} label='Ответ' source="answer" />
            </SimpleForm>
        </Create>
    );
};

export default QuestionCreate;
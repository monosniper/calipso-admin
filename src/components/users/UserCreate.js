import * as React from 'react';
import {
    Create,
    SimpleForm,
    TextInput,
    useTranslate,
    PasswordInput,
    required,
    email,
    AutocompleteArrayInput, NumberInput,
} from 'react-admin';
import { Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export const styles = {
    first_name: { display: 'inline-block' },
    last_name: { display: 'inline-block', marginLeft: 32 },
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

export const validatePasswords = ({password,password_confirmation,}) => {
    const errors = {};

    if (password && password_confirmation && password !== password_confirmation) {
        errors.password_confirmation = [
            'resources.users.errors.password_mismatch',
        ];
    }

    return errors;
};

const UserCreate = (props) => {
    const classes = useStyles(props);
    const translate = useTranslate();

    return (
        <Create {...props}>
            <SimpleForm
                validate={validatePasswords}
            >
                <SectionTitle label="resources.customers.fieldGroups.identity" />
                <div style={{display: "flex", width: '100%', gap: 32}}>
                    <TextInput
                        autoFocus
                        source="first_name"
                        formClassName={classes.field}
                    />
                    <TextInput
                        source="last_name"
                        formClassName={classes.field}
                    />
                </div>
                <div style={{display: "flex", width: '100%', gap: 32}}>
                    <TextInput
                        type="email"
                        source="email"
                        validation={{ email: true }}
                        validate={[required(), email()]}
                        formClassName={classes.field}
                    />
                    <TextInput
                        source="username"
                        validate={requiredValidate}
                        formClassName={classes.field}
                    />
                </div>
                <SectionTitle label="resources.customers.fieldGroups.address" />
                <TextInput
                    source="location"
                    fullWidth
                    helperText={false}
                    formClassName={classes.address}
                    id='location'
                />
                <SectionTitle label="resources.users.fieldGroups.roles" />
                <AutocompleteArrayInput source="roles" choices={[
                    { id: 'freelancer', name: translate('roles.freelancer') },
                    { id: 'admin', name: translate('roles.admin') },
                ]} />
                <NumberInput label={'Рейтинг'} source={'rating'} />
                <Separator />
                <SectionTitle label="resources.customers.fieldGroups.password" />
                <PasswordInput
                    source="password"
                    validate={[required()]}
                    formClassName={classes.password}
                />
                <PasswordInput
                    source="password_confirmation"
                    validate={[required()]}
                    formClassName={classes.password_confirmation}
                />
            </SimpleForm>
        </Create>
    );
};

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

export default UserCreate;
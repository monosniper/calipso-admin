import React, {useState} from 'react';
import {Button, ButtonToolbar, FlexboxGrid, Form, Panel} from 'rsuite';
import {useLogin, useNotify} from "ra-core";
import {Notification} from "react-admin";

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const login = useLogin();
    const notify = useNotify();
    const submit = (e) => {
        e.preventDefault();
        login({ email, password }).catch((e) => {
            console.log(e || 'Invalid email or password');
            notify(e || 'Invalid email or password')
        });
    };

    return (
        <FlexboxGrid justify="center" className="login-wrapper">
            <Panel header="Вход" shaded>
                <Form>
                    <Form.Group controlId="email">
                        <Form.ControlLabel>Email</Form.ControlLabel>
                        <Form.Control value={email} onChange={value => setEmail(value)} name="email" type="email" />
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.ControlLabel>Password</Form.ControlLabel>
                        <Form.Control value={password} onChange={value => setPassword(value)} name="password" type="password" autoComplete="off" />
                    </Form.Group>
                    <Form.Group>
                        <ButtonToolbar>
                            <Button onClick={submit} appearance="primary">Submit</Button>
                            <Button appearance="default">Cancel</Button>
                        </ButtonToolbar>
                    </Form.Group>
                </Form>
            </Panel>
            <Notification />
        </FlexboxGrid>
    );
};

export default LoginPage;
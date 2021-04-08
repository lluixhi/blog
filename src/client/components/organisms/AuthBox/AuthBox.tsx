import _ from 'lodash';
import React, { useState } from 'react';
import { Button, TextInput, Card } from "react-materialize";

const AuthBox = (props: { onClick: VoidFunction }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = _.curry((setValue: (value: string) => void, event: React.ChangeEvent<any>) => {
        setValue(event.target.value);
    })

    return (
        <Card>
            <TextInput
            label='Username'
            value={username}
            onChange={handleChange(setUsername)}/>
            <TextInput
            label='Password'
            value={password}
            onChange={handleChange(setPassword)}/>
            <Button onClick={props.onClick}>Sign In</Button>
        </Card>
    );
};

export default AuthBox;
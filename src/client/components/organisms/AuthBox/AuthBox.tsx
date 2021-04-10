import _ from 'lodash';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, TextInput, Card } from "react-materialize";
import { API_URL } from '../../../const';

const AuthBox = () => {

    const history = useHistory();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = _.curry((setValue: (value: string) => void, event: React.ChangeEvent<any>) => {
        setValue(event.target.value);
    })

    const onClick = async () => {
        fetch(API_URL + 'auth/login', {
            method: 'POST',
            body: JSON.stringify({ 
                'username': username,
                'password': password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(async (res: Response) => {
            if (res.status === 200) {
                history.push('/');
            } else {
                const err = await res.json();
                throw new Error(err.error);
            }
        });
    }    

    return (
        <Card>
            <TextInput
            label='Username'
            value={username}
            onChange={handleChange(setUsername)}/>
            <TextInput
            label='Password'
            value={password}
            onChange={handleChange(setPassword)}
            password/>
            <Button onClick={onClick}>Sign In</Button>
        </Card>
    );
};

export default AuthBox;
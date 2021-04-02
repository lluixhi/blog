import React from 'react';
import { Button, TextInput, Card } from "react-materialize";

const AuthBox = () => {
    return (
        <Card>
            <TextInput label='Username'/>
            <TextInput label='Password'/>
            <Button>Sign In</Button>
        </Card>
    );
};

export default AuthBox;
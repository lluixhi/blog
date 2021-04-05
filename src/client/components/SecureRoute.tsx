import React, { ComponentType } from 'react'
import { Redirect, Route } from 'react-router-dom'

interface Props { 
    path: string
    component: ComponentType
}

function isAuthenticated(): boolean {
    // TODO
    // Check if user has token in session storage, or something similar
    return true
}

export default function SecureRoute(props: Props) {
    if (isAuthenticated()) {
        return (
            <Route path={props.path} component={props.component}/>
        )
    }
    return (
        <Redirect to='/login'/>
    )
}

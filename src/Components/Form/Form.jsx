import React from 'react'
import * as ReactBootstrap from "react-bootstrap";

export default function Form({children}) {
    return (
        <>
            {children}
            <button class=" btn btn-primary">Submit</button>
        </>
    )
}

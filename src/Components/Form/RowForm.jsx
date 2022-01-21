import React from 'react'
import { Row } from 'react-bootstrap'

export default function RowForm({children}) {
    return (
        <>
        <Row className="g-2">
            {children}
        </Row>
        </>
    )
}

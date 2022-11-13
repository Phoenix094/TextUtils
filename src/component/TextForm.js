import React from "react";
import { Container, Form, FloatingLabel } from "react-bootstrap";



const TextForm = () => {
    return (
        <>
            <Container>
                <Form>
                    <h1 className="mt-2">Textutils</h1>
                    <Form.Group>
                        <FloatingLabel controlId="floatingSelect" label="Enter Your text here....">
                            <Form.Control className="mt-3" as="textarea" style={{ height: '240px' }} ></Form.Control>
                        </FloatingLabel>
                    </Form.Group>
                </Form>
            </Container>

        </>
    )
}


export default TextForm;
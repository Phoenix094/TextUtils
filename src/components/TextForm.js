import React, { useState } from "react";
import { Container, Form, FloatingLabel, Button } from "react-bootstrap";



const TextForm = () => {
    const [text, setText] = useState('')

    //to clear the space
    const handleOnClearSpace = () => {
        setText('');
    }


    //to change text to Uppercase
    const handleOnUppercase = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    //to change text to lowercase
    const handleOnLowercase = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }


    //to remove extra space
    const handleOnExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }


    return (
        <>
            <Container>
                <Form className="mt-4">
                    <Form.Group>
                        <FloatingLabel label="Enter Your text here....">
                            <Form.Control className="my-3" as="textarea" style={{ height: '240px' }} value={text} onChange={(e) => setText(e.target.value)} />
                        </FloatingLabel>
                    </Form.Group>
                    <Button variant="dark">Dark Mode</Button>
                    <Button disabled={text.length === 0} className="mx-2 my-2" variant="primary" onClick={handleOnClearSpace}>Clear </Button>
                    <Button disabled={text.length === 0} className="mx-2" variant="primary" onClick={handleOnUppercase}>Convert to Uppercase </Button>
                    <Button disabled={text.length === 0} className="mx-2" variant="primary" onClick={handleOnLowercase}>Convert to Lowercase </Button>
                    <Button disabled={text.length === 0} className="mx-2" variant="primary" onClick={handleOnExtraSpace}>Remove Extra Space </Button>
                </Form>

                {/* Word Counter */}

                <h1 className="my-3">
                    Word Counter
                </h1>
                <p></p>
                <p> In the above text total word is {text.length}</p>
                <p> Required time to read is {[text.length] * 0.3} sec</p>


                {/* Preview Panal */}

                <h1 className="my-3">
                    Preview text here
                </h1>
                <p>{text.length === 0 ? "No text to preview here" : text}</p>
            </Container>

        </>
    )
}


export default TextForm;
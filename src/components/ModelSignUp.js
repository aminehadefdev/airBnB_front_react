import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import navBottome from '../assets/css/ModelSignUp.css'

class ModelSignUp extends React.Component {
    constructor(props) {
        super(props)
    }
    handlSubmit = (event) => {
        console.log('ok')
    }
    render() {
        return (
            <Modal {...this.props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <h3>Inscription</h3>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={this.handlSubmit}>
                        <Form.Group controlId="formGroupText">
                            <Form.Label>firstName</Form.Label>
                            <Form.Control type="text" placeholder="firstName" />
                        </Form.Group>

                        <Form.Group controlId="formGroupText">
                            <Form.Label>lastName</Form.Label>
                            <Form.Control type="text" placeholder="lastName" />
                        </Form.Group>

                        <Form.Group controlId="formGroupEmail">
                            <Form.Label>email</Form.Label>
                            <Form.Control type="email" placeholder="email" />
                        </Form.Group>

                        <Form.Group controlId="formGroupPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Form.Group controlId="formGroupText">
                            <Form.Label>city</Form.Label>
                            <Form.Control type="text" placeholder="city" />
                        </Form.Group>

                        <Form.Group controlId="formGroupText">
                            <Form.Label>description</Form.Label>
                            <Form.Control as="textarea" rows="3" placeholder="description" />
                        </Form.Group>

                        <Form.Group controlId="formGroupDate">
                            <Form.Label>birthday</Form.Label>
                            <Form.Control type="date" placeholder="birthday" />
                        </Form.Group>
                        <Button type="submit">ok</Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default ModelSignUp
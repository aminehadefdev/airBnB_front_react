import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import '../assets/css/ModelSignUp.css'
import queryString from 'query-string'

class ModelSignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            city: '',
            description: '',
            birthday: '',
        }
        this.handleChange = this.handleChangeFirstName.bind(this);
        this.handleChange = this.handleChangeLastName.bind(this);
        this.handleChange = this.handleChangeEmail.bind(this);
        this.handleChange = this.handleChangePassword.bind(this);
        this.handleChange = this.handleChangeCity.bind(this);
        this.handleChange = this.handleChangeDescription.bind(this);
        this.handleChange = this.handleChangeBirthday.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault()
        var { firstName, lastName, email, password, city, description, birthday } = this.state
        var url = "http://localhost:8000/api/register/host/user"

        axios.post(url, queryString.stringify({ firstName, lastName, email, password, city, description, birthday }), { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
            .then(response => {
                console.log(response)
            }).catch(error => {
                console.log(error.response)
            });
    }
    handleChangeFirstName = (event) => {
        this.setState({ firstName: event.target.value })
    }
    handleChangeLastName = (event) => {
        this.setState({ lastName: event.target.value })
    }
    handleChangeEmail = (event) => {
        this.setState({ email: event.target.value })
    }
    handleChangePassword = (event) => {
        this.setState({ password: event.target.value })
    }
    handleChangeCity = (event) => {
        this.setState({ city: event.target.value })
    }
    handleChangeDescription = (event) => {
        this.setState({ description: event.target.value })
    }
    handleChangeBirthday = (event) => {
        this.setState({ birthday: event.target.value })
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
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="formGroupText">
                            <Form.Label>firstName</Form.Label>
                            <Form.Control name="firstName" type="text" placeholder="firstName" onChange={this.handleChangeFirstName} value={this.state.firstName} />
                        </Form.Group>

                        <Form.Group controlId="formGroupText">
                            <Form.Label>lastName</Form.Label>
                            <Form.Control name="lastName" type="text" placeholder="lastName" onChange={this.handleChangeLastName} value={this.state.lastName} />
                        </Form.Group>

                        <Form.Group controlId="formGroupEmail">
                            <Form.Label>email</Form.Label>
                            <Form.Control name="email" type="email" placeholder="email" onChange={this.handleChangeEmail} value={this.state.email} />
                        </Form.Group>

                        <Form.Group controlId="formGroupPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" type="password" placeholder="Password" onChange={this.handleChangePassword} value={this.state.password} />
                        </Form.Group>

                        <Form.Group controlId="formGroupText">
                            <Form.Label>city</Form.Label>
                            <Form.Control name="city" type="text" placeholder="city" onChange={this.handleChangeCity} value={this.state.city} />
                        </Form.Group>

                        <Form.Group controlId="formGroupText">
                            <Form.Label>description</Form.Label>
                            <Form.Control name="description" as="textarea" rows="3" placeholder="description" onChange={this.handleChangeDescription} value={this.state.description} />
                        </Form.Group>

                        <Form.Group controlId="formGroupDate">
                            <Form.Label>birthday</Form.Label>
                            <Form.Control name="birthday" type="date" placeholder="birthday" onChange={this.handleChangeBirthday} value={this.state.birthday} />
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
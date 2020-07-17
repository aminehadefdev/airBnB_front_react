import React from 'react';
import { Button, Form } from 'react-bootstrap';
import queryString from 'query-string'
import axios from 'axios';

import Alertsuccess from './alertSuccess'
import Alerterror from './alertErrors'

class Formloginuser extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: 'mehdi@gmail.com',
            password: 'BOUbibou000@@@',
            success: false,
            massageSucces: '',
            errors: false,
            massageError: []
        }
        this.handleChange = this.handleChangeEmail.bind(this);
        this.handleChange = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault()
        var { email, password } = this.state
        var url = "http://localhost:8000/api/login/host/user"

        axios.post(url, queryString.stringify({ email, password }), { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
            .then(response => {
                this.setState({ email: '', password: '', success: true, massageSucces: response.data.massageSucces })
                localStorage.setItem('token', response.data.token)
                this.render()
            }).catch(error => {
                this.setState({ errors: true, massageError: error.response.data.massageError })
                this.render()
                console.log(error.response)
            });
    }

    handleChangeEmail = (event) => {
        this.setState({ email: event.target.value })
    }
    handleChangePassword = (event) => {
        this.setState({ password: event.target.value })
    }
    render() {
        let success = this.state.success ? <Alertsuccess message={this.state.massageSucces}></Alertsuccess> : null
        let error = this.state.errors ? <Alerterror messages={this.state.massageError}></Alerterror> : null
        return (
            <div>
                {success || error}
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>email</Form.Label>
                        <Form.Control name="email" type="email" placeholder="email" onChange={this.handleChangeEmail} value={this.state.email} />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" type="password" placeholder="Password" onChange={this.handleChangePassword} value={this.state.password} />
                    </Form.Group>
                    <div className="text-right">
                        <Button className="btn btn-primary " type="submit">ok</Button>
                    </div>
                </Form>
            </div>
        )
    }
}

export default Formloginuser
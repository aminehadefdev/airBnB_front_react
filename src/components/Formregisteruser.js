import React from 'react';
import { Button, Form } from 'react-bootstrap';
import queryString from 'query-string'
import axios from 'axios';

import Alertsuccess from './alertSuccess'
import Alerterror from './alertErrors'
class Formregisteruser extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: 'mehdi',
            lastName: 'bensalah',
            email: 'mehdi@gmail.com',
            password: 'BOUbibou000@@@',
            city: 'paris',
            description: 'oqsjnvosjnvmjfnvmkfjnvmfk',
            birthday: '2012-12-11',
            success: false,
            massageSucces: '',
            errors: false,
            massageError: [],
            cities: []
        }

        this.handleChange = this.handleChangeFirstName.bind(this);
        this.handleChange = this.handleChangeLastName.bind(this);
        this.handleChange = this.handleChangeEmail.bind(this);
        this.handleChange = this.handleChangePassword.bind(this);
        this.handleChange = this.handleChangeCity.bind(this);
        this.handleChange = this.handleChangeDescription.bind(this);
        this.handleChange = this.handleChangeBirthday.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.initCitie = this.initCitie.bind(this)
    }
    initCitie() {
        var cities = axios.get('http://localhost:8000/api/cities')
        cities.then(res => {
            this.setState({ cities: res.data })
        }).catch(err => {
            console.log(err)
        })
    }
    handleSubmit(event) {
        event.preventDefault()
        var { firstName, lastName, email, password, city, description, birthday } = this.state
        var url = "http://localhost:8000/api/register/host/user"

        axios.post(url, queryString.stringify({ firstName, lastName, email, password, city, description, birthday }), { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
            .then(response => {
                this.setState({ firstName: '', lastName: '', email: '', password: '', city: '', description: '', birthday: '', success: true, massageSucces: response.data.massageSucces })
                this.render()
                console.log(response)
            }).catch(error => {
                this.setState({ errors: true, massageError: error.response.data.massageError })
                this.render()
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
        if (this.state.cities.length <= 0) {
            this.initCitie()
        }
        let success = this.state.success ? <Alertsuccess message={this.state.massageSucces}></Alertsuccess> : null
        let error = this.state.errors ? <Alerterror messages={this.state.massageError}></Alerterror> : null

        let options = this.state.cities.map(city => {
            return <option key={city.id} value={city.name}>{city.name}</option>
        })
        return (
            <div>
                {success || error}
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
                        <Form.Control name="city" as="select" placeholder="city" onChange={this.handleChangeCity} value={this.state.city}>
                            {options}
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="formGroupText">
                        <Form.Label>description</Form.Label>
                        <Form.Control name="description" as="textarea" rows="3" placeholder="description" onChange={this.handleChangeDescription} value={this.state.description} />
                    </Form.Group>

                    <Form.Group controlId="formGroupDate">
                        <Form.Label>birthday</Form.Label>
                        <Form.Control name="birthday" type="date" placeholder="birthday" onChange={this.handleChangeBirthday} value={this.state.birthday} />
                    </Form.Group>
                    <div className="text-right">
                        <Button className="btn btn-primary " type="submit">ok</Button>
                    </div>

                </Form>
            </div>
        )
    }
}

export default Formregisteruser
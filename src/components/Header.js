import React from 'react';
import { Button, Form, Col, InputGroup, FormControl } from 'react-bootstrap';
import '../assets/css/searche.css'
class Header extends React.Component {
    render() {
        return (
            <div className="container-searche">
                <Form className="form-searche">
                    <Form.Group className="form-groups" controlId="formGroupPassword">
                        <Form.Control className="searche-input" name="password" type="password" placeholder="Password" />
                        <div className="text-right">
                            <Button className="btn btn-primary searche-btn" type="submit">ok</Button>
                        </div>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}

export default Header
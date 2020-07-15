import React from 'react';

import Nav from 'react-bootstrap/Nav';
import ModelSignUp from './ModelSignUp'
import '../assets/css/navBottome.css'

class NavBottom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ModelSignUpShow: false
        }
    }
    render() {
        let ModelSignUpClose = () => {
            this.setState({ ModelSignUpShow: false })
        }
        return (
            <Nav className="fixed-bottom d-flex justify-content-center" variant="tabs" defaultActiveKey="/home">
                <Nav.Item className="items_nav">
                    <Nav.Link eventKey="Explorer" className="d-flex flex-column justify-content-center align-items-center" >
                        <svg className="svg" viewBox="0 0 24 24" fill="currentColor" fillOpacity="0" stroke="currentColor" strokeWidth="1.5" focusable="false" aria-hidden="true" role="presentation" strokeLinecap="round" strokeLinejoin="round"><path d="M12 18.7l-.4-.5a12.3 12.3 0 0 1-2.5-4.6c0-.6-.1-1.2 0-1.6 0-.4.2-.9.4-1.2A3 3 0 0 1 12 9.5c1 0 2 .5 2.5 1.3.2.3.4.8.4 1.2.1.4 0 1 0 1.6-.3 1.3-1.2 3-2.5 4.6l-.4.5z"></path><path d="M12 18.8c1 1.6 2.5 2.9 4.2 3.2h.7a4.3 4.3 0 0 0 4.2-5v-.2a74.7 74.7 0 0 0-6.4-13.2c-.6-1-1.5-1.7-2.7-1.7s-2.1.8-2.7 1.7A74.7 74.7 0 0 0 3 16.8v.2l-.2.8a4.3 4.3 0 0 0 4.8 4.3h.2c1.7-.4 3.1-1.7 4.2-3.3"></path></svg>
                        <p>Explorer</p>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="items_nav">
                    <Nav.Link eventKey="Enregistrer" className="d-flex flex-column justify-content-center align-items-center">
                        <svg className="svg" viewBox="0 0 24 24" fill="currentColor" fillOpacity="0" stroke="currentColor" strokeWidth="1.5" focusable="false" aria-hidden="true" role="presentation" strokeLinecap="round" strokeLinejoin="round"><path d="m17.5 2.9c-2.1 0-4.1 1.3-5.4 2.8-1.6-1.6-3.8-3.2-6.2-2.7-1.5.2-2.9 1.2-3.6 2.6-2.3 4.1 1 8.3 3.9 11.1 1.4 1.3 2.8 2.5 4.3 3.6.4.3 1.1.9 1.6.9s1.2-.6 1.6-.9c3.2-2.3 6.6-5.1 8.2-8.8 1.5-3.4 0-8.6-4.4-8.6" strokeLinejoin="round"></path></svg>
                        <p>Enregistrer</p>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="items_nav">
                    <Nav.Link eventKey="Connexion" className="d-flex flex-column justify-content-center align-items-center">
                        <svg className="svg" viewBox="0 0 24 24" fill="currentColor" fillOpacity="0" stroke="currentColor" strokeWidth="1.5" focusable="false" aria-hidden="true" role="presentation" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10.5"></circle><path d="M4.6 19.2c-.1-1.4 1.7-2.9 5.4-4.5-1-1-1.4-1.7-1.4-3.7S9 6.5 12 6.5s3.5 2.4 3.4 4.5c0 2.1-.4 2.7-1.4 3.8 5.1 2.1 5.4 3.4 5.4 4.4"></path></svg>
                        <p>Connexion</p>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="items_nav" onClick={() => this.setState({ ModelSignUpShow: true })}>
                    <Nav.Link eventKey="Inscription" className="d-flex flex-column justify-content-center align-items-center">
                        <svg className="svg" viewBox="0 0 24 24" fill="currentColor" fillOpacity="0" stroke="currentColor" strokeWidth="1.5" focusable="false" aria-hidden="true" role="presentation" strokeLinecap="round" strokeLinejoin="round"><path d="M12 18.7l-.4-.5a12.3 12.3 0 0 1-2.5-4.6c0-.6-.1-1.2 0-1.6 0-.4.2-.9.4-1.2A3 3 0 0 1 12 9.5c1 0 2 .5 2.5 1.3.2.3.4.8.4 1.2.1.4 0 1 0 1.6-.3 1.3-1.2 3-2.5 4.6l-.4.5z"></path><path d="M12 18.8c1 1.6 2.5 2.9 4.2 3.2h.7a4.3 4.3 0 0 0 4.2-5v-.2a74.7 74.7 0 0 0-6.4-13.2c-.6-1-1.5-1.7-2.7-1.7s-2.1.8-2.7 1.7A74.7 74.7 0 0 0 3 16.8v.2l-.2.8a4.3 4.3 0 0 0 4.8 4.3h.2c1.7-.4 3.1-1.7 4.2-3.3"></path></svg>
                        <p>Inscription</p>
                    </Nav.Link>
                </Nav.Item>
                <ModelSignUp
                    show={this.state.ModelSignUpShow}
                    onHide={ModelSignUpClose}
                />
            </Nav>
        )
    }
}

export default NavBottom
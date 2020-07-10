import React from 'react';
import Nav from 'react-bootstrap/Nav';
import navBottome from '../assets/css/navBottome.css'

class NavBottom extends React.Component {
    render() {
        return (
            <Nav className="fixed-bottom d-flex justify-content-center" variant="tabs" defaultActiveKey="/home">
                <Nav.Item className="items_nav">
                    <Nav.Link eventKey="/home" className="d-flex flex-column justify-content-center align-items-center" >
                        <svg className="svg" viewBox="0 0 24 24" fill="currentColor" fill-opacity="0" stroke="currentColor" stroke-width="1.5" focusable="false" aria-hidden="true" role="presentation" stroke-linecap="round" stroke-linejoin="round"><path d="M12 18.7l-.4-.5a12.3 12.3 0 0 1-2.5-4.6c0-.6-.1-1.2 0-1.6 0-.4.2-.9.4-1.2A3 3 0 0 1 12 9.5c1 0 2 .5 2.5 1.3.2.3.4.8.4 1.2.1.4 0 1 0 1.6-.3 1.3-1.2 3-2.5 4.6l-.4.5z"></path><path d="M12 18.8c1 1.6 2.5 2.9 4.2 3.2h.7a4.3 4.3 0 0 0 4.2-5v-.2a74.7 74.7 0 0 0-6.4-13.2c-.6-1-1.5-1.7-2.7-1.7s-2.1.8-2.7 1.7A74.7 74.7 0 0 0 3 16.8v.2l-.2.8a4.3 4.3 0 0 0 4.8 4.3h.2c1.7-.4 3.1-1.7 4.2-3.3"></path></svg>
                        <p>Option 1</p>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="items_nav">
                    <Nav.Link eventKey="link-1" className="d-flex flex-column justify-content-center align-items-center">
                        <svg className="svg" viewBox="0 0 24 24" fill="currentColor" fill-opacity="0" stroke="currentColor" stroke-width="1.5" focusable="false" aria-hidden="true" role="presentation" stroke-linecap="round" stroke-linejoin="round"><path d="M12 18.7l-.4-.5a12.3 12.3 0 0 1-2.5-4.6c0-.6-.1-1.2 0-1.6 0-.4.2-.9.4-1.2A3 3 0 0 1 12 9.5c1 0 2 .5 2.5 1.3.2.3.4.8.4 1.2.1.4 0 1 0 1.6-.3 1.3-1.2 3-2.5 4.6l-.4.5z"></path><path d="M12 18.8c1 1.6 2.5 2.9 4.2 3.2h.7a4.3 4.3 0 0 0 4.2-5v-.2a74.7 74.7 0 0 0-6.4-13.2c-.6-1-1.5-1.7-2.7-1.7s-2.1.8-2.7 1.7A74.7 74.7 0 0 0 3 16.8v.2l-.2.8a4.3 4.3 0 0 0 4.8 4.3h.2c1.7-.4 3.1-1.7 4.2-3.3"></path></svg>
                        Option 2
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="items_nav">
                    <Nav.Link eventKey="" className="d-flex flex-column justify-content-center align-items-center">
                        <svg className="svg" viewBox="0 0 24 24" fill="currentColor" fill-opacity="0" stroke="currentColor" stroke-width="1.5" focusable="false" aria-hidden="true" role="presentation" stroke-linecap="round" stroke-linejoin="round"><path d="M12 18.7l-.4-.5a12.3 12.3 0 0 1-2.5-4.6c0-.6-.1-1.2 0-1.6 0-.4.2-.9.4-1.2A3 3 0 0 1 12 9.5c1 0 2 .5 2.5 1.3.2.3.4.8.4 1.2.1.4 0 1 0 1.6-.3 1.3-1.2 3-2.5 4.6l-.4.5z"></path><path d="M12 18.8c1 1.6 2.5 2.9 4.2 3.2h.7a4.3 4.3 0 0 0 4.2-5v-.2a74.7 74.7 0 0 0-6.4-13.2c-.6-1-1.5-1.7-2.7-1.7s-2.1.8-2.7 1.7A74.7 74.7 0 0 0 3 16.8v.2l-.2.8a4.3 4.3 0 0 0 4.8 4.3h.2c1.7-.4 3.1-1.7 4.2-3.3"></path></svg>
                        Option 3
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="items_nav">
                    <Nav.Link eventKey="" className="d-flex flex-column justify-content-center align-items-center">
                        <svg className="svg" viewBox="0 0 24 24" fill="currentColor" fill-opacity="0" stroke="currentColor" stroke-width="1.5" focusable="false" aria-hidden="true" role="presentation" stroke-linecap="round" stroke-linejoin="round"><path d="M12 18.7l-.4-.5a12.3 12.3 0 0 1-2.5-4.6c0-.6-.1-1.2 0-1.6 0-.4.2-.9.4-1.2A3 3 0 0 1 12 9.5c1 0 2 .5 2.5 1.3.2.3.4.8.4 1.2.1.4 0 1 0 1.6-.3 1.3-1.2 3-2.5 4.6l-.4.5z"></path><path d="M12 18.8c1 1.6 2.5 2.9 4.2 3.2h.7a4.3 4.3 0 0 0 4.2-5v-.2a74.7 74.7 0 0 0-6.4-13.2c-.6-1-1.5-1.7-2.7-1.7s-2.1.8-2.7 1.7A74.7 74.7 0 0 0 3 16.8v.2l-.2.8a4.3 4.3 0 0 0 4.8 4.3h.2c1.7-.4 3.1-1.7 4.2-3.3"></path></svg>
                        Option 3
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        )
    }
}

export default NavBottom
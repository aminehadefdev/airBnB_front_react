import React from 'react';
import { Modal, Button, Alert } from 'react-bootstrap';
import '../assets/css/ModelSignUp.css'

import Formloginuser from './formloginuser'

class ModelSignIn extends React.Component {
    render() {
        return (
            <div>
                <Modal {...this.props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            <h3>Connexion</h3>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Formloginuser></Formloginuser>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

export default ModelSignIn
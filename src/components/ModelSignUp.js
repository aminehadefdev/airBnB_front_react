import React from 'react';
import { Modal, Button, Alert } from 'react-bootstrap';
import '../assets/css/ModelSignUp.css'

import Formregisteruser from './Formregisteruser'

class ModelSignUp extends React.Component {
    render() {
        return (
            <div>
                <Modal {...this.props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            <h3>Inscription</h3>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Formregisteruser></Formregisteruser>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

export default ModelSignUp
import React from 'react';
import { Alert, Button } from 'react-bootstrap';

class Alertsuccess extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            alertShow: true
        }
    }
    render() {
        let alertClose = () => {
            this.setState({ alertShow: false })
        }
        return (
            <>
                <Alert show={this.state.alertShow} variant="success">
                    <Alert.Heading>{this.props.message}</Alert.Heading>
                    <div className="d-flex justify-content-end">
                        <Button onClick={() => alertClose(false)} variant="outline-success">
                            Close
                        </Button>
                    </div>
                </Alert>
            </>
        )
    }
}
//{!this.state.alertShow && <Button onClick={() => alertClose(true)}>Show Alert</Button>}

export default Alertsuccess
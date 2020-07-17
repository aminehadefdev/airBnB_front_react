import React from 'react';
import { Alert, Button } from 'react-bootstrap';

class Alerterror extends React.Component {
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
        let errors = this.props.messages.map((er, i) => {
            return <li key={"index" + i}>{er}</li>
        })
        return (
            <>
                <Alert show={this.state.alertShow} variant="danger">
                    <Alert.Heading>
                        <ul>
                            {errors}
                        </ul>
                    </Alert.Heading>
                    <div className="d-flex justify-content-end">
                        <Button onClick={() => alertClose(false)} variant="outline-danger">
                            Close
                        </Button>
                    </div>
                </Alert>
            </>
        )
    }
}
//{!this.state.alertShow && <Button onClick={() => alertClose(true)}>Show Alert</Button>}

export default Alerterror
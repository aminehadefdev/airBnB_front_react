import React from 'react';
import { Button, Card } from 'react-bootstrap';
import '../assets/css/card.css'

class Propertycard extends React.Component {

    render() {
        return (
            <Card className="conatiner-card" >
                <Card.Img variant="top" src="https://via.placeholder.com/150" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default Propertycard
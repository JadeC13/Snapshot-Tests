import React from "react"
import Card from "react-bootstrap/Card"
import Jade from './Jade.png'

function GitHubCard() {
    return (
        <div className="card3">
            <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={Jade} />
                <Card.Body>
                    <Card.Title>Jade Chalco</Card.Title>
                    <Card.Text>
                        My name is Jade and pink is my favorite color!
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default GitHubCard
import React, {Component} from 'react';
import CarouselBox from '../Components/CarouselBox';
import {Container, CardDeck, Card, Button} from 'react-bootstrap';

export default class Home extends Component {
    render() {
        return (
            <>
                <CarouselBox />

                <Container>
                    <h3 className="text-center m-4">Our team</h3>
                    <CardDeck>
                        <Card>
                            <Card.Img
                            variant="top"
                            src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            />
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>
                                    Lorem Ipsum is simply dummy text of the printing
                                    and typesetting industry. Lorem Ipsum has been
                                    the industry's standard dummy text ever since the 1500s.
                                </Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Img
                                variant="top"
                                src="https://images.pexels.com/photos/1560932/pexels-photo-1560932.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            />
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>
                                    Lorem Ipsum is simply dummy text of the printing
                                    and typesetting industry. Lorem Ipsum has been
                                    the industry's standard dummy text ever since the 1500s.
                                </Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Img
                                variant="top"
                                src="https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            />
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>
                                    Lorem Ipsum is simply dummy text of the printing
                                    and typesetting industry. Lorem Ipsum has been
                                    the industry's standard dummy text ever since the 1500s.
                                </Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </Container>
            </>
        );
    }
}
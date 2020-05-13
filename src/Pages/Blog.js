import React, {Component} from 'react';
import {Container, Row, Col, Media, Card, ListGroup} from 'react-bootstrap';

class Blog extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md="9">
                        <Media className="m-5">
                            <img
                                width={150}
                                height={150}
                                className="mr-3"
                                src="https://avatars.mds.yandex.net/get-pdb/1626505/082a9806-73b3-445b-ae87-970eca9f82dd/s1200?webp=false"
                                alt="js"
                            />
                            <Media.Body>
                                <h5>Blog post</h5>
                                <p>
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry.
                                    Lorem Ipsum has been the industry's
                                    standard dummy text ever since the 1500s</p>
                            </Media.Body>
                        </Media>

                        <Media className="m-5">
                            <img
                                width={150}
                                height={150}
                                className="mr-3"
                                src="https://avatars.mds.yandex.net/get-pdb/1626505/082a9806-73b3-445b-ae87-970eca9f82dd/s1200?webp=false"
                                alt="js"
                            />
                            <Media.Body>
                                <h5>Blog post</h5>
                                <p>
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry.
                                    Lorem Ipsum has been the industry's
                                    standard dummy text ever since the 1500s</p>
                            </Media.Body>
                        </Media>

                        <Media className="m-5">
                            <img
                                width={150}
                                height={150}
                                className="mr-3"
                                src="https://avatars.mds.yandex.net/get-pdb/1626505/082a9806-73b3-445b-ae87-970eca9f82dd/s1200?webp=false"
                                alt="js"
                            />
                            <Media.Body>
                                <h5>Blog post</h5>
                                <p>
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry.
                                    Lorem Ipsum has been the industry's
                                    standard dummy text ever since the 1500s</p>
                            </Media.Body>
                        </Media>


                    </Col>
                    <Col md="3">
                        <h5 className="text-center mt-5">Categories</h5>
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Html/Css</ListGroup.Item>
                                <ListGroup.Item>Javascript</ListGroup.Item>
                                <ListGroup.Item>Python</ListGroup.Item>
                                <ListGroup.Item>Java</ListGroup.Item>
                                <ListGroup.Item>C++</ListGroup.Item>
                            </ListGroup>
                        </Card>
                        <Card className="mt-3 bg-light">
                            <Card.Body>
                                <Card.Title>Side widget</Card.Title>
                                <Card.Text>
                                    Lorem Ipsum is simply dummy text of the printing
                                    and typesetting industry. Lorem Ipsum has been
                                    the industry's standard dummy text ever since the 1500s
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Blog;
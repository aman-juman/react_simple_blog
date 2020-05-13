import React, {Component} from 'react';
import {Container, Row, Col, Nav, Tab}  from "react-bootstrap";

class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Design</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Team</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Programming</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Framework</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">Libraries</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <img className="about_item-img" src="https://i.vimeocdn.com/video/822590268.webp?mw=1200&mh=682&q=70" alt="project"/>
                                    <p className="about_item-p">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the
                                        1500s, when an unknown printer took a galley of type and scrambled
                                        it to make a type specimen book. It has survived not only five
                                        centuries, but also the leap into electronic typesetting,
                                        remaining essentially unchanged.
                                    </p>
                                </Tab.Pane>

                                <Tab.Pane eventKey="second">
                                    <img className="about_item-img" src="https://www.zip.ua/wp-content/uploads/2018/02/5-min.jpg" alt="project"/>
                                    <p className="about_item-p">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the
                                        1500s, when an unknown printer took a galley of type and scrambled
                                        it to make a type specimen book. It has survived not only five
                                        centuries, but also the leap into electronic typesetting,
                                        remaining essentially unchanged.
                                    </p>
                                </Tab.Pane>

                                <Tab.Pane eventKey="third">
                                    <img className="about_item-img" src="https://lh6.googleusercontent.com/vTaE5qb-VUylz7syxnzLHBb_0hCOCMLztgwuzJIfOznwUrKFw71OJobBziN5iaciZZpD4Gxr197YlnmTESM-SosD0T8Riq6R8xXlb9bTmgEAqR7C09fugv1Ac7nPbTXjBlXdzT3YpPSfGIkvtw" alt="project"/>
                                    <p className="about_item-p">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the
                                        1500s, when an unknown printer took a galley of type and scrambled
                                        it to make a type specimen book. It has survived not only five
                                        centuries, but also the leap into electronic typesetting,
                                        remaining essentially unchanged.
                                    </p>
                                </Tab.Pane>

                                <Tab.Pane eventKey="fourth">
                                    <img className="about_item-img" src="https://hackernoon.com/drafts/0g1jr323v.png" alt="project"/>
                                    <p className="about_item-p">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the
                                        1500s, when an unknown printer took a galley of type and scrambled
                                        it to make a type specimen book. It has survived not only five
                                        centuries, but also the leap into electronic typesetting,
                                        remaining essentially unchanged.
                                    </p>
                                </Tab.Pane>

                                <Tab.Pane eventKey="fifth">
                                    <img className="about_item-img" src="https://vtc.edu.vn/wp-content/uploads/2018/11/1_dE5cAHQSHR3dtnzddLa5PA.png" alt="project"/>
                                    <p className="about_item-p">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the
                                        1500s, when an unknown printer took a galley of type and scrambled
                                        it to make a type specimen book. It has survived not only five
                                        centuries, but also the leap into electronic typesetting,
                                        remaining essentially unchanged.
                                    </p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        );
    }
}

export default About;
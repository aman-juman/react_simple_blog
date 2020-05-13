import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import forestImg from '../assets/forest.jpg';
import dforestImg from '../assets/dforest.jpg';


export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        src={ forestImg }
                        alt="slider images"
                        className="d-block w-100"
                    />
                    <Carousel.Caption>
                        <h3>Forest</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adisicing elit, Quidem, est?</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        src={ dforestImg }
                        alt="slider images"
                        className="d-block w-100"
                    />
                    <Carousel.Caption>
                        <h3>Forest</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adisicing elit, Quidem, est?</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        src={ forestImg }
                        alt="slider images"
                        className="d-block w-100"
                    />
                    <Carousel.Caption>
                        <h3>Forest</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adisicing elit, Quidem, est?</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>

        );
    }
}

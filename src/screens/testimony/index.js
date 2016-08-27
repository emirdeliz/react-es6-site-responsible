import React, { Component } from 'react';
import { Row, Col, Carousel } from 'react-bootstrap';

export default class Testimony extends Component {
    build(data) {
        const rows = [];

        data.forEach((item, i) => rows.push(
            <Carousel.Item key={ i }>
                <img alt={ item.resume } src={'/imgs/' + item.image}/>
                <Carousel.Caption>
                    <h3>{ item.testimony }</h3>
                    <p>{ item.resume }</p>
                </Carousel.Caption>
            </Carousel.Item>)
        );

        return rows;
    }

    render() {
        const dataRow = [
            {
                image: 'client-1.png',
                resume: 'Susam nunes, english language teacher at yazagi',
                testimony: '"Integer posuere erat a ante venenatis dapibus posuere velit aliquet.' +
                'Donec sed odio dui. Aenean eu leo quam..."'
            }, {
                image: 'client-2.jpg',
                resume: 'project 2',
                testimony: '"Picanha pastrami biltong, alcatra jowl jerky porchetta capicola pork loin frankfurter.' +
                           'Shankle boudin tenderloin kevin tail pancetta"'
            }, {
                image: 'client-3.jpg',
                resume: 'project 3',
                testimony: '"Short ribs fatback jerky, landjaeger spare ribs filet mignon biltong turducken porchetta' +
                           'drumstick brisket pig shoulder"'
            }
        ];

        return (
            <div className="testimony">
                <div className="container">
                    <Row>
                        <Col sm={ 12 }>
                            <Carousel controls={ false }>
                                { this.build(dataRow) }
                            </Carousel>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

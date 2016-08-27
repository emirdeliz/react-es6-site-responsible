import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import CardEmployee from '../../shared/card-employee';

export default class OurTeam extends Component {
    constructor() {
        super();
        this.state = {
            styleCardEmployee: Array.from(new Array(5), () => '')
        };
    }

    build(data) {
        const rows = [];

        data.forEach((item, i) => {
            const styleCardEmployee = this.state.styleCardEmployee;
            const indexPrev = (i - 1);

            rows.push(
                <Col sm={ 2 } key={ i }>
                    <CardEmployee { ...item } style={ styleCardEmployee[i] }
                        mouseEnter={() => {
                            if (indexPrev > - 1) {
                                styleCardEmployee[indexPrev] = 'prev';
                                this.setState({ styleCardEmployee: styleCardEmployee });
                            }
                        }}
                        mouseOut={() => {
                            if (indexPrev > - 1) {
                                styleCardEmployee[indexPrev] = '';
                                this.setState({ styleCardEmployee: styleCardEmployee });
                            }
                        }}
                    />
                </Col>);
        });

        return rows;
    }

    render() {
        const dataRow = [
            {
                image: 'people-1.png',
                name: 'Bruna Silva',
                localization: 'São Paulo, Brazil',
                testimony: '"Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,' +
                    'ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet' +
                    'nom magna. Nullam quis risus eget urna mollis ornare vel eu leo."'
            }, {
                image: 'people-2.png',
                name: 'Andhra Pradesh',
                localization: 'Hayderabad, India',
                testimony: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,' +
                    'ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet' +
                    'nom magna. Nullam quis risus eget urna mollis ornare vel eu leo.'
            }, {
                image: 'people-3.png',
                name: 'Victoria Valdez',
                localization: 'Jakarta, Indonesia',
                testimony: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,' +
                    'ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet' +
                    'nom magna. Nullam quis risus eget urna mollis ornare vel eu leo.'
            }, {
                image: 'people-4.png',
                name: 'Beverly Little',
                localization: 'Paris, France',
                testimony: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,' +
                    'ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet' +
                    'nom magna. Nullam quis risus eget urna mollis ornare vel eu leo.'
            }
        ];

        return (
            <div className="our-team">
                <div className="container">
                    <Row>
                        <Col sm={ 2 } />
                        { this.build(dataRow) }
                        <Col sm={ 2 } />
                    </Row>
                </div>
            </div>
        );
    }
}

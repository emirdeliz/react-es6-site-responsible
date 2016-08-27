import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import ImageFilter from '../../shared/image-filter';

export default class Features extends Component {
    build(data) {
        const rows = [];

        data.forEach((item, i) => rows.push(
            <Col sm={ 3 } key={ i }>
                <ImageFilter { ...item } />
            </Col>)
        );

        return rows;
    }

    render() {
        const dataFirstRow = [
            {
                image: 'feature-1.png',
                project: 'project 1',
                description: 'Jowl chicken swine pig shankle chuck kevin.non metus auctor fringilla.'
            }, {
                image: 'feature-2.png',
                project: 'project 2',
                description: 'Picanha pastrami biltong, alcatra jowl jerky porchetta capicola pork loin frankfurter. Shankle boudin tenderloin kevin tail pancetta'
            }, {
                image: 'feature-3.png',
                project: 'project 3',
                description: 'Short ribs fatback jerky, landjaeger spare ribs filet mignon biltong turducken porchetta drumstick brisket pig shoulder'
            }, {
                image: 'feature-4.png',
                project: 'project 4',
                description: 'Short ribs fatback jerky, landjaeger spare ribs filet mignon biltong turducken porchetta drumstick brisket pig shoulder'
            }
        ];

        const dataSecondRow = [
            {
                image: 'feature-5.png',
                project: 'project 5',
                description: 'Flank landjaeger tongue, pig swine sausage leberkas shoulder short ribs chuck shankle jowl bresaola tenderloin',
            }, {
                image: 'feature-6.png',
                project: 'project 6',
                description: 'Harn hock jowl shankle pork kevin venison beef sirloin. Flank andouille bresaola pork loin tongue, corned beef ham ham hock filet'
            }, {
                image: 'feature-7.png',
                project: 'project 7',
                description: 'T-bone salami chicken, ribeye landjaeger trip-tip pastrami andouille leberkas. Turkey hamburguer kielbasa andouille'
            }, {
                image: 'feature-8.png',
                project: 'project 8',
                description: 'T-bone salami chicken, ribeye landjaeger trip-tip pastrami andouille leberkas. Turkey hamburguer kielbasa andouille'
            }
        ];

        return (
            <div className="features">
                <div className="container">
                    <Row>
                        { this.build(dataFirstRow) }
                    </Row>
                    <Row>
                        { this.build(dataSecondRow) }
                    </Row>
                </div>
            </div>
        );
    }
}

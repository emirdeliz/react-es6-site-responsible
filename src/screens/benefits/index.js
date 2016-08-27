import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import CardBenefits from '../../shared/card-benefits';

export default class Benefits extends Component {
    build(data) {
        const rows = [];

        data.forEach((item, i) => rows.push(
            <Col sm={ 2 } key={ i }>
                <CardBenefits { ...item } />
            </Col>)
        );

        return rows;
    }

    render() {
        const dataFirstRow = [
            {
                image: 'easily-customised.png',
                title: 'Easy Customised',
                subTitle: 'Jowl chicken swine pig shankle chuck kevin.non metus auctor fringilla.'
            }, {
                image: 'responsive-ready.png',
                title: 'Responsive Ready',
                subTitle: 'Picanha pastrami biltong, alcatra jowl jerky porchetta capicola pork loin frankfurter.' +
                          'Shankle boudin tenderloin kevin tail pancetta'
            }, {
                image: 'modern-design.png',
                title: 'Modern Design',
                subTitle: 'Short ribs fatback jerky, landjaeger spare ribs filet mignon biltong turducken porchetta' +
                          'drumstick brisket pig shoulder'
            }
        ];

        const dataSecondRow = [
            {
                image: 'clean-code.png',
                title: 'Clean Code',
                subTitle: 'Flank landjaeger tongue, pig swine sausage leberkas shoulder short ribs chuck shankle' +
                          'jowl bresaola tenderloin'
            }, {
                image: 'ready-to-ship.png',
                title: 'Ready To Ship',
                subTitle: 'Harn hock jowl shankle pork kevin venison beef sirloin.' +
                          'Flank andouille bresaola pork loin tongue, corned beef ham ham hock filet'
            }, {
                image: 'download-for-free.png',
                title: 'Download for Free',
                subTitle: 'T-bone salami chicken, ribeye landjaeger trip-tip pastrami andouille leberkas.' +
                          'Turkey hamburguer kielbasa andouille'
            }
        ];

        return (
            <div className="benefits">
                <div className="container">
                    <Row>
                        <Col sm={ 3 } />
                        { this.build(dataFirstRow) }
                    </Row>
                    <Row>
                        <Col sm={ 3 } />
                        { this.build(dataSecondRow) }
                    </Row>
                </div>
            </div>
        );
    }
}

import React, { Component } from 'react';
import { Row, Col, Glyphicon } from 'react-bootstrap';
import SharedSocial from '../../shared/shared-social';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <Row className="about">
                        <Col sm={ 1 }/>
                        <Col sm={ 3 }>
                            <div className="containerText">
                                <span className="title">Location</span>
                                <span className="subTitle">Rodovia SC 401, n 8600 Sala 4, St. Antônio de Lisboa CEP: 88050-000</span>
                            </div>
                        </Col>
                        <Col sm={ 4 }>
                            <div className="containerText">
                                <span className="title">Share With Love</span>
                                <SharedSocial themeIcon={ 'white' }/>
                            </div>
                        </Col>
                        <Col sm={ 3 }>
                            <div className="containerText">
                                <span className="title">About Bravi</span>
                                <span className="subTitle">We are tech up based in the heart of Floripa.
                                    We are focused on education and helping companies transform into
                                    organisations that really learn. hello@bravi.com.br</span>
                            </div>
                        </Col>
                        <Col sm={ 1 }/>
                    </Row>
                    <Row className="copyright">
                        <Col sm={ 12 }>
                            <div className="containerText">
                                <span className="title">Copyright © 2016 Bravi</span>
                                <span className="subTitle">
                                    Made with <Glyphicon className="heart" glyph="heart" />
                                    <span className="by">by Bravi</span>
                                </span>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

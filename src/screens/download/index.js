import React, { Component } from 'react';
import { Row, Col, FormGroup, InputGroup, FormControl, Glyphicon } from 'react-bootstrap';

export default class Download extends Component {
    render() {
        return (
            <div className="download">
                <div className="container">
                    <Row>
                        <Col sm={ 12 }>
                            <div className="containerText">
                                <span className="title">Are You Ready to Start Learning?</span>
                                <span className="subTitle">Start to follow us and discover our new materials</span>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={ 4 } smOffset={ 4 }>
                            <FormGroup className="containerEmail">
                                <InputGroup>
                                    <FormControl type="text" placeholder="Your E-mail"/>
                                    <InputGroup.Addon>
                                        <Glyphicon glyph="ok" />
                                    </InputGroup.Addon>
                                </InputGroup>
                           </FormGroup>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

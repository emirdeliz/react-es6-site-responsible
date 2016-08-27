import React, { Component } from 'react';
import { Nav, Navbar, NavItem, Row, Col } from 'react-bootstrap';

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            expanded: false
        };
    }

    handleToggle() {
        this.setState({ expanded: !this.state.expanded });
    }

    render() {
        return (
            <Navbar inverse className="header" expanded={ this.state.expanded } onToggle={ this.handleToggle.bind(this) }>
                <Navbar.Header>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Row>
                    <Col sm={ 3 }/>
                    <Col sm={ 6 }>
                        <Navbar.Collapse>
                            <Nav pullRight >
                                <NavItem onClick={ this.handleToggle.bind(this) } eventKey={1} href="#benefits">Benefits</NavItem>
                                <NavItem onClick={ this.handleToggle.bind(this) } eventKey={2} href="#features">Features</NavItem>
                                <NavItem onClick={ this.handleToggle.bind(this) } eventKey={3} href="#ourTeam">Our team</NavItem>
                                <NavItem onClick={ this.handleToggle.bind(this) } eventKey={4} href="#testimony">Testimonials</NavItem>
                                <NavItem onClick={ this.handleToggle.bind(this) } eventKey={5} href="#download">Download</NavItem>
                            </Nav>
                        </Navbar.Collapse>
                    </Col>
                </Row>
            </Navbar>
        );
    }
}

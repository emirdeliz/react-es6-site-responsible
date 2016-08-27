import React, { Component } from 'react';
import { Image } from 'react-bootstrap';

export default class CardBenefits extends Component {
    render() {
        return (
            <div className="card-benefits pulse">
                <Image src={ '/imgs/' + this.props.image }/>
                <div className="title"><span>{ this.props.title }</span></div>
                <div className="sub-title"><span>{ this.props.subTitle }</span></div>
            </div>
        );
    }
}

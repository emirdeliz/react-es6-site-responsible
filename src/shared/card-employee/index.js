import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import SharedSocial from '../shared-social';

export default class CardEmployee extends Component {
    render() {
        return (
            <div className="card-employee">
                <Image className={ this.props.style } src={ '/imgs/' + this.props.image }
                  onMouseEnter={ this.props.mouseEnter }
                  onMouseOut={ this.props.mouseOut } />
                <div className="name"><span>{ this.props.name }</span></div>
                <div className="localization"><span>{ this.props.localization }</span></div>
                <div className="testimony"><span>{ this.props.testimony }</span></div>
                <SharedSocial themeIcon={ 'gray' }/>
            </div>
        );
    }
}

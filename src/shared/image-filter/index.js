import React, { Component } from 'react';
import { Image } from 'react-bootstrap';

export default class ImageFilter extends Component {
    render() {
        return (
            <div className="image-filter">
                <div className="container-image">
                    <Image src={ '/imgs/' + this.props.image }/>
                    <div className="container-text">
                        <div>
                            <span className="project">{ this.props.project }</span>
                            <span className="description">{ this.props.description }</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

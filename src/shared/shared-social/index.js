import React, { Component } from 'react';
import { ShareButtons } from 'react-share';
import { Image } from 'react-bootstrap';

const { FacebookShareButton, LinkedinShareButton, TwitterShareButton } = ShareButtons;

export default class SharedSocial extends Component {
    render() {
        const shareUrl = 'github.com'; /* Passar  aqui caminho para o link compartilhado */
        const title = 'Bravi site';
        const themeIcon = this.props.themeIcon;

        return (
            <div className="shared-social">
                <FacebookShareButton url={ shareUrl } title={ title }>
                    <Image className={ themeIcon } src={ '/imgs/icon-facebook-' + themeIcon + '.png' } />
                </FacebookShareButton>
                <TwitterShareButton url={ shareUrl } title={ title }>
                    <Image className={ themeIcon }  src={ '/imgs/icon-twitter-' + themeIcon + '.png' } />
                </TwitterShareButton>
                <LinkedinShareButton url={ shareUrl } title={ title }>
                    <Image className={ themeIcon }  src={ '/imgs/icon-linkedin-' + themeIcon + '.png' } />
                </LinkedinShareButton>
            </div>
        );
    }
}

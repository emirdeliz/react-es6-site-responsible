import React, { Component } from 'react';

import Header from '../header';
import Benefits from '../benefits';
import Features from '../features';
import OurTeam from '../our-team';
import Testimony from '../testimony';
import Download from '../download';
import Footer from '../footer';

export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <Header />
                <a id={ 'benefits' }><Benefits /></a>
                <a id={ 'features' }><Features /></a>
                <a id={ 'ourTeam' }><OurTeam /></a>
                <a id={ 'testimony' }><Testimony /></a>
                <a id={ 'download' }><Download /></a>
                <Footer />
            </div>
        );
    }
}

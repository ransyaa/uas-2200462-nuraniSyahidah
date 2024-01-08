import React, { Component } from 'react';
import '../styles/header.css'; 
import logo from '../assets/LogoPuskesmas.png'; 

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar bg-peach">
                        <div>
                            <a href="/users" className="navbar-brand">
                                <img
                                    src={logo}
                                    alt="Puskesmas Logo"
                                    className="logo"
                                    style={{ width: '70px', height: 'auto' }}
                                />
                                Puskesmas Nurani Syahidah
                            </a>
                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;

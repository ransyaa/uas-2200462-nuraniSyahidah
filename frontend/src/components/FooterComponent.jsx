import React, { Component } from 'react';
import '../styles/footer.css';


class FooterComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div>
                <footer className="footer">
                    <span className="text-muted">
                        All Rights Reserved 2024 @Puskesmas Nurani Syahidah
                    </span>
                </footer>
            </div>
        );
    }
}

export default FooterComponent;

import React, { Component } from 'react';

class Footer extends Component {
    render() {

        if (this.props.data) {
            var networks = this.props.data.social.map(network => {
                return (
                    <li key={network.name}><a href={network.url}><i className={network.className}>{network.name}</i></a></li>
                )
            })
        }

        return (
            <footer>
                <div>
                    <div>
                        <ul>
                            {networks}
                        </ul>

                        <ul className="copyright">
                            <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;
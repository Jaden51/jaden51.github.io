import React, { Component } from 'react';

class Footer extends Component {
    render() {

        if (this.props.data) {
            var networks = this.props.data.social.map(network => {
                return (
                    <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
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
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;
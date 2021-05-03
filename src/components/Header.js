import React, { Component } from 'react';

class Header extends Component {

    render() {
        if (this.props.data) {
            var data = this.props.data
            var name = data.name;
            var city = data.address.city;
            var networks = data.social.map(network => {
                return (
                    <li key={network.name}>
                        <a href={network.url} target="_blank" rel="noopener noreferrer">
                            <i className={network.className}>{network.name}</i>
                        </a>
                    </li>
                )
            })
        }

        return (
            <header>

                <nav>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#resume">Resume</a></li>
                        <li><a href="#portfolio">Projects</a></li>
                    </ul>
                </nav>

                <div>
                    <div>
                        <h1>I'm {name}</h1>
                        <h3>I'm a second year Computer Science (hopefully) student at the University of {city}. I am an
                            avid learner who loves imagining and creating ideas using technology.</h3>
                        <hr />
                        <ul className="social">
                            {networks}
                        </ul>
                    </div>
                </div>

            </header>
        )
    }
}

export default Header;
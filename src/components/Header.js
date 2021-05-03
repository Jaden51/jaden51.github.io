import React, { Component } from 'react';

class Header extends Component {

    render() {
        if (this.props.data) {
            var data = this.props.data
            var name = data.name;
            var networks = data.social.map(network => {
                return (
                    <li key={network.name}>
                        <a href={network.url} target="_blank" rel="noopener noreferrer">
                            <i className={network.className}></i>
                        </a>
                    </li>
                )
            })
        }

        return (
            <section id="intro">

                <div className="intro-overlay"></div>
                <div className="intro-content">
                    <div class="row">

                        <div lcass="col-twelve">
                            <h5>Hello there!</h5>
                            <h1>I'm {name}</h1>
                            <p className="intro-position">
                                <span>Student</span>
                                <span>Aspiring Software Developer</span>
                            </p>

                            <a class="button stroke smoothscroll" href="#about" title="">More About Me</a>
                        </div>
                    </div>
                </div>

                <ul className="intro-social">
                    {networks}
                </ul>

            </section>
        )
    }
}

export default Header;
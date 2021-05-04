import React, { Component } from 'react';
import $ from 'jquery';

class Header extends Component {

    render() {

        $('.smoothscroll').on('click', function (e) {

            e.preventDefault();

            var target = this.hash,
                $target = $(target);

            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, 800, 'swing', function () {
                window.location.hash = target;
            });

        });
        
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
                    <div className="row">

                        <div className="col-twelve">
                            <h5>Hello there!</h5>
                            <h1>I'm {name}</h1>
                            <p className="intro-position">
                                <span>Student</span>
                                <span>Aspiring Software Developer</span>
                            </p>

                            <a className="button stroke smoothscroll" href="#about" title="">More About Me</a>
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
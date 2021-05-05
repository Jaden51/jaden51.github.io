import React, { Component } from 'react';
import $ from 'jquery';

class Footer extends Component {
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
            var networks = this.props.data.social.map(network => {
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
            <footer>
                <div className="row">

                    <div className="col-six tab-full pull-right social">

                        <ul className="footer-social">
                            {networks}
                        </ul>

                    </div>

                    <div className="col-six tab-full">
                        <div className="copyright">
                            <span>Styled by <a href="http://www.styleshout.com/">styleshout</a></span>
                        </div>
                    </div>

                    <div id="go-top">
                        <a className="smoothscroll" title="Back to Top" href="#intro"><i className="fa fa-long-arrow-up"></i></a>
                    </div>

                </div>
            </footer>
        )
    }
}

export default Footer;
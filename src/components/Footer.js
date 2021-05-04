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
                <div class="row">

                    <div class="col-six tab-full pull-right social">

                        <ul class="footer-social">
                            {networks}
                        </ul>

                    </div>

                    <div class="col-six tab-full">
                        <div class="copyright">
                            <span>Styled by <a href="http://www.styleshout.com/">styleshout</a></span>
                        </div>
                    </div>

                    <div id="go-top">
                        <a class="smoothscroll" title="Back to Top" href="#intro"><i class="fa fa-long-arrow-up"></i></a>
                    </div>

                </div>
            </footer>
        )
    }
}

export default Footer;
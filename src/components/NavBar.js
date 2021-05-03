import React, { Component } from 'react';
import $ from 'jquery';

class NavBar extends Component {

    toggleMenu() {
        var toggleButton = $('.menu-toggle'),
            nav = $('.main-navigation');

        // toggle button
        toggleButton.on('click', function (e) {

            e.preventDefault();
            toggleButton.toggleClass('is-clicked');
            nav.slideToggle();

        });

        // nav items
        nav.find('li a').on("click", function () {

            // update the toggle button 		
            toggleButton.toggleClass('is-clicked');
            // fadeout the navigation panel
            nav.fadeOut();

        });
    }

    render() {

        this.toggleMenu();

        return (
            <header>
                <div className="row">
                    <div className="top-bar">
                        <a className="menu-toggle" href="#"><span>Menu</span></a>

                        <nav id="main-nav-wrap">
                            <ul className="main-navigation">
                                <li className="current"><a className="smoothscroll" href="#intro" title="">Home</a></li>
                                <li><a className="smoothscroll" href="#about" title="">About</a></li>
                                <li><a className="smoothscroll" href="#resume" title="">Resume</a></li>
                                <li><a className="smoothscroll" href="#portfolio" title="">Projects</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        )
    }
}

export default NavBar;
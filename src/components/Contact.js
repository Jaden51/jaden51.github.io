import React, { Component } from 'react';

class Contact extends Component {
    render() {

        if (this.props.data) {
            var data = this.props.data;
            var city = data.address.city;
            var state = data.address.state;
            var email = data.email;
        }

        return (
            <section id="contact">

                <div className="row section-intro">
                    <div className="col-twelve">

                        <h5>Contact</h5>
                        <h1>I'd Love To Hear From You.</h1>

                    </div>
                </div>

                <div className="row contact-info">
                    <div className="col-four tab-full">
                        <div className="icon">
                            <i className="icon-pin"></i>
                        </div>

                        <h5>Where to find me</h5>
                        <p>University of {state}<br />{city}, BC</p>

                    </div>

                    <div className="col-four tab-full collapse">

                        <div className="icon">
                            <i className="icon-mail"></i>
                        </div>

                        <h5>Email Me At</h5>
                        <p>{email}</p>

                    </div>

                    <div className="col-four tab-full">

                        <div className="icon">
                            <i className="icon-phone"></i>
                        </div>

                        <h5>Call Me At</h5>
                        <p>Phone: (905) 806 0672</p>

                    </div>

                </div>
            </section>
        )
    }
}

export default Contact;
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

                <div class="row section-intro">
                    <div class="col-twelve">

                        <h5>Contact</h5>
                        <h1>I'd Love To Hear From You.</h1>

                    </div>
                </div>

                <div className="row contact-info">
                    <div className="col-four tab-full">
                        <div class="icon">
                            <i class="icon-pin"></i>
                        </div>

                        <h5>Where to find me</h5>
                        <p>University of {state}<br />{city}, BC</p>

                    </div>

                    <div class="col-four tab-full collapse">

                        <div class="icon">
                            <i class="icon-mail"></i>
                        </div>

                        <h5>Email Me At</h5>
                        <p>{email}</p>

                    </div>

                    <div class="col-four tab-full">

                        <div class="icon">
                            <i class="icon-phone"></i>
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
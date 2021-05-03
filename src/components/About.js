import React, { Component } from 'react';

class About extends Component {
    render() {
        if (this.props.data) {
            var data = this.props.data
            var name = data.name;
            var bio = data.bio;
            var city = data.address.city;
            var state = data.address.state;
            var phone = data.phone;
            var email = data.email;
            var resumeDownload = data.resumedownload;
        }

        return (
            <section>
                <div>
                    <div>
                        <h2>About Me</h2>
                        <p>{bio}</p>
                        <div>
                            <div>
                                <h2>Contact Details</h2>
                                <p>
                                    <span>{name}</span><br />
                                    <span><br />{city} {state}</span><br />
                                    <span>{phone}</span><br />
                                    <span>{email}</span>
                                </p>
                            </div>
                            <div>
                                <p>
                                    <a href={resumeDownload} target="_blank" rel="noopener noreferrer">
                                        <i className="fa fa-download">Download Resume</i>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default About;
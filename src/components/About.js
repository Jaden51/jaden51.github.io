import React, { Component } from 'react';

class About extends Component {
    render() {
        if (this.props.data) {
            var data = this.props.data
            var name = data.name;
            var birthday = data.birthdate;
            var website = data.website;
            var bio = data.bio;
            var email = data.email;
            var resumeDownload = data.resumedownload;
        }

        return (
            <section id="about" className="grey-section">
                <div className="row section-intro">
                    <div className="col-twelve">

                        <h5>About</h5>
                        <h1>Let Me Introduce Myself</h1>

                        <div className="intro-info">

                            <img src="images/profile-pic.jpg" alt={name}></img>

                            <p className="lead">{bio}</p>
                        </div>
                    </div>
                </div>

                <div className="row about-content">
                    <div className="col-six tab-full">
                        <p>
                            {bio}
                        </p>
                    </div>
                    <div className="col-six tab-full">
                        <ul className="info-list">
                            <li>
                                <strong>Name:</strong>
                                <span>{name}</span>
                            </li>
                            <li>
                                <strong>Birth Date:</strong>
                                <span>{birthday}</span>
                            </li>
                            <li>
                                <strong>Website:</strong>
                                <span>{website}</span>
                            </li>
                            <li>
                                <strong>Email:</strong>
                                <span>{email}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="row button-section">
                    <div className="col-twelve">
                        <a href={resumeDownload} title="Download Resume" className="button button-primary" target="_blank" rel="noopener noreferrer">
                            Download Resume
                        </a>
                    </div>
                </div>

            </section >
        )
    }
}

export default About;
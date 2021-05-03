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
            <section id="about">
                <div class="row section-intro">
                    <div class="col-twelve">

                        <h5>About</h5>
                        <h1>Let Me Introduce Myself</h1>

                        <div class="intro-info">

                            <img src="images/profile-pic.jpg" alt={name}></img>

                            <p class="lead">{bio}</p>
                        </div>
                    </div>
                </div>

                <div class="row about-content">
                    <div class="col-six tab-full">
                        <p>
                            {bio}
                        </p>
                    </div>
                    <div class="col-six tab-full">
                        <ul class="info-list">
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

                <div class="row button-section">
                    <div class="col-twelve">
                        <a href={resumeDownload} title="Download Resume" class="button button-primary" target="_blank" rel="noopener noreferrer">
                            Download Resume
                        </a>
                    </div>
                </div>

            </section >
        )
    }
}

export default About;
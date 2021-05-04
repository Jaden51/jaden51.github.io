import React, { Component } from 'react';

class About extends Component {
    render() {
        if (this.props.data.main) {
            var data = this.props.data.main
            var name = data.name;
            var birthday = data.birthdate;
            var website = data.website;
            var bio = data.bio;
            var email = data.email;
            var resumeDownload = data.resumedownload;
            var skills = this.props.data.resume.skills.map(skill => {
                return (
                    <li>
                        <div className={"progress percent" + skill.percent}><span>{skill.percent}%</span></div>
                        <strong>{skill.name}</strong>
                    </li>
                )
            });
        }

        return (
            <section id="about" className="grey-section">
                <div className="row section-intro">
                    <div className="col-twelve">

                        <h5>About</h5>
                        <h1>Let Me Introduce Myself</h1>

                        <div className="intro-info">
                            <p className="lead">{bio}</p>
                        </div>
                    </div>
                </div>

                <div className="row about-content">

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
                    <div class="col-six tab-full">

                        <h3>Skills</h3>

                        <ul class="skill-bars">
                            {skills}
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
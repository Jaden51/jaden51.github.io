import React, { Component } from 'react';

class Resume extends Component {
    render() {

        if (this.props.data) {
            var education = this.props.data.education.map(education => {
                return (
                        <div key={education.school} className="timeline-block">

                            <div className="timeline-ico">
                                <i className="fa fa-graduation-cap"></i>
                            </div>

                            <div className="timeline-header">
                                <h3>{education.degree}</h3>
                                <p>{education.graduated}</p>
                            </div>

                            <div className="timeline-content">
                                <h4>{education.school}</h4>
                                <p>{education.description}</p>
                            </div>

                        </div>
                )
            })

            var work = this.props.data.work.map(work => {
                return (
                    <div key={work.title} className="timeline-block">

                        <div className="timeline-ico">
                            <i className="fa fa-briefcase"></i>
                        </div>

                        <div className="timeline-header">
                            <h3>{work.title}</h3>
                            <p>{work.years}</p>
                        </div>

                        <div className="timeline-content">
                            <h4>{work.company}</h4>
                            <p>{work.description}</p>
                        </div>

                    </div>
                )
            })

            var skills = this.props.data.skills.map(skill => {
                var projectImage = 'images/tech/' + skill.image;
                return (
                    <div key={skill.name} className="columns feature-item">
                        <img className='skill' alt={skill.name} src={projectImage} />
                        <h5>{skill.name}</h5>
                        <p>{skill.description}</p>
                    </div>
                )
            })

            var message = this.props.data.skillmessage;
        }

        return (
            <section id="resume" className="white-section">
                <div className="row section-intro">
                    <div className="col-twelve">

                        <h5>Resume</h5>
                        <h1>My Credentials</h1>

                        <p className="lead">{message}</p>

                        <div className="row resume-timeline">
                            <div className="col-twelve resume-header">
                                <h2>Education</h2>
                            </div>
                            <div className="col-twelve">
                                <div className="timeline-wrap">
                                    {education}
                                </div>
                            </div>
                        </div>

                        <div className="row resume-timeline">
                            <div className="col-twelve resume-header">
                                <h2>Work Experience</h2>
                            </div>
                            <div className="col-twelve">
                                <div className="timeline-wrap">
                                    {work}
                                </div>
                            </div>
                        </div>

                    </div>
                    <h1><span>Favourite Tech</span></h1>
                </div>
                <div className="row">
                    <div>
                        <ul className="grid-container">
                            {skills}
                        </ul>
                    </div>
                </div>
            </section>
        )

    }
}

export default Resume;
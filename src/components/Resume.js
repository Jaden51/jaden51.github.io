import React, { Component } from 'react';

class Resume extends Component {
    render() {

        if (this.props.data) {
            var education = this.props.data.education.map(education => {
                return (
                    <div key={education.school} className="timeline-wrap">
                        <div className="timeline-block">
                            <div className="timeline-ico">
                                <i className="fa fa-briefcase"></i>
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
                    </div>
                )
            })

            var skills = this.props.data.skills.map(skill => {
                var projectImage = 'images/' + skill.image;
                return (
                    <div key={skill.name} className="columns feature-item">
                        <img className='skill' alt={skill.name} src={projectImage} />
                        <h5>{skill.name}</h5>
                        <p>{skill.description}</p>
                    </div>
                )
            })
        }

        return (
            <section id="resume" className="white-section">
                <div className="row section-intro">
                    <div className="col-twelve">

                        <h5>Resume</h5>
                        <h1>My Credentials</h1>

                        <p className="lead">
                            Lorem ipsum Do commodo in proident enim in dolor cupidatat adipisicing dolore officia
                            nisi aliqua incididunt Ut veniam lorem ipsum Consectetur ut in in eu do.
                        </p>

                        <div className="row resume-timeline">
                            <div className="col-twelve resume-header">
                                <h2>Education</h2>
                            </div>
                            <div className="col-twelve">
                                {education}
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
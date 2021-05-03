import React, { Component } from 'react';

class Resume extends Component {
    render() {

        if (this.props.data) {
            var education = this.props.data.education.map(education => {
                return (
                    <div key={education.school}><h3>{education.school}</h3>
                        <p>{education.degree}<span>&bull;</span><em>{education.graduated}</em></p>
                        <p>{education.description}</p>
                    </div>
                )
            })
            var skills = this.props.data.skills.map(skills => {
                return (
                    <div key={skills.name}>
                        <h5>{skills.name}</h5>
                        <p>{skills.description}</p>
                    </div>
                )
            })
        }

        return (
            <section>
                <div>
                    <div>
                        <h1><span>Education</span></h1>
                    </div>

                    <div>
                        <div>
                            <div>
                                {education}
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <ul>{skills}</ul>
                </div>
            </section>
        )

    }
}

export default Resume;
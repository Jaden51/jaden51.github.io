import React, { Component } from 'react';

class Projects extends Component {
    render() {

        if (this.props.data) {
            var projects = this.props.data.projects.map(project => {
                var projectImage = 'images/portfolio/' + project.image;
                return (
                    <div key={project.title}>
                        <div>
                            <a href={project.url} title={project.title}>
                                <img alt={project.title} src={projectImage} />
                                <div>
                                    <div>
                                        <h5>{project.title}</h5>
                                    </div>
                                </div>
                                <div><i></i></div>
                            </a>
                        </div>
                    </div>
                )
            })
        }

        return (
            <section>
                <div>
                    <div>
                        <h1>My Projects</h1>

                        <div>
                            {projects}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Projects;
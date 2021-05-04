import React, { Component } from 'react';

class Projects extends Component {
    render() {

        if (this.props.data) {
            var projects = this.props.data.projects.map(project => {
                var projectImage = 'images/portfolio/' + project.image;
                return (
                    <div className="bgrid folio-item">
                        <div className="item-wrap">
                            <img src={projectImage} alt="Liberty" />
                            <a href={project.url} className="overlay">
                                <div className="folio-item-table">
                                    <div className="folio-item-cell">
                                        <h3 className="folio-title">{project.title}</h3>
                                        <span className="folio-types">
                                            {project.description}
                                        </span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                )
            })
        }

        return (
            <section id="portfolio">
                <div className="row section-intro">
                    <div class="col-twelve">
                        <h5>Portfolio</h5>
                        <h1>Check Out My Work</h1>

                        <p class="lead">
                            Lorem ipsum Do commodo in proident enim in dolor cupidatat adipisicing dolore officia
                            nisi aliqua incididunt Ut veniam lorem ipsum Consectetur ut in in eu do.
                        </p>
                    </div>
                </div>


                <div className="row portfolio-content">
                    <div className="col-twelve">
                        <div id="folio-wrapper" className="block-1-2 block-mob-full stack">
                            {projects}
                        </div>
                    </div>
                </div>
            </section >
        )
    }
}

export default Projects;
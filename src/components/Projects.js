import React, { Component } from 'react';
import PROJECTS from '../data/projects';
import styled from 'styled-components';

class Project extends Component {
    render() {
        const { title, image, description, link } = this.props.project;

        return (
            <div className='block'>
                <h3 className="header">{title}</h3>
                <img src={image} alt='profile' className="image"></img>
                <p>{description}</p>
                <a className='link' href={link} target='_blank' rel='noopener noreferrer'>{link}</a>
            </div>
        )
    }
}

class Projects extends Component {
    render() {
        return (
            <StyledProjects>
                <div>
                    <h2 className="header">Highlighted Projects</h2>
                    <div>
                        {
                            PROJECTS.map(PROJECT => {
                                return (
                                    <Project key={PROJECT.id} project={PROJECT} />
                                );
                            })
                        }
                    </div>
                </div>
            </StyledProjects>
        )
    }
}

const StyledProjects = styled.div`
    .h {
        font-family: 'Economica', sans-serif;
    }

    .image {
        width: 200px;
        height: 120px;
    }

    .block {
        display: inline-block;
        margin: 10px;
        width: 300px;
    }

    .link {
        display: table-cell;
    }
`;

export default Projects; 
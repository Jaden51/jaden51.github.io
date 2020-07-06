import React, { Component } from 'react';
import Projects from './components/Projects';
import SocialProfiles from './components/SocialProfiles';
import Title from './components/Title';
import styled from 'styled-components';
import profile from './assets/profile.png';

class App extends Component {
    state = { displayBio: false };

    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio })
    }

    render() {
        return (
            <StyledApp className="StyledApp">
                <div>
                    <img src={profile} alt='profile' className='profile' />
                    <h1 className="header">Hello!</h1>
                    <p>My name is Jaden.</p>
                    <Title />
                    <p>Always looking for new projects to work on!</p>
                    {
                        this.state.displayBio ? (
                            <div>
                                <p>I live in Canada.</p>
                                <p>My favourite language is JavaScrit.</p>
                                <p>Besides coding, I also love video games and baseball.</p>
                                <button className='button' onClick={this.toggleDisplayBio}>Show Less</button>
                            </div>
                        ) : (
                                <div>
                                    <button className='button' onClick={this.toggleDisplayBio}>Read More</button>
                                </div>
                            )
                    }
                    <hr />
                    <Projects />
                    <hr />
                    <SocialProfiles />
                </div>
            </StyledApp>
        )
    }
}

export default App;

const StyledApp = styled.div`
    text-align: center;
    font-size: 20px;
    padding: 1.5%;
    font-family: 'Roboto Condensed', sans-serif;

    .header {
        font-family: 'Economica', sans-serif;
    }

    .profile {
        width: 200px;
        height: 200px;
        border-radius: 100px;
    }

    .button {
        font-family: 'Roboto Condensed', sans-serif;
        background-color: #008CBA;
        border: none;
        color: white;
        padding: 20px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
        border-radius: 8px;
    }
`;
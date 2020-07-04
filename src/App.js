import React, { Component, Fragment } from 'react';
import Projects from './components/Projects';
import SocialProfiles from './components/SocialProfiles';
import Title from './components/Title';
import Quotes from './components/Quotes';
import styled from 'styled-components';
import profile from './assets/profile.png';

class App extends Component {
    state = { displayBio: false };

    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio })
    }

    render() {
        return (
            <Fragment>
                <StyledApp className="StyledApp">
                    <div>
                        <img src={profile} alt='profile' className='profile'/>
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
                                    <button onClick={this.toggleDisplayBio}>Show Less</button>
                                </div>
                            ) : (
                                    <div>
                                        <button onClick={this.toggleDisplayBio}>Read More</button>
                                    </div>
                                )
                        }
                        <hr />
                        <Projects />
                        <hr />
                        <SocialProfiles />
                        <hr />
                        <Quotes />
                    </div>
                </StyledApp>
            </Fragment>

        )
    }
}

const StyledApp = styled.div`
    text-align: center;
    font-size: 20px;
    padding: 2.5%;
    font-family: 'Roboto Condensed', sans-serif;

    .header {
        font-family: 'Economica', sans-serif;
    }

    .profile {
        width: 200px;
        height: 200px;
        border-radius: 100px;
    }
`;

export default App;
import React, { Component } from 'react';
import SOCIAL_PROFILES from '../data/socialProfiles';
import styled from 'styled-components';

class SocialProfile extends Component {
    render() {
        const { link, image } = this.props.profile;

        return (
            <span>
                <a href={link} target='_blank' rel='noopener noreferrer'>
                    <img src={image} alt='profile' style={{ width: 40, height: 40, margin: 10 }}></img>
                </a>
            </span>
        )
    }
}

class SocialProfiles extends Component {
    render() {
        return (
            <StyledSocialProfiles>
                <div>
                    <h2 className="header">Connect with me!</h2>
                    <div>
                        {
                            SOCIAL_PROFILES.map(PROFILE => {
                                return (
                                    <SocialProfile key={PROFILE.id} profile={PROFILE} />
                                );
                            })
                        }
                    </div>
                </div>
            </StyledSocialProfiles>
        )
    }
}

const StyledSocialProfiles = styled.div`
    .header {
        font-family: 'Economica', sans-serif;
    }
`;

export default SocialProfiles;
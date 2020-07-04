import React, { Component } from 'react';
import styled from 'styled-components';

const TITLES = [
    'an aspiring software engineer',
    'a sports lover',
    'an avid learner'
];

class Title extends Component {
    state = { titleIndex: 0, fadeIn: true }; // state object containing two properties

    // animate the titles (triggers extra rendering and called when something is inserted into DOM
    componentDidMount() {
        // switch the state of the fade from true to false after 2 seconds
        this.timeout = setTimeout(() => this.setState({ fadeIn: false}), 2000); 

        // call the animate titles function
        this.animateTitles();
    }

    // this method is called when a component is being removed from the DOM
    componentWillUnmount() { 
        // clear the title interval to prevent unmounted items from getting setState (prevents memomry leaks)
        clearInterval(this.titleInterval);
        clearTimeout(this.timeout);
    }

    // use arrow functions when changing states
    animateTitles = () => {
        this.titleInterval = setInterval(() => {
            const titleIndex = (this.state.titleIndex + 1) % TITLES.length;

            this.setState({ titleIndex, fadeIn: true }); // change the state of the property
            
            this.timeout = setTimeout(() => this.setState({ fadeIn: false}), 2000);
        }, 4000);
    }

    render() { // render the title
        // make variables for the props in state object
        const { fadeIn, titleIndex } = this.state

        // get the title at the rotating index
        const title = TITLES[titleIndex];

        return (
            <StyledTitle>
                <p className={fadeIn ? 'title-fade-in' : 'title-fade-out'}>I am {title}</p>
            </StyledTitle>
        )
    }
}

export default Title;

const StyledTitle = styled.div`
    .title-fade-out {
        opacity: 0;
        animation-name: fade-out;
        animation-duration: 2s;
    }

    .title-fade-in {
        opacity: 100;
        animation-name: fade-in;
        animation-duration: 2s;
    }

    @keyframes fade-out {
        from {opacity: 100}
        to {opcaity: 0}
    }

    @keyframes fade-in {
        from {opacity: 0}
        to {opacity: 100}
    }
`;
import React, { Component } from 'react';

class Quotes extends Component {
    state = { quote: {} };

    // best practice to place asyncrhous code and fetches in componentDidMount (todo)
    componentDidMount() {
        fetch('')
        .then(response => response.json)
        .then(json => console.log('json', json));
    }

    render() {
        return (
            <div>
                <h2>Highlighted Quote</h2>
            </div>
        )
    }
}

export default Quotes;
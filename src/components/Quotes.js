import React, { Component } from 'react';
import styled from 'styled-components';

class Quotes extends Component {
  state = { quote: {} };

  componentDidMount() {
    const url = 'https://api.quotable.io/random';
    fetch(url)
      .then(response => response.json())
      .then(json => this.setState({ quote: json }))
      .catch(error => alert(error.message));
  }

  render() {
    const { content, author } = this.state.quote;

    return (
      <StyledQuotes>
        <div>
          <h2>Highlighted Quote</h2>
          <p className='quote'>{content} - <em>{author}</em></p>
        </div>
      </StyledQuotes>
    )
  }
}

export default Quotes;

const StyledQuotes = styled.div`
  .quote {
    margin: 20px;
  }
`;
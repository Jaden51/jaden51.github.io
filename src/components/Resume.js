import React, { Component } from 'react';

class Resume extends Component {
    render() {

        if (this.props.data) {
            var education = this.props.data.education.map(education => {
                return <div key={education.school}><h3>{education.school}</h3></div>
            })
        }

    }
}
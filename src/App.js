import React, { Component } from 'react';
import $ from 'jquery';
import NavBar from './components/NavBar';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

class App extends Component {
    state = { resumeData: {} };

    getResumeData() {
        $.ajax({
            url: '/resumeData.json',
            dataType: 'json',
            cache: false,
            success: function (data) {
                this.setState({ resumeData: data });
            }.bind(this),
            error: function (xhr, status, err) {
                console.log(err);
                alert(err);
            }
        });
    }

    componentDidMount() {
        this.getResumeData();
    }

    render() {
        return (
            <div className="App">
                <NavBar />
                <Header data={this.state.resumeData.main} />
                <About data={this.state.resumeData} />
                <Resume data={this.state.resumeData.resume} />
                <Projects data={this.state.resumeData.portfolio} />
                <Contact data={this.state.resumeData.main}/>
                <Footer data={this.state.resumeData.main} />
            </div>
        )
    }
}

export default App;
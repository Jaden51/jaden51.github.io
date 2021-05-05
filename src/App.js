import React, { Component } from 'react';
import { resumeData } from './data/resumeData';
import NavBar from './components/NavBar';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

class App extends Component {
    state = { data: {} };

    componentDidMount() {
        this.setState({ data: resumeData })
    }

    render() {

        return (
            <div className="App">
                <NavBar />
                <Header data={this.state.data.main} />
                <About data={this.state.data} />
                <Resume data={this.state.data.resume} />
                <Projects data={this.state.data.portfolio} />
                <Contact data={this.state.data.main}/>
                <Footer data={this.state.data.main} />
            </div>
        )
    }
}

export default App;
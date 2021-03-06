import React, { Component } from "react";
// import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
// import Header from "./Components/Header";
// import Footer from "./Components/Footer";
// import About from "./Components/About";
// import Resume from "./Components/Resume";
// import Contact from "./Components/Contact";
// import Portfolio from "./Components/Portfolio";
// import Product from "./Components/Product";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {}
    };

    // ReactGA.initialize("UA-110570651-1");
    // ReactGA.pageview(window.location.pathname);
  }

  getResumeData() {
    $.ajax({
      url: "https://nordicgiant2.github.io/react-nice-resume-page/resumeData.json",
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
    // return {}
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        {/* <Header data={this.state.resumeData.main} /> */}
        {/* <About data={this.state.resumeData.main} /> */}
        {/* <Resume data={this.state.resumeData.resume} /> */}
        {/* <Product /> */}
        {/* <Portfolio data={this.state.resumeData.portfolio} /> */}
        {/* <Contact data={this.state.resumeData.main} /> */}
        {/* <Footer data={this.state.resumeData.main} /> */}
        <div style={{ width: "100%", height: "100vh", display: "flex", alignItems: 'center', justifyContent: 'center' }}>
          <h1 style={{color:'white',fontSize:'50px'}}>Coming Soon</h1>
        </div>
      </div>
    );
  }
}

export default App;

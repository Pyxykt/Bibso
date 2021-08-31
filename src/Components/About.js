import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    // const name = this.props.data.name;
    // const profilepic = "images/" + this.props.data.image;
    // const bio = this.props.data.bio;
    // const street = this.props.data.address.street;
    // const city = this.props.data.address.city;
    // const state = this.props.data.address.state;
    // const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const email = this.props.data.email;
    // const resumeDownload = this.props.data.resumedownload;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              {/* <img
                className="profile-pic"
                src={profilepic}
                alt="Nordic Giant Profile Pic"
              /> */}
            </div>
            <div className="nine columns main-col">
              <h2>About Us</h2>

              <p>Bibso Pharmaceutical Private Limited is a Private incorporated on 27 July 2020. It is classified as Non-govt company and is registered at Registrar of Companies, Jharkhand. Its authorized share capital is Rs. 1,500,000 and its paid up capital is Rs. 100,000. It is inolved in Manufacturing n.e.c.

Bibso Pharmaceutical Private Limited's Annual General Meeting (AGM) was last held on N/A and as per records from Ministry of Corporate Affairs (MCA), its balance sheet was last filed on N/A.

Directors of Bibso Pharmaceutical Private Limited are Soni Choudhary and Bibhash Kumar Choudhary.</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>Bibso Pharmaceutical PVT. LTD.</span>
                    <br />
                    <span>
                       PLOT NO - 353, 1st Floor 
                      <br />
                      Industrial Area, Phase -1 
                      <br/>
                      Panchkula Haryana - 134113
                    </span>
                    <br />
                    <span>9472708065</span>
                    <br />
                    <span>bibsojsr@gmail.com</span>
                  </p>
                </div>
                <div className="columns download">
                  {/* <p>
                    <a href={resumeDownload} className="button">
                      <i className="fa fa-download"></i>Download Resume
                    </a>
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;

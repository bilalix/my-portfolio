import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";

let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;

      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
            <Zmage alt={projects.title} src={projectImage} />
            <div style={{ textAlign: "center" }}>
              <h5>
                <a href={projects.url_live} target="_blank" rel="noreferrer">{projects.title}</a>
              </h5>
              <a href={projects.url_code} target="_blank" rel="noreferrer">Source Code</a>
              <div style={{ textAlign: "center" }}>{projects.description}</div>
            </div>
            
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My Works</h1>

              <div
                id="portfolio-wrapper"
                className="bgrid-halves s-bgrid-halves cf"
              >
                {projects}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;

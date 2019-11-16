import React from "react";

const Landing = props => (
  <section className="landing">
    <div className="dark-overlay">
      <div className="landing-inner">
        <h1 className="x-large">Bauhaus Shop</h1>
        <p className="lead">Find the thing that architecture interests you</p>
        <div className="buttons">
          <a href="register.html" className="btn btn-primary">
            Sign Up
          </a>
          <a href="login.html" className="btn btn-light">
            Login
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Landing;

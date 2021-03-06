import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../../App.css';

class Landing extends Component {
  render() {
    return (
      <div>
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <br />
            <div className="col s6">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Register
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large btn-flat waves-effect white black-text"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
        <br />
      </div>
        <div>
          <h5 className="HomeDescription">Login/Register to book a VR session at Perth's best VR studio</h5>
        </div>

      </div>
    );
  }
}

export default Landing;

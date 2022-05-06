import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      lastName: "",
      email: "",
      phone: 0,
      streetNumber: 0,
      streetName: "",
      suburb: "",
      postCode: 0,
      age: 0,
      password: "",
      password2: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      lastName: this.state.lastName,
      email: this.state.email,
      phone: this.state.phone,
      streetNumber: this.state.streetNumber,
      streetName: this.state.streetName,
      suburb: this.state.suburb,
      postCode: this.state.postCode,
      age: this.state.age,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col s8 offset-s2">
            <Link to="/" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i> Back to
              home
            </Link>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Register</b> below
              </h4>
              <p className="grey-text text-darken-1">
                Already have an account? <Link to="/login">Log in</Link>
              </p>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.name}
                  error={errors.name}
                  id="name"
                  type="text"
                  className={classnames("", {
                    invalid: errors.name
                  })}
                />
                <label htmlFor="name">First Name</label>
                <span className="red-text">{errors.name}</span>
              </div>
              <div className="input-field col s12">
                <input 
                  onChange={this.onChange}
                  value={this.state.lastName}
                  error={errors.lastName}
                  id="last name"
                  type="text"
                  className={classnames("", {
                    invalid: errors.lastName
                  })}
                  />
                  <label htmlFor="lastName">Last Name</label>
                  <span className="red-text">{errors.lastName}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className={classnames("", {
                    invalid: errors.email
                  })}
                />
                <label htmlFor="email">Email</label>
                <span className="red-text">{errors.email}</span>
              </div>
              <div className="input-field col s12">
                {/* Phone */}
                <input
                  onChange={this.onChange}
                  value={this.state.phone}
                  error={errors.phone}
                  id="phone"
                  type="number"
                  className={classnames("", {
                    invalid: errors.phone
                  })}
                />
                <label htmlFor="phone">phone</label>
                <span className="red-text">{errors.phone}</span>
              </div>
              <div className="input-field col s12">
                {/* Street number */}
                <input
                  onChange={this.onChange}
                  value={this.state.streetNumber}
                  error={errors.streetNumber}
                  id="streetNumber"
                  type="number"
                  className={classnames("", {
                    invalid: errors.streetNumber
                  })}
                />
                <label htmlFor="streetNumber">Street Number</label>
                <span className="red-text">{errors.streetNumber}</span>
              </div>
              <div className="input-field col s12">
                {/* street name */}
                <input
                  onChange={this.onChange}
                  value={this.state.streetName}
                  error={errors.streetName}
                  id="streetName"
                  type="text"
                  className={classnames("", {
                    invalid: errors.streetName
                  })}
                />
                <label htmlFor="streetName">streetName</label>
                <span className="red-text">{errors.streetName}</span>
              </div>
              <div className="input-field col s12">
                {/* suburb */}
                <input
                  onChange={this.onChange}
                  value={this.state.suburb}
                  error={errors.suburb}
                  id="suburb"
                  type="text"
                  className={classnames("", {
                    invalid: errors.suburb
                  })}
                />
                <label htmlFor="suburb">suburb</label>
                <span className="red-text">{errors.suburb}</span>
              </div>
              <div className="input-field col s12">
                {/* post code */}
                <input
                  onChange={this.onChange}
                  value={this.state.postCode}
                  error={errors.postCode}
                  id="postCode"
                  type="number"
                  className={classnames("", {
                    invalid: errors.postCode
                  })}
                />
                <label htmlFor="postCode">postCode</label>
                <span className="red-text">{errors.postCode}</span>
              </div>
              <div className="input-field col s12">
                {/* age  */}
                <input
                  onChange={this.onChange}
                  value={this.state.age}
                  error={errors.age}
                  id="age"
                  type="number"
                  className={classnames("", {
                    invalid: errors.age
                  })}
                />
                <label htmlFor="age">age</label>
                <span className="red-text">{errors.age}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password
                  })}
                />
                <label htmlFor="password">Password</label>
                <span className="red-text">{errors.password}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  id="password2"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password2
                  })}
                />
                <label htmlFor="password2">Confirm Password</label>
                <span className="red-text">{errors.password2}</span>
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));

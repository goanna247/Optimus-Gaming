import React, { Component, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Link } from "react-router-dom";
import axios from "axios";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const Session = props => (
  <tr>
    <td>{props.session.date}</td>
    <td>{props.session.lengt}</td>
    <td>
      <a href="#" onClick={() => {props.deleteSession(props.session._id)}}>Delete</a>
    </td>
  </tr>
)

class Dashboard extends Component {
  constructor(props) {
    super(props);
    
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeLengt = this.onChangeLengt.bind(this);
    
    this.onSubmit = this.onSubmit.bind(this);
    
    this.deleteSession = this.deleteSession.bind(this);
    
    this.state = { 
    sessions: [],
    date: new Date(),
    lengt: 0
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/sessions')
    .then(response => {
      this.setState({ sessions: response.data })
    })
    .catch((error) => {
      console.log(error);
    })
  }

  onChangeDate(date) {
    this.setState({
      date: date
    })
  }

  onChangeLengt(e) {
    this.setState({
      lengt: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const session = {
      date: Date.now(),
      lengt: this.state.lengt
    }

    console.log(session);

    axios.post('http://localhost:5000/api/sessions/add', session)
    .then(res => console.log(res.data));

    window.location = '#';
  }

  deleteSession(id) {
    axios.delete('http://localhost:5000/api/sessions/'+id)
    .then(response => { console.log(response.data)});

    this.setState({
      sessions: this.state.sessions.filter(el => el._id !== id)
    })
  }

  sessionList() {
    return this.state.sessions.map(currentSession => {
      return <Session session={currentSession} deleteSession={this.deleteSession}/>
    })
  }

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

    return (
      <div>

      <div  className="container valign-wrapper">
        <div className="row">
          <div className="landing-copy col s12 center-align">
            <h4>
              <b>Hey there,</b> {user.name.split(" ")[0]}
            </h4>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
        <div>
        <h3>Bookings:</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Date:</th>
              <th>Length:</th>
            </tr>
          </thead>
          <tbody>
            { this.sessionList() }
          </tbody>
        </table>
      </div>
      <div>
        <h3>Create new booking:</h3>
        <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Date:</label>
                {/* <DatePicker selected={this.state.date} onChange={date => setDate(date)}/> */}
                {/* <input type="date" required value={this.state.date} onChange={this.onChangeDate}/> */}
            </div>
            <div className="form-group">
              <label>Length:</label>
              <input type="number" required className="form-control" value={this.state.lengt} onChange={this.onChangeLengt}/>
            </div>
            <div>
              <input type="submit" value="create new booking" className="btn btn-primary"/>
            </div>
        </form>
      </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);

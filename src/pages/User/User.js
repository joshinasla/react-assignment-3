import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./user.css";

class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userdetail: [],
    };
  }
  componentDidMount() {
    fetch("https://dummy.restapiexample.com/api/v1/employees")
      .then((response) => {
        console.log({ response });
        return response.json();
      })
      .then((data) => {
        console.log({ data });
        this.setState({
          userdetail: data.data,
        });
      });
  }

  render() {
    return (
      <div className="container">
        <div className="emplooye-detail">
          <h2>Employee Details</h2>
          <table>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>SALARY</th>
              <th>AGE</th>
            </tr>
          </table>
          {this.state.userdetail.map((userdetail) => (
            <table>
              <tr>
                <td>{userdetail.id}</td>
                <td className="employee-details">{userdetail.employee_name}</td>
                <td> {userdetail.employee_salary}</td>
                <td> {userdetail.employee_age}</td>
              </tr>
            </table>
          ))}
          <Link to="/" className="home">
            RETURN TO HOME
          </Link>
        </div>
      </div>
    );
  }
}
export default User;

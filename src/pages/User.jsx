import React from "react";
import { Link } from "react-router-dom";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
    };
  }

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/people")
      .then((res) => res.json())
      .then((resParsed) => this.setState({ userData: resParsed }));
  }

  render() {
    return (
      <div>
        <div>
          <h1>user list</h1>
        </div>
        <div className="d-flex flex-wrap justify-content-center">
          {this.state.userData.map((val) => {
            return (
              <div className="card" style={{width: "30rem"}}>
                <div className="card-body">
                    <div className="d-flex flex-wrap justify-content-between">
                  <h3>{val.name}</h3>
                  <Link to={`user/${val.id}`} className="btn btn-primary"> About</Link>
                  </div>
                  <p className="card-text">{val.gender}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default User;

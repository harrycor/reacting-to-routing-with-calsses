import React from "react";

class UserDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
      fetch(`https://ghibliapi.herokuapp.com/people/${this.props.match.params.userid}`)
      .then(res => res.json())
      .then(resParsed => this.setState({data: resParsed}))

  }

  render() {
      return(
          <div className="d-flex justify-content-center mt-5">
          <div className="card" style={{width: "18rem"}}>
              <div className="card-body text-center" style={{width: "18rem"}}>
                  <h1>{this.state.data.name}</h1>
                  <p className="card-text">{this.state.data.gender}</p>
                  <p className="card-text">{this.state.data.age}</p>
                  <p className="card-text">Hair: {this.state.data.hair_color}</p>
                  <button onClick={() => this.props.history.go(-1)} className="btn btn-warning">Go Back</button>
              </div>
          </div>
          </div>
      )
  }
}

export default UserDetails;

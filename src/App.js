import React, { Fragment, Component } from "react";
import "./App.css";

import NavBar from "./components/navbar/Navbar";
import Users from "./components/users/Users";
import Axios from "axios";

class App extends Component {
  state = {
    users: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await Axios.get("https://api.github.com/users");
    this.setState({ users: res.data, loading: false });
    console.log(this.state);
  }

  render() {
    return (
      <Fragment>
        <h1>APPP</h1>
        <NavBar />
        <div className="container">
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </Fragment>
    );
  }
}
export default App;

import React, { Fragment, Component } from "react";
import "./App.css";
import Axios from "axios";

import NavBar from "./components/navbar/Navbar";
import Users from "./components/users/Users";
import Search from "./components/search/Search";

class App extends Component {
  state = {
    users: [],
    loading: false,
  };

  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const res = await Axios.get(
  //     `https://api.github.com/users?client_id={process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret={process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   this.setState({ users: res.data, loading: false });
  //   console.log(this.state);
  // }

  searchUsers = async (text) => {
    console.log("app", text);
    this.setState({ loading: true });
    const res = await Axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({ users: res.data.items, loading: false });
    console.log(res.data.items);
  };

  // clear user from state
  clearUsers = () => this.setState({ users: [] });

  render() {
    const { users, loading } = this.state;
    return (
      <Fragment>
        <h1>APPP</h1>
        <NavBar />
        <div className="container">
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={users.length > 0 ? true : false}
          />
          <Users loading={loading} users={users} />
        </div>
      </Fragment>
    );
  }
}
export default App;

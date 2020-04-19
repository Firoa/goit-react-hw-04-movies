import React, { Component } from "react";
import ListOf from "../../ListOf";
import * as Services from "../../services/services";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }
  componentDidMount() {   
    Services.fetchTrends().then((list) => this.setState({ articles: list }));
  }
  render() {
    return (
      <div>
        <h2>Trending today</h2>
        <ListOf items={this.state.articles} />
      </div>
    );
  }
}

export default HomePage;

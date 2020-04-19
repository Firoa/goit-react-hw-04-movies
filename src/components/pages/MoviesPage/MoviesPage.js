import React, { Component } from "react";
import ListOf from "../../ListOf";
import SearchBar from "../../SearchBar/SearchBar";
import * as Services from "../../services/services";
class MoviesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "batman",
      articles: [],
    };
  }
  componentDidMount() {   
  }
  handleSearch = (searchStr) => {
    this.setState({ query: searchStr });
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      Services.fetchByQuery(this.state.query).then((results) =>
        this.setState({ articles: results })
      );
    }
  }
  render() {
      const {articles} = this.state;
    return (
      <div>
        <SearchBar onSearchSubmit={this.handleSearch} />        
       {articles.length > 0 && <ListOf items={this.state.articles} />}
      </div>
    );
  }
}

export default MoviesPage;

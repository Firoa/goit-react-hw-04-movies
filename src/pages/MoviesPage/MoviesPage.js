import React, { Component } from "react";
import ListOf from "../../components/ListOf/ListOf";
import SearchBar from "../../containers/SearchBar/SearchBar";
import * as Services from "../../services/services";
import queryString from "query-string";
class MoviesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      articles: null,
    };
  }
  componentDidMount() {    
    const queryObj = queryString.parse(this.props.location.search);
    if(queryObj.query !== ''){
      this.setState({ query: queryObj.query });
    }   
  }
  handleSearch = (searchStr) => {
    this.setState({ query: searchStr });
    this.props.history.push({
      ...this.props.location,
      search: `?query=${searchStr}`,
    });
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {     
      Services.fetchByQuery(this.state.query).then((results) =>
        this.setState({ articles: results })
      );
    }
  }
  render() {
    const { articles } = this.state;
    return (
      <div>
        <SearchBar onSearchSubmit={this.handleSearch} />
        {articles && <ListOf items={this.state.articles} />}
      </div>
    );
  }
}

export default MoviesPage;

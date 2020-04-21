import React, { Component } from 'react';
import styles from './SearchBar.module.css';
import { withRouter} from "react-router-dom";
class Searchbar extends Component {
  state = {
    searchStr: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handlerReset = () => {
    this.setState({ searchStr: '' });
  };

  handeleSubmit = e => {
    e.preventDefault();
    if(this.state.searchStr === '')return;
    this.props.onSearchSubmit(this.state.searchStr);
    this.handlerReset();
  };

  render() {
    const { searchStr } = this.state;
    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.handeleSubmit}>
          <button type="submit" className={styles.SearchFormButton}>
            <span className={styles.SearchFormButtonLabel}>Search</span>
          </button>
          <input
            className={styles.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movie"
            value={searchStr}
            name="searchStr"
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

export default withRouter(Searchbar);
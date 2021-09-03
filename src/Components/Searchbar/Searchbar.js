import { Component } from 'react';

export default class Searchbar extends Component {
  state = {
    imageName: '',
  };

  resset() {
    this.setState({ imageName: '' });
  }

  hadleAddInputValue = e => {
    this.setState({ imageName: e.currentTarget.value.toLowerCase().trim() });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.imageName);
    this.resset();
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            onChange={this.hadleAddInputValue}
            name="imageName"
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.imageName}
          />
        </form>
      </header>
    );
  }
}

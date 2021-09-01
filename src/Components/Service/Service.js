import { Component } from 'react';

const API_KEY = '22326636-8d9d25d1f9cff7f7e66e8dd75';
const BASE_URL = 'https://pixabay.com/api/';

export default class ApiService extends Component {
  state = {
    imageSearch: '',
    numberOfPage: 1,
  };

  async fetchCountries() {
    try {
      const result = await fetch(
        `${BASE_URL}?image_type=photo&orientation=horizontal&q=${this.state.imageSearch}&page=${this.state.numberOfPage}&per_page=12&key=${API_KEY}`,
      );
      return result.json();
    } catch (error) {
      console.log(error);
    }
  }

  nextPage() {
    this.setState(prevState => ({
      numberOfPage: (prevState.numberOfPage += 1),
    }));
  }
  ressetPage() {
    this.setState({ numberOfPage: 1 });
  }

  //  get query(){
  //      return this.state.imageSearch;
  //  }
  //  set query(newQuery){
  //      this.state.imageSearch = newQuery;

  //  }
}

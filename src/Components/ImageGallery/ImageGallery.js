import { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import apiService from '../Service/Service';

export default class ImageGallery extends Component {
  state = {
    page: 1,
    error: null,
    picturesData: [],
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.imageName !== this.props.imageName) this.loadNewPictures();
  }

  loadNewPictures() {
    this.ressetPage();
    apiService(this.props.imageName, this.state.page)
      .then(pictures => {
        // console.log(pictures.hits);
        return this.setState({ picturesData: pictures.hits });
      })
      .catch(error => this.setState({ error }));
  }

  loadMorePictures() {
    this.nextPage();
    apiService(this.props.imageName, this.state.page)
      .then(pictures => {
        // console.log(pictures.hits);
        return this.setState(prevState => ({
          picturesData: [...prevState.picturesData, ...pictures.hits],
        }));
      })
      .catch(error => this.setState({ error }));
  }

  nextPage() {
    this.setState(prevState => ({
      page: (prevState.numberOfPage += 1),
    }));
  }
  ressetPage() {
    this.setState({ page: 1 });
  }

  render() {
    return (
      <ul className="ImageGallery">
        {this.state.picturesData.length > 1 ? (
          <ImageGalleryItem pictures={this.state.picturesData} />
        ) : (
          <p>Please! Enter word for searching images</p>
        )}
      </ul>
    );
  }
}

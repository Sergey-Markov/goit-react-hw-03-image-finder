import { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import apiService from '../Service/Service';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';

export default class ImageGallery extends Component {
  state = {
    page: 1,
    error: null,
    picturesData: [],
    isOpenModal: false,
    picture: '',
  };

  avtoScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.imageName !== this.props.imageName) {
      await this.loadNewPictures();
    }
    if (prevState.page !== this.state.page && this.state.page > 1) {
      await this.loadMorePictures();
    }
  }

  async loadNewPictures() {
    this.ressetPage();
    await apiService(this.props.imageName, this.state.page)
      .then(pictures => {
        // console.log(pictures.hits);
        this.setState({ picturesData: pictures.hits });
      })
      .catch(error => this.setState({ error }));
    this.avtoScroll();
  }

  async loadMorePictures() {
    await apiService(this.props.imageName, this.state.page)
      .then(pictures => {
        // console.log(pictures.hits);
        this.setState(prevState => ({
          picturesData: [...prevState.picturesData, ...pictures.hits],
        }));
      })
      .catch(error => this.setState({ error }));
    this.avtoScroll();
  }
  onModalOpen = picture => {
    this.setState({ isOpenModal: true, picture: picture });
  };
  onCloseModal = () => {
    this.setState({ isOpenModal: false });
  };

  nextPage = () => {
    this.setState(prevState => ({
      page: (prevState.page += 1),
    }));
  };
  ressetPage() {
    this.setState({ page: 1 });
  }

  render() {
    const { picturesData, picture, isOpenModal } = this.state;
    return (
      <>
        <p className="notifyText-onStart">
          Please! Enter word for searching images
        </p>
        <ul className="ImageGallery">
          {picturesData.length > 0 && (
            <ImageGalleryItem
              pictures={picturesData}
              onClick={this.onModalOpen}
            />
          )}
          {picturesData.length > 1 && <Button onClick={this.nextPage} />}
          {isOpenModal && (
            <Modal picture={picture} onCloseModal={this.onCloseModal} />
          )}
        </ul>
      </>
    );
  }
}

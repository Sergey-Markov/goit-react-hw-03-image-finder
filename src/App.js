import './App.css';
import { Component } from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
// import Loader from 'react-loader-spinner';
import Searchbar from './Components/Searchbar/Searchbar';
import ImageGallery from './Components/ImageGallery/ImageGallery';
// import Button from './Components/Button/Button';

class App extends Component {
  state = {
    imageName: '',
  };

  onSearchSubmit = imageName => {
    this.setState({ imageName });
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.onSearchSubmit} />
        <ImageGallery imageName={this.state.imageName} />
        {/* <Loader
          type="Grid"
          color="blue"
          height={100}
          width={100}
          timeout={4000}
        /> */}
      </div>
    );
  }
}

export default App;

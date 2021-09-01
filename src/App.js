import './App.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import Searchbar from './Components/Searchbar/Searchbar';
import ImageGallery from './Components/ImageGallery/ImageGallery';

function App() {
  return (
    <div className="App">
      <Searchbar onSubmit="" />
      <ImageGallery />
      <Loader
        type="Grid"
        color="blue"
        height={100}
        width={100}
        timeout={4000}
      />
    </div>
  );
}

export default App;

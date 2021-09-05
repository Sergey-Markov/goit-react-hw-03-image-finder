export default function ImageGalleryItem({ pictures, onClick }) {
  return pictures.map(picture => {
    return (
      <li key={picture.id} className="ImageGalleryItem">
        <img
          src={picture.webformatURL}
          alt={picture.tags}
          className="ImageGalleryItem-image"
          onClick={() => onClick(picture)}
        />
      </li>
    );
  });
}

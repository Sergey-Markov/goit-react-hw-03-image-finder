export default function ImageGalleryItem({ pictures, onClick }) {
  return pictures.map(picture => {
    const { id, webformatURL, tags } = picture;
    return (
      <li key={id} className="ImageGalleryItem">
        <img
          src={webformatURL}
          alt={tags}
          className="ImageGalleryItem-image"
          onClick={() => onClick(picture)}
        />
      </li>
    );
  });
}

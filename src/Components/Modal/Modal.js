export default function Modal({ picture, onCloseModal }) {
  return (
    <div className="Overlay" onClick={onCloseModal}>
      <div className="Modal">
        <img src={picture.largeImageURL} alt={picture.tags} />
      </div>
    </div>
  );
}

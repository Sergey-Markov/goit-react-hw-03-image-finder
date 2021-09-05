export default function Modal({ picture, onCloseModal }) {
  console.log(picture);
  console.log(picture.id);
  return (
    <div className="Overlay" onClick={onCloseModal}>
      <div className="Modal">
        <img src={picture.largeImageURL} alt={picture.tags} />
      </div>
    </div>
  );
}

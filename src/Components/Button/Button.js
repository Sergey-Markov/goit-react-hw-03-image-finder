export default function Button({ onClick }) {
  return (
    <div className="more">
      <button type="text" className="more-loadBtn" onClick={onClick}>
        Load more
      </button>
    </div>
  );
}

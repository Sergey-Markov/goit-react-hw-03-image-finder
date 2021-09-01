export default function Button() {
  return (
    <div class="more">
      <button type="text" class="more-loadBtn">
        Load more
      </button>
    </div>
  );
}

window.scrollTo({
  top: document.documentElement.scrollHeight,
  behavior: 'smooth',
});

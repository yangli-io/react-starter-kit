export default function removeLoading() {
  const loader = document.getElementById('Loading');

  if (loader) {
    loader.remove();
  }
}
export default function removeLoading(): void {
  const loader = document.getElementById('Loading');

  if (loader) {
    loader.remove();
  }
}

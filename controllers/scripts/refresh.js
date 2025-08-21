if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

window.addEventListener('DOMContentLoaded', function() {
  // Remove hash from URL if present
  if (window.location.hash) {
    history.replaceState(null, '', window.location.pathname + window.location.search);
  }
  // Always scroll to top on page load
  setTimeout(function() {
    window.scrollTo(0, 0);
  }, 1);
});
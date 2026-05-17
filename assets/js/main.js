// Load shared nav and footer
function loadFragment(id, path) {
  fetch(path)
    .then(r => r.text())
    .then(html => {
      const el = document.getElementById(id);
      if (el) el.innerHTML = html;
    })
    .catch(() => {});
}

document.addEventListener('DOMContentLoaded', () => {
  loadFragment('nav-placeholder', '/Agentic-AI/components/nav.html');
  loadFragment('footer-placeholder', '/Agentic-AI/components/footer.html');

  // Update progress pill
  setTimeout(() => {
    const pill = document.querySelector('.nav-progress-count');
    if (pill && window.Progress) {
      const count = Progress.getCompletedCount();
      pill.textContent = `${count}/25 completed`;
    }
  }, 200);
});

document.addEventListener('DOMContentLoaded', () => {
  const searchForm = document.querySelector('.site-search form');
  searchForm.addEventListener('submit', (event) => {
    const query = searchForm.querySelector('input[name="q"]').value.trim();
    if (!query) {
      event.preventDefault();
      alert('请输入搜索内容！');
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const searchButton = document.querySelector('.search');
  const searchInput = document.querySelector('.search-input');

  if (searchButton && searchInput) {
    searchButton.addEventListener('click', function () {
      searchInput.classList.toggle('active');
    });
  }
});

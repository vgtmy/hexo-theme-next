document.addEventListener('DOMContentLoaded', () => {
  const searchMenu = document.querySelector('.search-menu'); // 替换为实际的搜索菜单类名
  const searchInput = document.querySelector('.search-input'); // 替换为实际的搜索输入框类名

  if (searchMenu && searchInput) {
    searchMenu.addEventListener('click', () => {
      // 切换搜索输入框的显示状态
      searchInput.classList.toggle('active');
      searchInput.focus();
    });
  }
});

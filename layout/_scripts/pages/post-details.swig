<script>
  // 确保搜索按钮绑定了点击事件
  document.querySelector('.search').addEventListener('click', function () {
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
      searchInput.focus();
    }
  });
</script>

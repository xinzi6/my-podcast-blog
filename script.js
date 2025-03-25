// 示例：点击菜单平滑滚动
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      if (href !== '#') {
        document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
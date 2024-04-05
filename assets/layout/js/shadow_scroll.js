// < !--SCRIPT AND STYLE FOR DROP SHADOW ON SCROLL-- >
  <script >
    window.addEventListener('scroll', function () {
    var navBar = document.getElementById('navBar');
    if (window.pageYOffset > 0) {
      navBar.classList.add('shadow');
    } else {
      navBar.classList.remove('shadow');
    }
  });
  </script>
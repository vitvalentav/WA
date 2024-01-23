const searchBtn = document.getElementById('search-btn');
const searchBar = document.querySelector('.searchbar');

searchBar.addEventListener('click', () => {
  if (navigationMenu.classList.contains('open')) {
    navigationMenu.classList.remove('open');
  } else {
    navigationMenu.classList.add('open');
  }
});

searchBar.addEventListener('mouseover', () => {
  if (!navigationMenu.classList.contains('open')) {
    navigationMenu.classList.add('hover');
  }
});

searchBar.addEventListener('mouseout', () => {
  navigationMenu.classList.remove('hover');
});

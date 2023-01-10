const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

// add event listener to toggleBtn --> toggle 'show-sidebar' class

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('show-sidebar');
});

// add event listener to closeBtn --> close sidebar when open
// use .remove() method
closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('show-sidebar');
});
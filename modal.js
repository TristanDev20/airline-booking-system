const modal = document.getElementById('modal');
const searchFlightsBtn = document.getElementById('searchFlightsBtn');
const closeBtn = document.querySelector('.close-btn');

searchFlightsBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});


// JavaScript to toggle the 'scrolled' class on the navbar
document.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");

  // Add 'scrolled' class if user has scrolled down 50px or more
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
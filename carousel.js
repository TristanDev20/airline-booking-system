  /* Start of Carousel Slider Effect */

  const container = document.querySelector('.destination-container');
  const next = document.querySelector('.nxt-btn');
  const prev = document.querySelector('.pre-btn');

  next.addEventListener('click', () => {
    container.scrollLeft += container.offsetWidth;
  });

  prev.addEventListener('click', () => {
    container.scrollLeft -= container.offsetWidth;
  });

  /* End of Carousel Slider Effect */


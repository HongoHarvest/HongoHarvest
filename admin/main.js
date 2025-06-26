// Initialize Isotope for product filtering
document.addEventListener('DOMContentLoaded', function() {
  // Product filtering
  const productGrid = document.querySelector('.product-grid');
  if (productGrid) {
    const iso = new Isotope(productGrid, {
      itemSelector: '.product-item',
      layoutMode: 'fitRows'
    });

    const filterButtons = document.querySelectorAll('.product-filters .btn');
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Get filter value
        const filterValue = this.getAttribute('data-filter');
        
        // Filter items
        iso.arrange({
          filter: filterValue
        });
      });
    });
  }

  // Navbar scroll effect
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Hero carousel
  const heroCarousel = document.querySelector('#heroCarousel');
  if (heroCarousel) {
    const carousel = new bootstrap.Carousel(heroCarousel, {
      interval: 5000,
      wrap: true
    });
  }

  // Testimonial carousel
  const testimonialCarousel = document.querySelector('#testimonialCarousel');
  if (testimonialCarousel) {
    const carousel = new bootstrap.Carousel(testimonialCarousel, {
      interval: 6000,
      wrap: true
    });
  }
});

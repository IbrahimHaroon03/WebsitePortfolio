document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.sectionStart');
    const navLinks = document.querySelectorAll('.nav__link');
  
    function updateActive() {
        sections.forEach((section, index) => {
          const rect = section.getBoundingClientRect();
          
          // Adjusted condition to check if the section's top is close to the top of the page
          const isInView = rect.top <= 140 && rect.bottom >= 0;
          
          if (isInView) {
            navLinks.forEach((navLink) => {
              navLink.classList.remove('active');
            });
      
            navLinks[index].classList.add('active');
          }
        });
      }
  
    window.addEventListener('scroll', updateActive);
    window.addEventListener('resize', updateActive);
  });
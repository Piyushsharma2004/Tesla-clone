document.addEventListener("DOMContentLoaded", function() {
    const heroSections = document.querySelectorAll(".second-hero-page, .thired-hero-page");
  
    function showContent(section) {
      section.classList.add("active");
    }
  
    function hideContent(section) {
      section.classList.remove("active");
    }
  
    function handleScroll() {
      heroSections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
          showContent(section);
        } else {
          hideContent(section);
        }
      });
    }
  
    window.addEventListener("scroll", handleScroll);
  });
  
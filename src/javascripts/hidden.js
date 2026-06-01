const hiddenElements = document.querySelectorAll(".hidden");

hiddenElements.forEach((element, index) => {
  element.style.transitionDelay = `${index * 0.2}s`;
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("shown");
    }
  });
});

hiddenElements.forEach((element) => {
  observer.observe(element);
});

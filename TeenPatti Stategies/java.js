// You can add interactive features here in the future.
console.log("Responsive Blog Post loaded!");

document.querySelectorAll(".faq-question").forEach((question) => {
    question.addEventListener("click", () => {
      const faqItem = question.parentElement;
  
      // Toggle the active class
      faqItem.classList.toggle("active");
  
      // Hide other open answers (optional)
      document.querySelectorAll(".faq-item").forEach((item) => {
        if (item !== faqItem) {
          item.classList.remove("active");
        }
      });
    });
  });
document.addEventListener("DOMContentLoaded", () => {
  const pages = document.querySelectorAll(".page");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");

  let currentPage = 0;

  // Show only the first page at start
  pages.forEach((page, index) => {
    page.style.display = index === 0 ? "block" : "none";
    page.style.opacity = index === 0 ? "1" : "0";
    page.style.transition = "opacity 0.6s ease";
  });

  // Function to show a specific page
  function showPage(index) {
    pages.forEach((page, i) => {
      if (i === index) {
        page.style.display = "block";
        setTimeout(() => (page.style.opacity = "1"), 50);
      } else {
        page.style.opacity = "0";
        setTimeout(() => (page.style.display = "none"), 600);
      }
    });
  }

  // Go to next page
  nextBtn.addEventListener("click", () => {
    if (currentPage < pages.length - 1) {
      currentPage++;
      showPage(currentPage);
    }
  });

  // Go to previous page
  prevBtn.addEventListener("click", () => {
    if (currentPage > 0) {
      currentPage--;
      showPage(currentPage);
    }
  });
});

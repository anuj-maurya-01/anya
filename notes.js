let currentPage = 0; // Start at page1
const pages = document.querySelectorAll('.page');

function showPage(index) {
    pages.forEach((page, i) => {
        page.style.display = i === index ? 'block' : 'none';
    });
}

document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentPage < pages.length - 1) {
        currentPage++;
        showPage(currentPage);
    }
});

document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        showPage(currentPage);
    }
});

function showPage(index) {
    pages.forEach((page, i) => {
        page.style.display = i === index ? 'block' : 'none';
        if(i === index) {
            setTimeout(() => page.classList.add('show'), 50);
        } else {
            page.classList.remove('show');
        }
    });
}

// Initialize
showPage(currentPage);

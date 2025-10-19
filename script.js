// ===== FLOATING HEARTS BACKGROUND =====
function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.innerHTML = '💖';
  heart.style.position = 'absolute';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = Math.random() * 20 + 20 + 'px';
  heart.style.top = '100%';
  heart.style.animation = `rise ${Math.random() * 4 + 3}s linear`;
  heart.style.opacity = 0.7;
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 7000);
}
setInterval(createHeart, 1000);

// Floating animation keyframes
const style = document.createElement('style');
style.textContent = `
@keyframes rise {
  0% { transform: translateY(0); opacity: 0; }
  10% { opacity: 1; }
  100% { transform: translateY(-110vh); opacity: 0; }
}`;
document.head.appendChild(style);

// ===== BACKGROUND STATIC FLOATING HEARTS =====
const heartsBg = document.querySelector('.hearts-bg');
if (heartsBg) {
  for (let i = 0; i < 50; i++) {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = 4 + Math.random() * 4 + 's';
    heart.style.width = heart.style.height = 10 + Math.random() * 15 + 'px';
    heartsBg.appendChild(heart);
  }
}

// ===== TYPEWRITER CONFESSION =====
const confessionText = document.getElementById('confession-text');
if (confessionText) {
  const text = "I love you more than words can express, every day with you is magic...";
  let i = 0;
  function typeWriter() {
    if (i < text.length) {
      confessionText.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, 50);
    }
  }
  typeWriter();
}

// ===== LIGHTBOX =====
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const galleryItems = document.querySelectorAll('.gallery-item img');

galleryItems.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
  });
});

if (lightbox) {
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox || e.target.className === 'close') {
      lightbox.style.display = 'none';
    }
  });
}

// ===== TIMER =====
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

if (daysEl && hoursEl && minutesEl && secondsEl) {
  const startDate = new Date("2023-11-21T00:45:02");
  function updateTimer() {
    const now = new Date();
    const diff = now - startDate;

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);

    daysEl.textContent = d;
    hoursEl.textContent = h;
    minutesEl.textContent = m;
    secondsEl.textContent = s;
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

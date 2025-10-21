// 🌸 ===== FLOATING HEARTS BACKGROUND =====
function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.innerHTML = '💖';
  heart.style.position = 'absolute';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = Math.random() * 25 + 15 + 'px';
  heart.style.top = '100%';
  heart.style.opacity = 0.7;
  heart.style.animation = `rise ${Math.random() * 4 + 3}s linear forwards`;
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 7000);
}
setInterval(createHeart, 1000);

// 🌸 Floating animation keyframes (auto-injected)
const heartStyle = document.createElement('style');
heartStyle.textContent = `
@keyframes rise {
  0% { transform: translateY(0); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { transform: translateY(-110vh) rotate(360deg); opacity: 0; }
}
.heart {
  position: absolute;
  user-select: none;
  pointer-events: none;
}
.floating-heart {
  position: absolute;
  background: radial-gradient(circle at 30% 30%, #ff9a9e, #e91e63);
  opacity: 0.2;
  border-radius: 50%;
  pointer-events: none;
}
`;
document.head.appendChild(heartStyle);

// 🌸 ===== STATIC FLOATING HEARTS (Background) =====
const heartsBg = document.querySelector('.hearts-bg');
if (heartsBg) {
  for (let i = 0; i < 40; i++) {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.top = Math.random() * 100 + '%';
    const size = 10 + Math.random() * 15;
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;
    heart.style.animation = `float ${4 + Math.random() * 4}s ease-in-out infinite`;
    heartsBg.appendChild(heart);
  }
}

// Floating idle animation
const floatAnim = document.createElement('style');
floatAnim.textContent = `
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}`;
document.head.appendChild(floatAnim);

// 🌸 ===== TYPEWRITER CONFESSION =====
const confessionText = document.getElementById('confession-text');
if (confessionText) {
  const text = "From the very first moment, my heart knew you were the one. 💞 Every heartbeat whispers your name, every second feels like forever with you. 💌";
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

// 🌸 ===== LIGHTBOX FOR GALLERY =====
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const galleryItems = document.querySelectorAll('.gallery-item img');

if (galleryItems.length && lightbox && lightboxImg) {
  galleryItems.forEach(img => {
    img.addEventListener('click', () => {
      lightbox.style.display = 'flex';
      lightboxImg.src = img.src;
    });
  });

  lightbox.addEventListener('click', e => {
    if (e.target === lightbox || e.target.className === 'close') {
      lightbox.style.display = 'none';
    }
  });
}


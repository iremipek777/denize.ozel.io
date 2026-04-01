// script.js
let evetCount = 0;
const warning = document.getElementById('warning');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const mainText = document.getElementById('mainText');
const buttons = document.getElementById('buttons');
const heartsLeft = document.querySelector('.hearts-left');
const topRight = document.querySelector('.top-right');

yesBtn.addEventListener('click', () => {
  evetCount++;
  if (evetCount === 2) {
    warning.textContent = "tekrar düşün";
    warning.classList.add('show');
    setTimeout(() => {
      warning.classList.remove('show');
    }, 2500);
    evetCount = 0;
  }
});

noBtn.addEventListener('click', () => {
  // Ana öğeleri gizle
  mainText.style.opacity = '0';
  mainText.style.pointerEvents = 'none';
  buttons.style.opacity = '0';
  buttons.style.pointerEvents = 'none';
  heartsLeft.style.opacity = '0';
  topRight.style.opacity = '0';
  warning.classList.remove('show');

  // Yanıt yazısını göster
  const responseText = document.createElement('div');
  responseText.textContent = "bende öyle düşünüyordum aşkım";
  responseText.style.position = 'fixed';
  responseText.style.top = '50%';
  responseText.style.left = '50%';
  responseText.style.transform = 'translate(-50%, -50%)';
  responseText.style.fontSize = '55px';
  responseText.style.fontWeight = 'bold';
  responseText.style.color = 'black';
  responseText.style.textShadow = '3px 3px 0 white, -3px -3px 0 white, 3px -3px 0 white, -3px 3px 0 white';
  responseText.style.textAlign = 'center';
  responseText.style.zIndex = '30';
  document.body.appendChild(responseText);

  // Rastgele hareket eden kalpler oluştur
  for (let i = 0; i < 18; i++) {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.textContent = '❤️';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.top = Math.random() * window.innerHeight + 'px';
    heart.style.animationDuration = (6 + Math.random() * 5) + 's';
    heart.style.animationDelay = (Math.random() * 2) + 's';
    document.body.appendChild(heart);
  }
});
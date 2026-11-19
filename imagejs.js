const imagePool = [
  'star.svg',
  'star2.svg',
  'star3.svg',
  'heart.svg',
  'bluePlanet.svg',
  'whiteHole.svg',
  'blackHole.svg'
];

const floatingImages = document.querySelectorAll('.floating-image');

floatingImages.forEach((img) => {
  const randomIndex = Math.floor(Math.random() * imagePool.length);
  img.src = imagePool[randomIndex];
});

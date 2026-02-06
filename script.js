const featureItems = document.querySelectorAll('.feature-item');

featureItems.forEach(item => {
  item.addEventListener('click', () => {
    featureItems.forEach(i => i.classList.remove('active'));
    item.classList.add('active');
  });
});
const radios = document.querySelectorAll('.slide-input');

radios.forEach((radio, index) => {
  radio.addEventListener('change', () => {
    featureItems.forEach(i => i.classList.remove('active'));
    featureItems[index].classList.add('active');
  });
});
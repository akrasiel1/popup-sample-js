const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');


//Show popup when clicking the green button
button.addEventListener('click', () => {
    popup.style.display = 'block';
});

//Close popup when clicking the cross
close.addEventListener('click', () => {
    popup.style.display = 'none';
});



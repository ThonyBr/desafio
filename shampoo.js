function changeImage() {
    const image = document.querySelector('img');
    if (image.src.includes('Mario.jpg')) {
        image.src = 'shampoo.jpeg';
    } else {
        image.src = 'cabelo.jpeg';
    }
}
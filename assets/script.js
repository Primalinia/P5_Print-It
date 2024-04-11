// Variables
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];
//console.log(slides);

const left = document.querySelector('.arrow_left');
const right = document.querySelector('.arrow_right');
const bannerImg = document.querySelector('.banner-img');
const dots = document.querySelectorAll('.dot'); // Sélectionne tous les points
let currentIndex = 0;

// Chevrons
/* Gestionnaire d'événement,
au clic du chevron gauche */
left.addEventListener('click', function () {
    currentIndex = (currentIndex - 1);
    updateCarousel(currentIndex, 'left');
    updateDots(currentIndex); // actualise les dots
});

// Gestionnaire d'événement au clic du chevron droit
right.addEventListener('click', function () {
    currentIndex = (currentIndex + 1) ;
    updateCarousel(currentIndex, 'right');
    updateDots(currentIndex); // Actualise les dots
});

// Dots
/* Fonction pour mettre à jour,
les points indicateurs */
function updateDots(index) {
    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('dot_selected'); // Ajoute la classe pour le point actuel
        } else {
            dot.classList.remove('dot_selected'); // Supprime la classe pour les autres points
        }
    });
}

//Mises à jour
/* Fonctions de mises à jour: 
Image, texte et points indicateurs */
function updateCarousel(index, direction) {
      // Passage entre la première et la dernière image du caroussel
    if (currentIndex === -1 && direction === 'left') { 
        currentIndex = slides.length - 1;
    } else if (currentIndex === slides.length && direction === 'right') {
        currentIndex = 0;
    }

	/* Mise à jour: 
	de l'image */
    const imagePath = `assets/images/slideshow/${slides[currentIndex].image}`;
    bannerImg.src = imagePath;
    bannerImg.alt = `Slide ${currentIndex + 1}`; // $ selectionne l'élément

    /* Mise  à jour du texte */
    const tagLine = slides[currentIndex].tagLine;
    document.querySelector('p').innerHTML = tagLine;
}
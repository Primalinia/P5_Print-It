// Variables - Constantes
const slides = [
  {
    image: 'slide1.jpg',
    tagLine: 'Impressions tous formats <span>en boutique et en ligne</span>',
  },
  {
    image: 'slide2.jpg',
    tagLine:
      'Tirages haute définition grand format <span>pour vos bureaux et events</span>',
  },
  {
    image: 'slide3.jpg',
    tagLine: 'Grand choix de couleurs <span>de CMJN aux pantones</span>',
  },
  {
    image: 'slide4.png',
    tagLine: 'Autocollants <span>avec découpe laser sur mesure</span>',
  },
];
//console.log(slides);

const left = document.querySelector('.arrow_left');
const right = document.querySelector('.arrow_right');
const bannerImg = document.querySelector('.banner-img');
const p = document.querySelector('#banner p');
const dotsTab = document.querySelector('.dots');
let currentIndex = 0;

let dot = document.createElement('div'); // CRéation d'une balise "div"
dot.classList.add('dot'); //Ajoute une classe CSS à notre nouvelle balise "div"
dotsTab.appendChild(dot); //Ajoute notre nouvelle balise "div " à notre balise précédente

const displayDots = () => {
	for (let i = 0; i < slides.length - 1; i++) {  //Initialise une boucle for 
		let dot = document.createElement('div');  //Crée un nouvel élément HTML <div>et l'enregistre dans la variable dot
		dot.classList.add('dot'); 
		dotsTab.appendChild(dot);  
		if (i === currentIndex) { 
		dot.classList.add('dot_selected');  
		}
	}
};

displayDots();  //Appelle la fonction displayDots pour exécuter le code et créer les points
const dots = document.querySelectorAll('.dot'); 
console.log('dots contient', dots);  


//Right
const handleRightClick = () => {
	if (dots.length > 0) { 
		dots[currentIndex].classList.remove('dot_selected'); //Supprime la classe CSS dot_selected de l'élément dot actuellement sélectionné
		currentIndex++; 
		if (currentIndex > slides.length - 1) { 
		currentIndex = 0; 
		}
		dots[currentIndex].classList.add('dot_selected'); 
		bannerImg.src = './assets/images/slideshow/' + slides[currentIndex].image; //Met à jour la source de l'image du diaporama avec la nouvelle image de la variable slides
		p.innerHTML = slides[currentIndex].tagLine; 
	} else {
		console.error("il n'y a pas de point dans la div ou de slides"); //Affiche un message d'erreur dans la console 
	}
};

right.addEventListener('click', handleRightClick); //Ajoute un écouteur d'événement au bouton "Right" ('flèche droite') qui exécute la fonction handleRightClick chaque fois que le bouton est cliqué.

//Click Left
const handleLeftClick = () => {
	if (dots.length > 0) {
		dots[currentIndex].classList.remove('dot_selected');
		currentIndex--;
		if (currentIndex < 0) {
		currentIndex = slides.length - 1;
		}
		dots[currentIndex].classList.add('dot_selected');
		bannerImg.src = './assets/images/slideshow/' + slides[currentIndex].image;
		p.innerHTML = slides[currentIndex].tagLine;
	} else {
		console.error("il n'a pas de point dans la div ou de slides");
	}
};

left.addEventListener('click', handleLeftClick);

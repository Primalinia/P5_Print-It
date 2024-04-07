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
console.log(slides);

let position = 0; 
const numberOfSlide = slides.length;

createCaroussel(position);



const left = document.querySelector('.arrow_left');
const right = document.querySelector('.arrow_right');




left.addEventListener("click", function () {
    if (position == 0) {
        position = numberOfSlide - 1;
    }
    else {
        position--;
    }
        createCaroussel(position);
});

right.addEventListener("click", function () {
    if (position == numberOfSlide - 1) {
        position = 0;
    } else {
            position++;
    }
    createCaroussel(position);

});



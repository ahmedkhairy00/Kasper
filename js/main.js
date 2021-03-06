'use strict';

/* All Variabels */
let icon = document.querySelector('.toggle-menu');
let menu = document.querySelector('.links ul');
const bullts = document.querySelectorAll('.landing .bullats ul li');
let iconLeft = document.querySelector('.left');
let iconRight = document.querySelector('.right');
const imgShow = document.querySelector('.landing')
let counter = 1;

/* Toggle Menu Icon Function */
icon.onclick = function toggleUl(){
    menu.classList.toggle('toggle');
    console.log('click');
}

/* Function To Change Images Right */
iconRight.addEventListener('click' , function (event){
	
	
        if (counter == bullts.length - 1 ) {
			
			return 0;
			
        } 
        else {
                counter++;
				iconRight.style.cursor = "pointer";
            }
	
	 			imgShow.style.backgroundImage = "url('images/download"+ counter +".jpg')";
                for (let i = 0 ; i < bullts.length; i++){
                    bullts[i].classList.remove('active');
                    bullts[counter].classList.add('active');
                }
});

/* Function To Change Images Left */
iconLeft.addEventListener('click' , function (event){
	
    if (counter == 0) {
		
		return 0;
    }
    else{
        counter--; 	
		iconLeft.style.cursor = "pointer";

        }
	
	
            imgShow.style.backgroundImage = "url('images/download"+ counter +".jpg')";
		
            for (let i = 0 ; i < bullts.length; i++){
                bullts[i].classList.remove('active');
                bullts[counter].classList.add('active');
            }
}
/* Change Images From Bullts To Phone*/
for( let i = 0; i < bullts.length; i++) {
    bullts[i].addEventListener('click', function(){
	document.querySelector('.bullats ul li.active').classList.remove('active');
    this.classList.add('active');
    imgShow.style.backgroundImage = "url('images/download"+ (i) +".jpg')";
    });
}
  /* Use Aos Animation Libarary */
    AOS.init();

/* Over Flow Hidden For All parent To Remove Scroll Fron Container */
let parentElemenet = document.querySelectorAll('.container');

window.onload = function removeScroll(){
    for (let i = 0; i < parentElemenet.length; i++){
    if ('[data-aos="fade-right"]' || '[data-aos="fade-left]' in parentElemenet[i] == true){
        parentElemenet[i].style.overflowX = "hidden";
        parentElemenet[i].style.overflowY = "clip";
    } else {
             return 0;
    }
    }
}
/* Shuffle Portiflio Section  */
const shuffleIcon = document.querySelectorAll('.shuffle li');
const itemFilter = document.querySelectorAll('.box');

    for (let i = 0 ; i < shuffleIcon.length; i++) {
      if (shuffleIcon[i].addEventListener('click' , function shuffle(){

          if (shuffleIcon[i].classList.contains('filter-item')){
              document.querySelector('.shuffle .active').classList.remove('active');
              shuffleIcon[i].classList.add('active');
          }

          /* For Shuffle items  */
          let dataTarget = this.getAttribute('data-filter');
         for (let j = 0 ; j < itemFilter.length; j++){
             itemFilter[j].classList.remove('show');
             itemFilter[j].classList.add('hide');
             
             if (itemFilter[j].getAttribute('data-item') == dataTarget || dataTarget == 'all') {
                itemFilter[j].classList.remove('hide');
                itemFilter[j].classList.add('show');
             }}})){}}


/* Shuffle testimon div in Skills */
let  parentDiv = document.querySelectorAll('.testimonials .testimon1');
let  btns = document.querySelector('.testimonials .bullts').children;

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click' , function(){
        document.querySelector('.bullts .active').classList.remove('active');
        this.classList.add('active');
        document.querySelector('.testimonials .show').classList.remove('show');
        parentDiv[i].classList.add('show');
    });
    
}

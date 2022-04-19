$('.page-scroll').on('click', function(e) {

    var tujuan = $(this).attr('href');
   
    var elemenTujuan = $(tujuan);
   
    $('html , body').animate({
     scrollTop: elemenTujuan.offset().top - 50
    },100);
   
    e.preventDefault();
   });

var nav = document.querySelector('nav');
var toTop = document.querySelector('.to-top');
var dropdown = document.querySelector('body > nav > div > button');
var butonNav = document.querySelectorAll('.button-nav');
var judulWegrow = document.querySelector('.judulwegrow');
var countVisitors = document.querySelector('.count');

window.addEventListener('scroll',function(){
    if(window.pageYOffset > 100){
        nav.classList.add('bg-dark','shadow')
        nav.classList.remove('bg-white')
        toTop.style.opacity = 1;
        toTop.classList.remove('disabled','nav-link')
        dropdown.style.color = 'white'
        for(var i = 0; i<butonNav.length; i++){
            butonNav[i].style.borderColor = 'white'
        }
        judulWegrow.classList.add('text-light')
        judulWegrow.classList.remove('text-dark')
    }

    else if(window.pageYOffset == 0){
        nav.classList.add('bg-white','shadow')
        nav.classList.remove('bg-dark','shadow');
        toTop.style.opacity = 0;
        toTop.classList.add('disabled','nav-link')
        dropdown.style.color = 'black'
        for(var i = 0; i<butonNav.length; i++){
            butonNav[i].style.borderColor = 'black'
        }
        judulWegrow.classList.add('text-dark')
        judulWegrow.classList.remove('text-light')
    }
})

updateVisitCount();

function updateVisitCount() {
	fetch('https://api.countapi.xyz/update/wegrowind/website/?amount=1')
	.then(res => res.json())
	.then(res => {
		countVisitors.innerHTML = res.value;
	})
}






document.addEventListener('DOMContentLoaded',function(){
    let positionscroll = document.querySelectorAll('.container-navbar .navbar-maxwidth .menu-list .position');
positionscroll[0].onclick = function(){
    let position0 = document.querySelector('.content_container .intro_container');
let checktop0 = position0.offsetTop
window.scrollTo({ top: checktop0, behavior: 'smooth' })
}

   
positionscroll[1].onclick = function(){
    let position1 = document.querySelector('.content_container .intro_container');
let checktop1 = position1.offsetTop
window.scrollTo({ top: checktop1, behavior: 'smooth' })
}

positionscroll[2].onclick = function(){
    let position2 = document.querySelector('.content_container .aboutme_container');
let checktop2 = position2.offsetTop;
window.scrollTo({ top: checktop2, behavior: 'smooth' })
}

positionscroll[3].onclick = function(){
    let position3 = document.querySelector('.content_container .contact-content');
let checktop3 = position3.offsetTop;
window.scrollTo({ top: checktop3, behavior: 'smooth' })
}
positionscroll[4].onclick = function(){
    let position4 = document.querySelector('.content_container .project');
let checktop4 = position4.offsetTop;
window.scrollTo({ top: checktop4, behavior: 'smooth' })
}






});
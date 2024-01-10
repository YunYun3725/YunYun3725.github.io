document.addEventListener('DOMContentLoaded', function() {
    let list = document.querySelector('.slider .list');
    let items = document.querySelectorAll('.slider .list .item');
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');
    let dots = document.querySelectorAll('.dots li');

    let active = 0;
    let lengthItems = items.length - 1;
    let dotk = 0;

    next.onclick = function() {
        if (active + 1 > lengthItems) {
            active = 0;
        } else {
            active = active + 1;
        }
        updateDots();
        reloadSlider();
    };

    prev.onclick = function() {
        if (active - 1 < 0) {
            active = lengthItems;
        } else {
            active = active - 1;
        }
        updateDots();
        reloadSlider();
    };

    function updateDots() {
        let lastActive = document.querySelector('.dots li.active');
        lastActive.classList.remove('active');
        dots[active].classList.add('active');

    }
   
    dots[0].onclick =  function(){
        let lastActive = document.querySelector('.dots li.active');
        lastActive.classList.remove('active');
    dots[0].classList.add('active');
    active = 0;
    updateDots();
        reloadSlider();
}
dots[1].onclick =  function(){
    let lastActive = document.querySelector('.dots li.active');
    lastActive.classList.remove('active');
dots[1].classList.add('active');
active = 1;
updateDots();
    reloadSlider();
}
dots[2].onclick =  function(){
    let lastActive = document.querySelector('.dots li.active');
    lastActive.classList.remove('active');
dots[2].classList.add('active');
active = 2;
updateDots();
    reloadSlider();
}


    function reloadSlider() {
        let checkLeft = items[active].offsetLeft;
        list.style.left = -checkLeft + 'px';
    }
    
    
});


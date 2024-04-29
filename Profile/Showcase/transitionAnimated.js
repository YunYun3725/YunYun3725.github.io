   document.addEventListener('DOMContentLoaded', function(){
        alert("This website is only responsive for FHD resolution");
    let signupcontainer = document.querySelector('.ShowCase-LogIn .board-container .signup-container');
    let buttonregister = document.querySelector('.ShowCase-LogIn .board-container .signup-content .button-register');
    let ButtonTextSignup = document.querySelector('.ShowCase-LogIn .board-container .signup-content .button-register .text-signup');
    let HeadContentTransition = document.querySelector('.ShowCase-LogIn .board-container .signup-content .content-Login');
    let paragraphContentTransition = document.querySelector('.ShowCase-LogIn .board-container .signup-content .pSignUp');
    let active = 0;
    let n = 0;
    console.log('Paragraph Content:', paragraphContentTransition);
    buttonregister.onclick = function loop() {
    n +=1;
        if (active % 2 == 0) {
            ButtonTextSignup.classList.toggle("text-transform");
            signupcontainer.classList.toggle("transforms");
            signupcontainer.classList.remove("transforms-reverse");
            HeadContentTransition.classList.toggle("content-register");
            HeadContentTransition.classList.remove("content-Login");
            paragraphContentTransition.classList.toggle("pLogIn");
            paragraphContentTransition.classList.remove("pSignUp");
            ButtonTextSignup.classList.remove("text-signup");

        } else {
            ButtonTextSignup.classList.toggle("text-signup");
            signupcontainer.classList.toggle("transforms-reverse");
            signupcontainer.classList.remove("transforms");
            ButtonTextSignup.classList.remove("text-transform");
            HeadContentTransition.classList.toggle("content-Login");
                    HeadContentTransition.classList.remove("content-register");
                    paragraphContentTransition.classList.toggle("pSignUp");
                    paragraphContentTransition.classList.remove("pLogIn");
        }
        active += 1;    
        if(active >= 2){
        active = 0;
    }
    }
    }
    );

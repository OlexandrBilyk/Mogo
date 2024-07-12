let input = document.getElementById('footer-form__input');
input.oninput = function () {
    if(input.value == ""){
        input.classList.remove('active');
    } else{
        input.classList.add('active');
    }
};
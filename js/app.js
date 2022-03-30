var input = document.getElementById('txt-input');
var output = document.getElementById('output-text');

input.addEventListener('input', function(){
    if (input.value){
        output.innerText = input.value;
    }else{
        output.innerText = 'Type Something 😉';
    }
});
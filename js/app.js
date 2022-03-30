var input = document.getElementById('txt-input');
var output = document.getElementById('output-text');

var i = 0;
var j = 0;
const fps = 60;

function animateText(){
    
    if (input.value){

        output.innerText = input.value.substring(0,i);

        if (j++ >= 60){
            j = 0;
            i++;

            if (i > (input.value.length)) i = 0;
        }

        requestAnimationFrame(animateText);
    }
}


input.addEventListener('input', function(){
    if (input.value){
        // output.innerText = input.value;
        requestAnimationFrame(animateText);
    }else{
        output.innerText = 'Type Something 😉';
    }
});
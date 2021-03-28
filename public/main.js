const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

console.log(buttons);

buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        body.removeAttribute('class')
        console.log(e.target);
        if (e.target.id === 'bubbles'){
            

             body.classList.toggle('bubbles')
            
            
        }
        else if (e.target.id === 'blossom'){
            body.classList.toggle('blossom')

           
        }
        else if (e.target.id === 'buttercup'){
            body.classList.toggle('buttercup')
           
        }
     
    })
})
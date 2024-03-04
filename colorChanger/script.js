const buttons= document.querySelectorAll('.button');
const body= document.querySelector('body');

//function(e) ka matlab click hote hi kya hoga wo ham isme likheege
buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        // console.log(e);
        console.log(e.target);
        if(e.target.id === 'grey'){
            body.style.backgroundColor= e.target.id;
        }
        if(e.target.id === 'white'){
            body.style.backgroundColor= e.target.id;
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor= e.target.id;
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor= e.target.id;
        }
    })
});

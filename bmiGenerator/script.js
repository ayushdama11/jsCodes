const form= document.querySelector('form');
//this usecase will give you empty
// const height= parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e){
    e.preventDefault(); //prevent default action

    //ask for value:- .value used to retrieve value from html element
    const height= parseInt(document.querySelector('#height').value) //after doing .value we get output in string so we do parseInt to convert it into integer 
    const weight= parseInt(document.querySelector('#weight').value)
    const results= document.querySelector('#results');

    //agar height isNaN matlab agar height not a number agar true hogi matlab wo number nai hogi to fir ham kuch bhi execution nai karna chahate
    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML= `Please give a valid height :- ${height}`;
    }

    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML= `Please give a valid weight :- ${weight}`;
    }

    else{
        const bmi= (weight / ((height*height)/10000)).toFixed(2); //kyuki decimal ke bad 2 number se jyada values nai chahie
        //show the result
        results.innerHTML= `<span>${bmi}</span>`;
    }
});
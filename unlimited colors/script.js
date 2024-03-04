//generate random colour
const randomColor=function(){
    const hex= "0123456789ABCDEF"
    let color= '#'
    for(let i=0; i<6; i++){     //kyuki hash values me total 6 values rehti haii
        color += hex[Math.floor(Math.random()*16)]; //kyuki hamare hex array me total 16 letters hote hai isliey hame *16 karna hai taaki math.random() 0-16 ke beech me koi bhi value laake de dega 
    }
    return color;
}

let intervalId;

const startChangingColor= function () {
    if(!intervalId){        // (!intervalId) ka matlab hai ki agar mera intervalId null hai tab hamey ye execute karna haiiii
        intervalId= setInterval(changeBgColor, 1000);
    }

    function changeBgColor(){
        document.body.style.backgroundColor= randomColor();
    }
};

const stopChangingColor= function () {
    clearInterval(intervalId);
    intervalId= null; //so that intervalId cannot be overwritten :)
};

document.querySelector("#start").addEventListener('click', startChangingColor)

document.querySelector("#stop").addEventListener('click', stopChangingColor)

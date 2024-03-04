const clock= document.getElementById('clock');
// document.querySelector('#clock');

setInterval(function(){
    let date= new Date()
    // console.log(date.toLocaleTimeString());
    clock.innerHTML= date.toLocaleTimeString();
}, 1000)
//har 1 1 sec me update hota rahega date
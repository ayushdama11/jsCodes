const insert= document.getElementById('insert');
// keydown event is used to detect the key pressed !!
// prints its ascii value
//prints the key which is pressed like tab,shift,/,etc...
// prints the kyname in text
window.addEventListener('keydown', (e)=>{
    insert.innerHTML= `
        <div class= 'color'>
        <table>
        <tr>
          <th>Key</th>
          <th>Keycode</th>
          <th>Code</th>
        </tr>
        <tr>
          <td>${e.key}</td>
          <td>${e.keyCode}</td> 
          <td>${e.code}</td> 
        </tr>
      </table>
        </div>    
    `
})
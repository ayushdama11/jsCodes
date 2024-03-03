//****** CALL BACK HELL EXAMPLE ********

function savetoDb(data, success, failure){
    let internetSpeed= Math.floor(Math.random() * 10) + 1;
    console.log(internetSpeed);
    if(internetSpeed > 4){
        success();
    }
    else{
        failure();
    }
}

savetoDb("ayush", ()=>{
    console.log("your data was saved");
    savetoDb("hello world", ()=>{
        console.log("success2: data 2 saved");
    }, () => {
        console.log("failure2 : weak connection");
    });
}, ()=>{
    console.log("weak connection, data was not saved !!");
});

// 7
// your data was saved
// 8
// success2: data 2 saved
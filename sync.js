function register(){
    waitForInput(200);
    console.log("register here");
}
function login(){
    waitForInput(1000)
    console.log("register here");
}
function getData(){
    waitForInput(1000)
    console.log("register here");
}
function displayData(){
    waitForInput(1000)
    console.log("display")
}
function waitForInput(delay){
    const nw = Date.now() + delay;
    while(Date.now() < nw){}
}

register();
login();
getData();
displayData();
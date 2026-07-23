function register(){
    setTimeout(() => {
        console.log("register here");
    },2000);
    
}
function login(){
   setTimeout(() => {
        console.log("logging in");
    },200);
    
}
function getData(){
    setTimeout(() => {
        console.log("getting data");
    },2000);
    
}
function displayData(){
    
    console.log("display")
}
// function waitForInput(delay){
//     const nw = Date.now() + delay;
//     while(Date.now() < nw){}
// }

register();
login();
getData();
displayData();
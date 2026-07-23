// call_back => function ke argument me function call aur call function ke andar hi

function register(cb){
    setTimeout(() => {
        console.log("register here");
        cb();
    },200);
    
    
}
function login(cb){
   setTimeout(() => {
        console.log("logging in");
        cb();
    },200);
    
}
function getData(cb){
    setTimeout(() => {
        console.log("getting data");
        cb();
    },200);
    
}
function displayData(){
    
    console.log("display");
}


register(() => {
    login(()=>{
        getData(()=>{
            displayData();
        })
    })
})
// call_back => function ke argument me function call aur call function ke andar hi

function register(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
             resolve();
            console.log("register here");
        },200);
    })
    
}
function login(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject();
            console.log("logging in");
        },200);
    })
    
}
function getData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
             resolve();
            console.log("getting data");
        },200);
    })
    
}
function displayData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
             resolve();
            console.log("Displaying");
        },200);
    })
}


// register().then(login)
// .then(getData) 
// .then(displayData)
// .catch((err) => {
//     console.log("Error" , err);
// })

async function test(){
    try{
        await register();
        await login();
        await getData();
        await displayData();
    }
    catch(err){
        console.log("Error" , err);
    }
}

test();
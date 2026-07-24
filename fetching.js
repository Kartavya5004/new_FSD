async function loadDetails(){
    try{
        const url = "https://dummyjson.com/products";
        const res= await fetch(url);
        
        const data = await res.json();
        // console.log(data);
         document.getElementById("para").innerText = data.products[0].title;
    }catch(err){
        console.log(err)
    }
}

loadDetails();
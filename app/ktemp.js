
const data = [
    {image:"",price:"100/-" },
    {image:"",price:"100/-" },
    {image:"",price:"100/-" },

]

function book(props){
    const child = document.createElement("div");
    child.setAttribute("class","card")
    const image = document.createElement("img");
    image.setAttribute("src", props.image);
    image.setAttribute("width" , "75px");
    image.setAttribute("height" , "75px");
    image.style.margin = "auto";
    const h2 = document.createElement("h2");
    h2.innerText ="Price: " +  props.price;
    child.appendChild(image);
    child.appendChild(h2);
}
const parent = document.getElementById("root");


for(i of data){
    parent.appendChild(book(i));
}

const booklist = document.createElement('div')
booklist.setAttribute("class", "booklist")





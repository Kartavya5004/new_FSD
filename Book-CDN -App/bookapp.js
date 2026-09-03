const bookdata = [
    {image: "", price: 200},
    {image: "", price: 200},
    {image: "", price: 200}

]

function Book(props){
    const image = React.createElement("img" ,{src:props.image ,width:"100px"});
    const h2 = React.createElement("h2", {},"Price:");
    const bt = React.createElement("button",{onClick:()=> addToCart(props)}, "AddToCart");
    const div = React.createElement("div", {className: "card"},[image,h2,bt]);
    return div;

}
const cart = [];
function addToCart(data){
    cart.push(data);
    console.log();
    alert("Book added")
}

function viewCart(){
    if(cart.length == 0){
        const h2 = React.createElement("h2", {},"Cart is empty");
        const parent = document.getElementById("cart");
        parent.appendChild(h2);

    }else{

    }
}

const bookstore = bookdata.map((b) =>(
    Book(b)
))

const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);

root.render(bookstore);
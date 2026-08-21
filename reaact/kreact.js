const data = [
    {image:"",price:"100/-" },
    {image:"",price:"100/-" },
    {image:"",price:"100/-" },

]

function book(props){
    const image = React.createElement("img" ,{src:props.image,width:"50px" , height:"50px"});
    const h2 = React.createElement("h2" ,{color:"red"},"price: " + props.price)
    const child = React.createElement("div", {className: "card"},{image,h2} )
    return child;
}
const bookdata = data.map((i) => {
    React.createElement("div" , {className:"booklist"} ,book(i));
})


const parent = document.getElementById("root");
ReactDOM.render(booklist);

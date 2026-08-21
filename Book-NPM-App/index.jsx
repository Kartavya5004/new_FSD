
const book = [
    {src: "" , Price :200}
]

function Book({props}){
    return (
        <div>
            <img src= {props.src} width={100} height={100}></img>
            <h2>Price : {props.Price}</h2>
            <button>Add to cart</button>
        
        </div>
    )
}


function App(){
    return(
        <div>
            {
                book.map((b)=> {
                    return <Book props ={b} />
                })
            }

        </div>
    )
}

const parent = document.getElementById("root")
const root = ReactDOM.createRoot(parent)
root.render(<App/>)


// const root = ReactDOM.createRoot(
//   document.getElementById('root')
// );
// const element = <h1>Hello, world</h1>;
// root.render(element);




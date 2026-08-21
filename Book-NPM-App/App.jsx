import book from "."

function App(){
    return(
        <div>
            <book/>
            <book/>
            <book/>
            <book/>

        </div>
    )
}

const parent = document.getElementsById("root")
const root = ReactDOM.CreateRoot("parent")
root.render(<App/>)


export default App
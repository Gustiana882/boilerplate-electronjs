import React, { useState, useEffect } from "react";
import "./app.css"

const App = () => {

    const [count, setcount] = useState(0)

    function add(){
        setcount(count+1)
    }

    function minus(){
        setcount(count-1)
    }

   return (
       <>
        <div className="container">
            <div>
                <h1>{count}</h1>
                <div>
                    <button onClick={add}>+</button>
                    <button onClick={minus}>-</button>
                </div>
            </div>
        </div>
       </>
   )
};

export default App;
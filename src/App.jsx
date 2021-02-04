import React from 'react'
import Functions from './components/Functions'
import Numbers from './components/Numbers'
import MathOperations from './components/MathOperations'
import Result from './components/Result'
import './App.css'

const App = () => {
    // las arrow function si solo tienen un parametro se puede quitar los paréntesis

    return (<main className="react-calculator">
        <h2>Calc App</h2>
        <div className="d-flex">
            <div className="column-left">
                <Result value={undefined}/>
                <Numbers onClickNumber={number => console.log("Click en number: ", number)} />
                <Functions
                    onContentClear={clear => console.log("Content Clear", clear)}
                    onDelete={() => console.log("onDelete")}
                />
            </div>
            <div className="column-right">
                <MathOperations 
                    onClickOperation={operation => console.log("Operación: ", operation)}
                    onClickEqual={equal => console.log("Equal: ", equal)} 
                />
            </div>
        </div>
    </main>)
}

export default App

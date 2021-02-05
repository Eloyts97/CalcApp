import React, { useState } from 'react'
import Functions from './components/Functions'
import Numbers from './components/Numbers'
import MathOperations from './components/MathOperations'
import Result from './components/Result'
import './App.css'

const App = () => {
    // arrayFuncionModificaTexto => ["hola", funcion]
    // 1er posición: valor (que inicialmente es el valor por defecto)
    // const texto = arrayFuncionModificaTexto[0]
    // 2da posición: función que me va a permitir modificar el valor por defecto
    // const funcionModificaTexto = arrayFuncionModificaTexto[1]

    // Array destructuring
    const [stack, setStack] = useState("")

    return (<main className="react-calculator">
        <h2>Calc App</h2>
        <div className="d-flex">
            <div className="column-left">
                <Result value={stack}/>
                <Numbers onClickNumber={number => {
                    console.log("Click en number: ", number)
                    setStack(stack + number)
                }} />
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

/* eslint no-eval: 0 */
import React, { useState } from 'react'
import words from 'lodash.words'
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

    const items = words(stack, /[^+^*^-^/]+/g)

    const value = items.length > 0 ? items[items.length - 1] : "0"

    return (<main className="react-calculator">
        <h2>Calc App</h2>
        <div className="d-flex">
            <div className="column-left">
                <Result value={value}/>
                <Numbers onClickNumber={number => {
                    console.log("Click en number: ", number)
                    setStack(`${stack}${number}`)
                }} />
                <Functions
                    onContentClear={clear => {
                        console.log("Content Clear", clear)
                        setStack("")
                    }}
                    onDelete={() => {
                        if (stack.length > 0) {
                            const newStack = stack.substring(0, stack.length - 1)
                            setStack(newStack)
                            console.log("onDelete")
                        }
                    }}
                />
            </div>
            <div className="column-right">
                <MathOperations 
                    onClickOperation={operation => {
                        console.log("Operación: ", operation)
                        setStack(`${stack}${operation}`)
                    }}
                    onClickEqual={equal => {
                        console.log("Equal: ", equal)
                        setStack(eval(stack).toString())
                    }} 
                />
            </div>
        </div>
    </main>)
}

export default App

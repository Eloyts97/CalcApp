import React from 'react'
import Button from './components/Button'
import Result from './components/Result'
import './App.css'

const App = () => {
    // las arrow function si solo tienen un parametro se puede quitar los paréntesis
    const clickHandlerFunction = text => {
        console.log("Button.clickHandler", text)
    }

    return (<main className="react-calculator">
        <h2>Calc App</h2>
        <div className="d-flex">
            <div className="column-left">
                <Result value={undefined}/>
                <div className="numbers">
                    <Button text="1" clickHandler={clickHandlerFunction}/>
                    <Button text="2" clickHandler={clickHandlerFunction}/>
                    <Button text="3" clickHandler={clickHandlerFunction}/>
                    <Button text="4" clickHandler={clickHandlerFunction}/>
                    <Button text="5" clickHandler={clickHandlerFunction}/>
                    <Button text="6" clickHandler={clickHandlerFunction}/>
                    <Button text="7" clickHandler={clickHandlerFunction}/>
                    <Button text="8" clickHandler={clickHandlerFunction}/>
                    <Button text="9" clickHandler={clickHandlerFunction}/>
                    <Button text="0" clickHandler={clickHandlerFunction}/>
                </div>
                <div className="functions">
                    <button>clear</button>
                    <button>r</button>
                </div>
            </div>
            <div className="column-right">
                <div className="maths-operations">
                    <button>+</button>
                    <button>-</button>
                    <button>*</button>
                    <button>/</button>
                    <button>=</button>
                </div>
            </div>
        </div>
    </main>)
}

export default App

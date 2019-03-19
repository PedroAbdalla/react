import React from 'react'
import ReactDOM from 'react-dom'
// import Component from './componente'
import Primeiro, {Segundo} from './componente'

// ReactDOM.render(<h1>Olá React 2</h1>, document.getElementById('app'))
// ReactDOM.render(<Component value="show!" />, document.getElementById('app'))
ReactDOM.render(
    <div>
        <Primeiro />
        <Segundo />
    </div>
, document.getElementById('app'))
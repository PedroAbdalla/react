import React from 'react'
import ReactDOM from 'react-dom'
import Field from './field'

// ReactDOM.render(<h1>Olá React 2</h1>, document.getElementById('app'))
ReactDOM.render(
    <Field  label='Contador' initiaValue={10} />
, document.getElementById('app'))

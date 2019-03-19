import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

// ReactDOM.render(<h1>Olá React 2</h1>, document.getElementById('app'))
ReactDOM.render(
    <Family lastName="Silva">
        <Member name="guilherme" ></Member>
    </Family>
, document.getElementById('app'))

import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import Field from './field'
import fieldReducer from './fieldReducer'

const reducers = combineReducers({
    field: fieldReducer
})

// ReactDOM.render(<h1>Olá React 2</h1>, document.getElementById('app'))
ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <Field initiaValue={10} />
    </Provider>
, document.getElementById('app'))

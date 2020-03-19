import React from 'react'
import ReactDom from 'react-dom'
import App from './routes/App'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Reducer from './reducers'

const initialState = {
    api: {
        endpoint: 'http:192.168.3.203'
    }
}

const store = createStore(Reducer, initialState)

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)

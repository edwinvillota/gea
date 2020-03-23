import React from 'react'
import ReactDom from 'react-dom'
import App from './routes/App'
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'
import Reducer from './reducers'

const initialState = {
    api: {
        endpoint: 'http:192.168.3.203'
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    Reducer, 
    initialState,
    composeEnhancers(
        
    )
)

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)

import React from 'react';
import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Route from '../route.js'
import store from '../store/index'
const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                {Route}
            </BrowserRouter>
        </Provider>
    )
}
hydrate(<App />, document.getElementById('root'))
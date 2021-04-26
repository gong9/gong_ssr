import React from 'react';
import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Route from '../route.js'
const App = () => {
    return (
        <BrowserRouter>
            {Route}
        </BrowserRouter>
    )
}
hydrate(<App />, document.getElementById('root'))
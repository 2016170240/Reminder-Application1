import React from 'react'
import Reactdom from 'react-dom'
import bootstrap from 'bootstrap/dist/css/bootstrap.css'
import {Provider} from 'react-redux'
import {createStore} from "redux"
import Red1 from './reducers/index'
import App from './components/App'


const store = createStore(Red1);
Reactdom.render(


    <Provider store={store}><App/></Provider>

    ,document.getElementById("root")
)

import React from 'react';
import ReactDOM  from 'react-dom';
import {App} from './app'
import ComponentToRenderContext from './Context/ComponentToRenderContext'

ReactDOM.render(
    <ComponentToRenderContext.Provider>
        <App/>
    </ComponentToRenderContext.Provider>
    ,
    document.getElementById('app'))
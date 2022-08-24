import React from "react"
import Filter from '../Components/Filter/Filter.js'

import './MainPage.css'
const MainPage = () => {
    return (
        <div className="body">
            <div className="main-container">
                <div className="top-container">
                    <div className="logos-container">
                        <img src="https://i.imgur.com/JXqFr4l.png"/>
                    </div>
                    <h1>!Conoce tu facultad!</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    <div className="filtros-container">
                        <div>BUSCADOOOR</div>
                        <div className="botones-container">
                            <Filter/>
                            <div>croquis</div>
                        </div>
                    </div>
                </div>
                <div className="bottom-container">
                    
                </div>
            </div>
            <footer></footer>
        </div>
    )
}

export default MainPage
import React from "react"
import Filter from '../Components/Filter/Filter.js'
import Searcher from '../Components/Searcher/Searcher.js'
import ProfessorCard from '../Components/Cards/ProfessorCard/ProfessorCard';

import './MainPage.css'
const MainPage = () => {
    return (

        <div className="body">
            <div className="body-container">
                <div className="top-container">
                    <div className="logos-container">
                        <img src="https://i.imgur.com/JXqFr4l.png"/>
                    </div>
                    <h1>!Conoce tu facultad!</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    <div className="filtros-container">
                    <Searcher/>
                        <div className="botones-container">
                            <Filter/>
                            CROQUIS
                        </div>
                    </div>
                </div>
                <div className="bottom-container">
                    <div>
                        <ProfessorCard/>
                    </div>
                </div>
            </div>
            <footer></footer>
        </div>
    )
}

export default MainPage
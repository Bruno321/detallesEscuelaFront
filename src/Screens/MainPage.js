import React ,{useContext} from "react"
import Filter from '../Components/Filter/Filter.js'
import Searcher from '../Components/Searcher/Searcher.js'
import ProfessorCard from '../Components/Cards/ProfessorCard/ProfessorCard';
import BuildingCard from '../Components/Cards/BuildingCard/BuildingCard';
import { ComponentToRenderContext } from "../Context/ComponentToRenderContext.js";

import './MainPage.css'
const MainPage = () => {
   const {componentToRender,setComponentToRender} = useContext(ComponentToRenderContext)

   const textToShow = () => {
    // 0 = The filter selection is Profesores
    if(componentToRender===0){
        return 'Aqui podras ver la información de los profesores de la facultad'
    }
    // 1 = The filter selection is Salones 
    if(componentToRender===0){
        return 'Aqui podras ver la información de los salones de la facultad'
    }
    // 2 = The filter selection is Laboratorios 
    if(componentToRender===0){
        return 'Aqui podras ver la información de los laboratorios de la facultad'
    }
    // 3 = The filter selection is Cubiculos 
    if(componentToRender===0){
        return 'Aqui podras ver la información de los cubiculos de la facultad'
    }
   }
    return (

        <div className="body">
            <div className="body-container">
                <div className="top-container">
                    <div className="logos-container">
                        <img src="https://i.imgur.com/JXqFr4l.png"/>
                    </div>
                    <h1>!Conoce tu facultad!</h1>
                    <p>{textToShow()}</p>
                    <div className="filtros-container">
                    <div className="searcher-wrapper">
                        <Searcher/>
                    </div>
                        <div className="botones-container">
                            CROQUIS
                            <div className="filter-wrapper">
                                <Filter/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom-container">
                    <div>
                        <ProfessorCard/>
                        <BuildingCard/>
                    </div>
                </div>
            </div>
            <footer></footer>
        </div>
    )
}

export default MainPage
import React ,{useContext, useState,useEffect} from "react"
import Filter from '../Components/Filter/Filter.js'
import Searcher from '../Components/Searcher/Searcher.js'
import ProfessorCard from '../Components/Cards/ProfessorCard/ProfessorCard';
import BuildingCard from '../Components/Cards/BuildingCard/BuildingCard';
import { ComponentToRenderContext } from "../Context/ComponentToRenderContext.js";
import ButtonMap from "../Components/ButtonMap/ButtonMap";
import Footer from '../Components/Footer/Footer';


import './MainPage.css'
const MainPage = () => {
   const {componentToRender,setComponentToRender} = useContext(ComponentToRenderContext)
    const query = [1,2,3,4,5,6,7,8,9]
   const componenetsToRender = (data) => {
    // 0 = The filter selection is Profesores
    if(componentToRender===0){
        return <ProfessorCard/>
    }
    // 1 = The filter selection is Salones 
    if(componentToRender===1){
        return <BuildingCard/>
    }
    // 2 = The filter selection is Laboratorios 
    if(componentToRender===2){
        return <BuildingCard/>
    }
    // 3 = The filter selection is Cubiculos 
    if(componentToRender===3){
        return <BuildingCard/>
    }
   }
   const textToRender = () => {
    // 0 = The filter selection is Profesores
    if(componentToRender===0){
        return 'Aqui podras ver la información de los profesores de la facultad'
    }
    // 1 = The filter selection is Salones 
    if(componentToRender===1){
        return 'Aqui podras ver la información de los salones de la facultad'
    }
    // 2 = The filter selection is Laboratorios 
    if(componentToRender===2){
        return 'Aqui podras ver la información de los laboratorios de la facultad'
    }
    // 3 = The filter selection is Cubiculos 
    if(componentToRender===3){
        return 'Aqui podras ver la información de los cubiculos de la facultad'
    }
   }

   useEffect(()=>{
        //Aqui iran los GET
   },[componentToRender])
    return (

        <div className="body">
            <div className="body-container">
                <div className="top-container">
                    <div className="logos-container">
                        <img src="https://i.imgur.com/JXqFr4l.png"/>
                    </div>
                    <h1>!Conoce tu facultad!</h1>
                    <div className="info-text-wrapper">
                        <p>{textToRender()}</p>
                    </div>
                    <div className="filtros-container">
                        <div className="searcher-wrapper">
                            <Searcher/>
                        </div>
                        <div className="botones-container">
                        <div className="map-wrapper">
                                <ButtonMap/>
                            </div>
                            <div className="filter-wrapper">
                                <Filter/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom-container">
                        {
                            query.map((data)=>{
                                return (
                                    <>
                                        {componenetsToRender(data)}
                                    </>
                                    )
                            })
                        }
                <Footer/>
                </div>
            </div>
        </div>

    )
}

export default MainPage
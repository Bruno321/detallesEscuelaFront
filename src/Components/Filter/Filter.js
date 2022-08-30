import React,{useContext} from "react";
import "./Filter.css";
import iconFilter from  '../Assets/img/iconFilter.png'
import {ComponentToRenderContext} from '../../Context/ComponentToRenderContext'

const Filter = () => {

    let showOption = false;
    /**
     * React Hook de useState : cambia el int que dicta los componentes por renderizar
     * 0 (default) Maestros
     * 1 Salones
     * 2 Laboratorios
     * 3 Cubiculos 
     */
    const {setComponentToRender} = useContext(ComponentToRenderContext)

    /*
        Variable que contiene la opción seleccionada. 
        Como opción por default es la opción de Maestros.
    */
    let selectOptionValue = 'Maestros';


    /* 
        La función se activa al hacer click al filtro para mostrar y ocultar el contenedor que contiene las opciones para filtrar.
    */
    const showOptions = () => {
        if(!showOption){
            document.getElementById('optionContainer').style['display'] = 'flex';
        }else{
            document.getElementById('optionContainer').style['display'] = 'none';
        }

        showOption = !showOption;
    }

    /** 
        *Función que cambia el titulo a la opción seleccionada, además de subrayar la opción.
        *Las demás opciones que no estan seleccionadas se quita la decoración de texto subrayado.
        * @params id identificador de la opción seleccionada en el menú de filtro. 
    */
    const selectOption = (id) => {
        let div = document.getElementById(id);
        let titulo = document.getElementById('tituloFilter');
        titulo.innerHTML = document.getElementById(id).innerHTML;
        selectOptionValue = titulo.innerHTML;
        showOptions();
        console.log(selectOptionValue);

        for(let i = 0; i < 4; i++){
            document.getElementById('optionContainer').children[i].style['text-decoration'] = 'none'
        }

        div.style['text-decoration'] = 'underline 2px';
    }
    /** 
        *Función que llama a selectOption y setComponentToRender.
        * @params id identificador de la opción seleccionada en el menú de filtro. 
        * @params optionNumber el numero que representa la opcion seleccionada
    */
    const handleClick = (id,optionNumber) => {
        selectOption(id)
        setComponentToRender(optionNumber)
    }

    return(
        <div className="filter-container">
            <div className="filter-title" onClick={() => showOptions()}>
                <span id="tituloFilter">Maestros</span>
                <img src={iconFilter} className='img'/>
            </div>
            <div className="container-options" id="optionContainer">
                <span className="options" id="Maestros" onClick={() => handleClick('Maestros',0)}>Maestros</span>
                <span className="options" id="Salones" onClick={() => handleClick('Salones',1)}>Salones</span>
                <span className="options" id="Laboratorios" onClick={() => handleClick('Laboratorios',2)}>Laboratorios</span>
                <span className="options" id="Cubiculos" onClick={() => handleClick('Cubiculos',3)}>Cubiculos</span>
            </div>
        </div>
    );
};

export default Filter;
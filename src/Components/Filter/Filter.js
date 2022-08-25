import React from "react";
import "./Filter.css";
import iconFilter from  '../Assets/img/iconFilter.png'

const Filter = () => {

    let showOption = false;


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

    return(
        <div className="filter-container">
            <div className="filter-title" onClick={() => showOptions()}>
                <span id="tituloFilter">Maestros</span>
                <img src={iconFilter} className='img'/>
            </div>
            <div className="container-options" id="optionContainer">
                <span className="options" id="Maestros" onClick={() => selectOption('Maestros')}>Maestros</span>
                <span className="options" id="Salones" onClick={() => selectOption('Salones')}>Salones</span>
                <span className="options" id="Laboratorios" onClick={() => selectOption('Laboratorios')}>Laboratorios</span>
                <span className="options" id="Cubiculos" onClick={() => selectOption('Cubiculos')}>Cubiculos</span>
            </div>
        </div>
    );
};

export default Filter;
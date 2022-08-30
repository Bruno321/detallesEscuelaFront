import React, {createContext, useState} from "react";

export const ComponentToRenderContext = createContext()
const Provider = ({children})=> {

    const [componentToRender,setComponentToRender] = useState(0)

    const value = {
        /**
         * 0 (default) Maestros
         * 1 Salones
         * 2 Laboratorios
         * 3 Cubiculos 
         */
        componentToRender,
        /**
         * React Hook de useState cambia componentToRender
         * @params data: int que dicta los componentes por renderizar
         */
        setComponentToRender:(data)=>{
            setComponentToRender(data)
        }
    }

    return (
        <ComponentToRenderContext.Provider value={value}>
            {children}
        </ComponentToRenderContext.Provider>
    )
}

export default {
    Provider,
    Consumer: ComponentToRenderContext.Consumer
}
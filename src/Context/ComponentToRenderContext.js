import React, {createContext, useState} from "react";

export const ComponentToRenderContext = createContext()
const Provider = ({children})=> {

    const [componentToRender,setComponentToRender] = useState(0)

    const value = {
        componentToRender,
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
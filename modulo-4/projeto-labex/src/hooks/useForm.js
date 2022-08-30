import { useState } from "react"

//Hook válido para qualquer fomulário do projeto
export const useForm = (initialState) => {
    const [form, setform] = useState(initialState)
    
    
    const onChange = (event) => {
        const {name,value}=event.target
        setform({...form,[name]:value})   
    }

    //Limpar os inputs
    const clear = () => {
        setform(initialState)
    }
    return {form, onChange, clear}
}
import { useState } from "react"

export const useForm = (initialState) => {
    const [form, setform] = useState(initialState)
    
    
    const onChange = (event) => {
        const {name,value}=event.target
        setform({...form,[name]:value})   
    }
    return[form, onChange]
}
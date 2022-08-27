import React,{useState, useEffect} from "react";
import axios from "axios";
const useRequestData = (url) =>{
    const [data, setData] = useState(undefined)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError]= useState("")

    const header = {
        headers : {
            auth: localStorage.getItem("token")
        }
    }

    useEffect(() =>{
        setIsLoading(true)
        axios.get(url, header)
        .then((response) =>{
            setIsLoading(false)
            setData(response.data)
        }).catch((error) =>{
            setIsLoading(false)
            setError(error)
            console.log(error.data)
        })
    }, [url])
    return [data, isLoading, error]
}
export default useRequestData;
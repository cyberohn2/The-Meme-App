import { useEffect, useState } from "react";

function useFetch(url) {
    const [resource, setResource] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() =>{
            fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw Error("couldn't fetch data, kindly reload")
                }
                return res.json();
            })
            .then(data => {
                setResource(data)
                setIsLoading(false)
                setError(null)
            })
            .catch( err => {
                setError(err.message)
                setIsLoading(false)
            })

    }, [url])

    return {resource, isLoading, error}
}

export default useFetch;
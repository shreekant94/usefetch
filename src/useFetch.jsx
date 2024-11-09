    import React from 'react'
    import { useState, useEffect } from 'react';
    
    const useFetch = (url) => {
        const [data, setData] = React.useState(null)
        const [error, setError] = React.useState(null)
        const [loading, setLoading] = React.useState(false)
     
        useEffect(() => {
                const fetchData = async() =>{
                    setLoading(true)
                    try {
                        const response = await fetch(url);
                        if(!response.ok){
                            throw new error('Network response was not okay')
                        }
                        const result = await response.json()
                        setData(result)
                       

                    } catch (error) {
                        setError(error.message);
                    }
                    finally{
                        setLoading(false)
                    }
                };

                fetchData();

        }, [url]);

        return{data, loading, error}
    }
    
    export default useFetch
    
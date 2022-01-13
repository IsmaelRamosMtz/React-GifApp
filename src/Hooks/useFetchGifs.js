import { useState, useEffect } from "react"
import { getGifs } from "../Helpers/GetGifs";


export const useFetchGifs = ( cat ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        getGifs( cat )
        .then( imgs => {

            setTimeout(() => {
                setState({
                    data: imgs,
                    loading: false
                })
            }, 3000);
            
        })
    }, [ cat ])
    
    return state; // {data: [], loading: true}
}
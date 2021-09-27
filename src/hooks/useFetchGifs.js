import { useEffect, useState } from 'react';
import {getArrGifs} from '../helpers/getArrGifs'

export const useFetchGifs = (Categoria) => {

    const [ObjArrImagenes, SetObjArrImagenes] = useState({
        ArrImagenes: [],
        Cargando: true
    })

    useEffect(()=>{
        getArrGifs(Categoria)
        .then((ArrGifs)=>{
            SetObjArrImagenes({
                ArrImagenes:ArrGifs,
                Cargando: false     

                })
            }); 
            // setTimeout(() => {
   
            // }, 1000);

    },[Categoria])

    return ObjArrImagenes; // devueve  {data:[], loading: true}

}

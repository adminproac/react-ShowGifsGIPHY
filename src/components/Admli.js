import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'

export const Admli = ({Categoria}) => {

    const {ArrImagenes,Cargando} = useFetchGifs(Categoria);
    return (
        <div className="card-grid">
            <h3 className="animate__animated animate__fadeIn" >Categoria: {Categoria}</h3>
            {/* 
            El operador && unicamente devuelve true cuando ambos son true
            es decir que si el primero es true se necesita evaluar el segundo y el
            segundo muesta el msg. Si el primero es falso no se necesita evaluar el
            segundo por que siempre sera falso entonces hace nada.
            */}
            {Cargando && <p className="animate__animated animate__flash">Cargando...</p>} 
            <ol>
                {
                    ArrImagenes.map(({title,url,id})=> {
                        return (
                                <div key={id} className="card animate__animated animate__fadeIn">
                                    <img src={url} 
                                         alt={title}/>
                                    <p>{title}</p>
                                </div>
                                )
                    })
                }
            </ol>
        </div>
    )
}

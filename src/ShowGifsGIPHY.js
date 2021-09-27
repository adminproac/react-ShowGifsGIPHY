import React,{useState} from 'react'
import { Admli } from './components/Admli';

const ShowGifsGIPHY = () => {
    const [TxtCategoriaValor, SetTxtCategoriaValor] = useState('')
    const [ArrCategorias, SetArrCategorias] = useState (['spiderman']);

    //manejo el evento cuando cambie el txtCategoria
    const change_TxtCategoria=(e)=> {
        SetTxtCategoriaValor(e.target.value); //establezca el nuevo valor del cuadro de texto

    }

    //manejo el evento cuando hago enter en el txtCategoria
    const enter_TxtCategoria=(e)=>{
        e.preventDefault(); //detiene la propagacion de un evento

        if (TxtCategoriaValor.trim().length>0) {
            SetArrCategorias((ArrCategorias)=>[TxtCategoriaValor, ...ArrCategorias]); //establezca el nuevo valor del arreglo categories 
            SetTxtCategoriaValor('');   

        }
        
    }

    return (
            <form onSubmit={enter_TxtCategoria}>
                <label>Categoria:</label>
                <input
                    type="text"
                    value={TxtCategoriaValor} 
                    onChange={change_TxtCategoria}
                    name="TxtCategoria"
                />   
                <hr/>
                <ol>
                    {
                        ArrCategorias.map((Categoria)=>(
                            <Admli className="card-grid animate__animated animate__bounce animate__delay-10s" key={Categoria} 
                                    Categoria={Categoria}/>))
                    }
              </ol>
            </form>
         )
}

export default ShowGifsGIPHY
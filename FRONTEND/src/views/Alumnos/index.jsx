import './alumnos.css';
import { useState } from 'react';
import { toast }  from 'react-toastify'

export function Alumno(){

    const [nombre, setNombre] = useState('');
    const [sexo, setSexo] = useState('');
    const [serie, setSerie] = useState('');
 

    const validarCampos = (e) =>{
        e.preventDefault()

        if(nombre === ""){
            toast("Ingrese el nombre");
        }else if(sexo === ""){
            toast("Ingrese el sexo");

        }else if(serie === ""){
            toast("Ingrese la serie");
        }else{
            toast("Registro exitoso");
        }
    } 



    /*************************************************** */
    /************************************************* */
    /*************************************************** */

    return(
        <div>
            <div className="card">
                <div className="card-header">
                    <h2>Alumnos</h2>
                </div>
                <div className="card-body">
                    <div className="container">
                        <form action="" onSubmit={validarCampos}>
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="nombre">Nombre</label>
                                    <input type="text" placeholder="nombre" className="form-control" value={nombre} onChange={ e => setNombre(e.target.value)}/>
                                  

                                </div>
                                <div className="col">
                                    <label htmlFor="sexo">Sexo</label>
                                    <select className="form-control custom-select" id="sexo" value={sexo} onChange={ e => setSexo(e.target.value)}>   
                                        <option value="" selected disabled hidden>Seleccionar...</option>
                                        <option value="Femenino">Femenino</option>
                                        <option value="Masculino">Masculino</option>
                                    </select>
                                  
                                </div>
                                <div className="col">
                                    <label htmlFor="serie">Serie</label>
                                    <input type="text" placeholder="serie" className="form-control" value={serie} onChange={e => setSerie(e.target.value)}/>
                                    

                                </div>
                            </div>   
                            <div className="row mt-3">
                                <div className="col ">
                                    <button className="btn btn-outline-success" type='submit'>Agregar</button>
                                </div>
                            </div>
                        </form>
                    
                        <table className="table table-striped table-bordered mt-5">
                            <thead>
                                <tr className='text-center'>
                                    <th>id</th>
                                    <th>Nombre</th>
                                    <th>Sexo</th>
                                    <th>Serie</th>
                                    <th width="200" className="text-center">Acciones</th>
                                </tr>
                            </thead>
                            <tbody className='text-center'>
                                <tr>
                                    <td>02</td>
                                    <td>Calos Eduardo</td>
                                    <td>Masculino</td>
                                    <td>6° A</td>
                                    <td className='text-center btn-table'>
                                        <button className="btn btn-outline-warning">Editar</button>
        
                                        <button className="btn btn-outline-danger">Eliminar</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>03</td>
                                    <td>Calos Eduardo</td>
                                    <td>Masculino</td>
                                    <td>6° B</td>
                                    <td className='text-center btn-table'>
                                        <div className="btn btn-outline-warning">Editar</div>
                                    
                                        <div className="btn btn-outline-danger">Eliminar</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>04</td>
                                    <td>Calos Eduardo</td>
                                    <td>Masculino</td>
                                    <td>6° C</td>
                                    <td className='text-center btn-table'>
                                        <div className="btn btn-outline-warning">Editar</div>
                                    
                                        <div className="btn btn-outline-danger">Eliminar</div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
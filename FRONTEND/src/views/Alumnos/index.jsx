export function Alumno(){
    return(
        <div>
            <div className="card">
                <div className="card-header">
                    <h2>Alumnos</h2>
                </div>
                <div className="card-body">
                    <div className="container">
                        <div className="row">
                            <form action="">
                                <div className="col">
                                    <label htmlFor="nombre">Nombre</label>
                                    <input type="text" placeholder="nombre" className="form-control"/>
                                </div>
                                <div className="col">
                                    <label htmlFor="sexo">Nombre</label>
                                    <select className="form-control" id="sexo">
                                        <option value="">Femenino</option>
                                        <option value="">Masculino</option>
                                    </select>
                                </div>
                                <div className="col">
                                    <label htmlFor="serie">Serie</label>
                                    <input type="text" placeholder="serie" className="form-control"/>
                                </div>
                                <div className="col">
                                    <div className="btn btn-outline-success form-control">Agregar</div>
                                </div>
                                
                            </form>
                        </div>
                    </div>
                    <div className="table">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Nombre</th>
                                <th>Sexo</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>02</td>
                                <td>Calos Eduardo</td>
                                <td>Masculino</td>
                                <td>6° B</td>
                            </tr>
                            <tr>
                                <td>03</td>
                                <td>Calos Eduardo</td>
                                <td>Masculino</td>
                                <td>6° B</td>
                            </tr>
                            <tr>
                                <td>04</td>
                                <td>Calos Eduardo</td>
                                <td>Masculino</td>
                                <td>6° B</td>
                            </tr>
                        </tbody>
                    </div>
                </div>
            </div>
        </div>
    )
}
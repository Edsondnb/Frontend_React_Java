import { Alumno } from "./views/Alumnos"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  

  return (
    <div className="container">
      <ToastContainer/>
      <toast/>
      <Alumno/>
    </div>
    


  )
}

export default App

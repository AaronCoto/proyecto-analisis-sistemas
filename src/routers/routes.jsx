

import { Routes , Route} from 'react-router-dom'
import Home from '../pages/home'
import Loggin from '../pages/Loggin'
import NewSolicitud from '../pages/NewSolicitud'
import formIn from '../pages/form'
import Soli from '../pages/Soli'
import SolicitudesAdmin from '../pages/SolicitudesAdmin'
function MyRoutes({Login,setLogin}) {
  
  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/solicitudesAdmin' element={<SolicitudesAdmin Login={Login}/>}/>
      <Route path='/NewSolicitud' element={<NewSolicitud Login={Login}/>}/>
      <Route path='/form' element={<Soli/>}/>
      <Route path='/logout' element={<Loggin />}/>
    </Routes>
      
    </>
  )
}

export default MyRoutes;
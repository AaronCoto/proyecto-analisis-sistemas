

import { Routes , Route} from 'react-router-dom'
import Home from '../pages/home'
import Loggin from '../pages/Loggin'
import NewSolicitud from '../pages/NewSolicitud'
import formIn from '../pages/form'
import NewUser from '../pages/newUser'
import SolicitudesAdmin from '../pages/SolicitudesAdmin'
function MyRoutes({Login,setLogin}) {
  
  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/solicitudesAdmin' element={<SolicitudesAdmin Login={Login}/>}/>
      <Route path='/NewSolicitud' element={<NewSolicitud Login={Login}/>}/>
      <Route path='/newUser' element={<NewUser Login={Login}/>}/>
      <Route path='/logout' element={<Loggin />}/>
    </Routes>
      
    </>
  )
}

export default MyRoutes;
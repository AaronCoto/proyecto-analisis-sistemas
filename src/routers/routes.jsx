

import { Routes , Route} from 'react-router-dom'
import Home from '../pages/home'
import Details from '../pages/details'
import NewSolicitud from '../pages/NewSolicitud'

function MyRoutes() {
  
  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/details' element={<Details/>}/>
      <Route path='/NewSolicitud' element={<NewSolicitud/>}/>
    </Routes>
      
    </>
  )
}

export default MyRoutes;
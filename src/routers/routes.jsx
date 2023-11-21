

import { Routes , Route} from 'react-router-dom'
import Home from '../pages/home'
import Details from '../pages/details'

function MyRoutes() {
  
  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/details' element={<Details/>}/>
    </Routes>
      
    </>
  )
}

export default MyRoutes;
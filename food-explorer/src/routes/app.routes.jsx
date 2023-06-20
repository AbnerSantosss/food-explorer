import {Route,Routes} from 'react-router-dom'

import {SignIn} from '../Pages/SignIn'
import {SignUp} from '../Pages/SignUp'
import {HomeUser} from '../Pages/Home/HomeUser'

export function AppRoutes(){
    return(
        <Routes>
            <Route path='/' element={<HomeUser/>}/>
            <Route path='/signUp' element={<SignUp/>}/>
          </Routes>
    )
}



import {Routes,Route} from 'react-router-dom'
import Register from './Pages/auth/Register';
import { Login } from './Pages/auth/Login';
import PrivateRoute from './Pages/auth/PrivateRoute';

function App() {
  return (
    <div >
    <Routes>
      {/* partie authentification  */}
      <Route path='/' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
<Route path='/PrivateRoute' element={<PrivateRoute/>}/>
      {/* partie  */}
      </Routes>
    </div>
  );
}

export default App;

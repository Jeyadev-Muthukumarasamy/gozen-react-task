
import About from '../Component/About/About';
import LoginForm from '../Component/LoginForm'
import ProtectedRoute from '../Component/ProtectedRoute/ProtectedRoute';
// import ProtectedRoute from '../Component/ProtectedRoute/ProtectedRoute';
import './App.css'
import { Routes, Route } from "react-router-dom";

function App() {
  

  return (
    <>
    <Routes>
    <Route>
    <Route path = "/" element={<LoginForm />}/>
    <Route element = {<ProtectedRoute />}/>
    <Route path = "/about" element={<About/>}/>
    </Route>
    </Routes>
      
    </>
  )
}

export default App

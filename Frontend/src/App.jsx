import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import { SigninPage } from '../pages/SigninPage';
import { LoginPage } from '../pages/LoginPage';
import { Home } from '../pages/Home';
import { Dashboard } from '../pages/Dashboard';

function App() {

  return (
    <>

    <BrowserRouter>
    <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/signin' element={<SigninPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>

    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App

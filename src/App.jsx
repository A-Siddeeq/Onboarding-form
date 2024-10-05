import Loading from "./pages/Loading";
import "./App.css";
import { useEffect, useState } from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import WelcomePage from "./pages/WelcomePage";
import Login from "./pages/Login";
import ForgotPswd from "./pages/ForgotPswd";
import ResetPswd from "./pages/ResetPswd";
import Resetted from "./pages/Resetted";
import NoPage from "./pages/NoPage"
import SignUp from "./pages/SignUp";

export default function App() {
  const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => setLoading(false), 3300)
    }, [])
    if (loading) {
        return <Loading/>
    }

  return (
    <div>
    <BrowserRouter>
      <Routes>
      <Route element={<WelcomePage />} index path='/' />
      <Route path='/signup' element={<SignUp />} />
       <Route path='/login' element={<Login />} />
       <Route path='/forgot-password' element={<ForgotPswd />} />
       <Route path='/reset-password' element={<ResetPswd />} />
       <Route path='/password-success' element={<Resetted />} />
       <Route path='*' element={<NoPage />} />
      </Routes>
     </BrowserRouter>
    </div>
  );
}
 import{Routes,Route,Link} from "react-router-dom"
 import Dashboard from "./pages/Dashboard"
 import Send from "./pages/Send"
 import Signin from "./pages/Signin"
 import Signup from "./pages/Signup"  
 import Validation from "./pages/Validation" 
 import './index.css'
import { useEffect, useState } from "react"
import TransferStatus from "./pages/TransferStatus"
function App() {
  return (
    <>
     
      <Routes>
        <Route path="/status" element={<TransferStatus/>}> </Route>
        <Route path="/dashboard" element={<Dashboard/>}> </Route>
        <Route path="/" element={<Validation/>}></Route>
        <Route path="/signup" element={<Signup/>}> </Route>
        <Route path="/signin" element={<Signin/>}> </Route>
        <Route path="/send" element={<Send/>}> </Route>
      </Routes>
    </>
  )
}

export default App

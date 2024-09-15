import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [login , setlogin] = useState(false); 


  useEffect(()=>{

    const isauth = localStorage.getItem('token');
  
    if (!isauth) {
      setlogin(false);
    } else {
      setlogin(true);
    }
  },[])

 

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/dashboard">NoteApp</Link>
      </div>

      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        <div className={`hamburger ${isOpen ? "open" : ""}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
s
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li onClick={()=>{localStorage.removeItem('token')}}>
          <Link to={login? "/signin" : "/login"}> {login? "Logout" : "Login"}</Link>
        </li>
      </ul>
    </nav>
  );
}



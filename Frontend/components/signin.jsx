import { useState } from "react";
import { FaEnvelope, FaLock, FaRegEye, FaRegEyeSlash, FaUser } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"; // Added import for Link

export function Signin() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);

    return (
        <div className="container">
            <input type="text" className="form-input" placeholder="First Name" onChange={(e) => { setName(e.target.value) }} />

            <div className="input-container">
                <input type="text" className="form-input" placeholder="Username" onChange={(e) => { setUsername(e.target.value) }} />
                <FaUser className="input-icon" />
            </div>

            <div className="input-container">
                <input type="email" className="form-input" placeholder="Email Address" onChange={(e) => { setEmail(e.target.value) }} />
                <FaEnvelope className="input-icon" />
            </div>

            <div className="input-container">
                <input type={show ? "text" : "password"} className="form-input" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />
                <FaLock onClick={() => { setShow(!show) }} className="input-icon" />
            </div>

            <button className="button-signin" onClick={async () => {
                await axios.post("http://localhost:4050/user/signin", {
                    userName: username,
                    email: email,
                    password: password,
                    name: name
                }).then((res) => {
                    console.log(res.data);
                    alert(res.data.msg);
                    localStorage.setItem("token", res.data.token);
                    navigate("/dashboard");
                })
                .catch((err) => {
                    console.log(err);
                    alert(err.response.data.msg);
                })
            }}>
                Register
            </button>

            <div className="user-question">
                Already have an account? <Link to="/login" className="user-link">Login here</Link>
            </div>
        </div>
    );
}

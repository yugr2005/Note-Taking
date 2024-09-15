import axios from "axios";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"; // Added import for Link

export function Login() {

    const navigate = useNavigate();

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);
    const[err, setErr] = useState(false);

    return (
        <div className="container">
            <input
                type="text"
                className="form-input"
                placeholder="Username"
                onChange={(e) => setUserName(e.target.value)}
            />

            <div className="input-container">
                <input
                    type={show ? "text" : "password"}
                    className="form-input"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />

                {show ? (
                    <FaRegEye className="input-icon" onClick={() => setShow(!show)} />
                ) : (
                    <FaRegEyeSlash className="input-icon" onClick={() => setShow(!show)} />
                )}
            </div>

                {err ? <p>Invalid input</p> : null}
            <button
                className="button-signin"
                onClick={async () => {
                    await axios.post("http://localhost:4050/user/login", {
                        userName: userName,
                        password: password
                    })
                    .then((res) => {
                        console.log(res.data);
                        alert(res.data.msg);
                        localStorage.setItem("token", res.data.token);
                        navigate('/dashboard');
                    })
                    .catch((err) => {
                        console.log(err);
                        setErr(true);
                    })
                }}
            >
                Log-in
            </button>

            <div className="user-question">
                New here? <Link to="/signin" className="user-link">Sign up here</Link>
            </div>
        </div>
    );
}


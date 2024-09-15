import axios from "axios";
import { useEffect, useState } from "react"
import { Card } from "../components/Card";
import { AddNote } from "../components/AddNote";
import { Navbar } from "../components/navbar";

export function Dashboard() {
    const [data, setData] = useState([]);

    useEffect(() => {
        Render();
    }, []);

    const Render = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            console.error("No token found");
            return;
        }

        await axios.get("http://localhost:4050/user/getNotes", {
            headers: {
                Authorization: `${token}`,
            },
        })
        .then((res) => {
            setData(res.data.notes);
        })
        .catch((err) => {
            console.error(err);
            alert(err.response.data.msg);
        });
    }

    return (
        <div>
            <Navbar/>
            
            <div className="dashboard-container">
            
            <h1 className="dashboard-header">Your Notes</h1>
            <AddNote />
            {data.map((note, index) => (
                <Card key={index} notes={note} Fetchnotes={Render} />
            ))}

            </div>
        </div>
        
    );
}

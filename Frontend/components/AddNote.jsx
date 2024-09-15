import axios from "axios";
import { useState } from "react"

export function AddNote(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div className="addnote-container">
            <input 
                type="text" 
                className="addnote-input" 
                placeholder="Title" 
                onChange={(e) => setTitle(e.target.value)} 
            />
            <textarea 
                placeholder="Description" 
                className="addnote-input" 
                onChange={(e) => setDescription(e.target.value)} 
            />
            <button 
                className="addnote-button"
                onClick={async () => {
                    await axios.post("http://localhost:4050/user/addNote", {
                        title: title,
                        description: description
                    }, {
                        headers: {
                            Authorization: `${localStorage.getItem("token")}`
                        }
                    })
                    .then((res) => alert(res.data.msg))
                    .catch((err) => {
                        console.log(err);
                        alert(err.response.data.msg);
                    });
                        
                }}
            >
                Add Note
            </button>

        <p> Krish Here </p>
        </div>
    );
}

import axios from "axios";
import { useState } from "react";

export function Card({ notes, Fetchnotes }) {
    const [editing, setEditing] = useState(false);
    const [description, setDescription] = useState(notes.description);

    const handleSave = async () => {
        await axios.put('http://localhost:4050/user/updateNote', {
            title: notes.title,
            description: description
        }, {
            headers: {
                Authorization: `${localStorage.getItem('token')}`
            }
        })
        .then(() => {
            setEditing(false);
            Fetchnotes();
        })
        .catch((err) => console.log(err));
    }

    return (
        <div className="card-container">
            {editing ? (
                <>
                    <p className="card-title">{notes.title}</p>
                    <input 
                        type="text" 
                        className="card-input" 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)} 
                    />
                    <button className="card-button" onClick={handleSave}>Save</button>
                    <button className="card-button" onClick={() => setEditing(false)}>Cancel</button>
                </>
            ) : (
                <>
                    <h1 className="card-title">{notes.title}</h1>
                    <h3 className="card-description">{notes.description}</h3>
                    <button className="card-button" onClick={() => setEditing(true)}>Update</button>
                </>
            )}
        </div>
    );
}

import React, { useContext, useState, useEffect } from 'react'
import noteContext from "../context/notes/noteContext"
import { useHistory } from 'react-router-dom';


const AddNote = () => {
    const context = useContext(noteContext);
    const { addNote, getNotes } = context;
    let history = useHistory();
    useEffect(() => {
        if (localStorage.getItem('token')) {
            getNotes()
        }
        else {
            history.push("/login");
            window.location.reload();
        }
        // eslint-disable-next-line
    }, [])

    const [note, setNote] = useState({ title: "", description: "", tag: "" })

    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({ title: "", description: "", tag: "" })
        history.push("/notes");
        window.location.reload();
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value }) 
    }


    const handleUpClick = () => {
        let newText = note.description.toUpperCase();
        setNote({ ...note, description: newText })
        
    }
    const handleLoClick = () => {
        let newText = note.description.toLowerCase();
        setNote({ ...note, description: newText })
    }

    const handleClearClick = () => {
        let newText = '';
        setNote({ ...note, description: newText })

    }

    const handleCopy = () => {
        console.log("I am copy");
        var text = document.getElementById("description");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);

    }

    return (
        <>
            <div className="container my-3">
                <h1>Add a Note</h1>
                <form style={{marginTop: "-5px"}} className="my-3">
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label black">Title</label>
                        <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" value={note.title} onChange={onChange} minLength={5} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label black">Description</label>
                        <textarea type="text" className="form-control" id="description" name="description" value={note.description} onChange={onChange} minLength={5} required rows="5" />
                        <button disabled={note.description.length === 0} className="btn btn-primary btn-sm btn-2" onClick={handleUpClick}>Convert to Uppercase</button>
                        <button disabled={note.description.length === 0} className="btn btn-primary btn-sm btn-2" onClick={handleLoClick}>Convert to Lowercase</button>
                        <button style={{height: "26px"}} disabled={note.description.length === 0} className="btn btn-primary btn-sm btn-2" onClick={handleCopy}>Copy Text</button>
                        <button style={{height: "26px"}} disabled={note.description.length === 0} className="btn btn-primary btn-sm btn-2" onClick={handleClearClick}>Clear Text</button>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label black">Tag</label>
                        <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange} minLength={5} required />
                    </div>

                    <button disabled={note.title.length < 5 || note.description.length < 5} type="submit" className="btn btn-dark" onClick={handleClick}>Add Note</button>
                </form>
                <div className="container my-3" style={{ color: 'black', paddingBottom: "-2px" }}>
                    <h2 style={{fontSize: "26px", marginLeft: "-10px", marginBottom: "6px"}} >Your Note summary</h2>
                    <p>{note.description.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {note.description.length} characters</p>
                    <p style={{marginTop: "-13px"}}>{0.008 * note.description.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes read</p>
                </div>
            </div>

        </>
    )
}

export default AddNote

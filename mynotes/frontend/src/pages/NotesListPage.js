import React, { useEffect, useState } from 'react';
import ListItem from '../components/ListItem';
import AddButton from '../components/AddButton';

const NotesListPage = () => {

    const [notes, setNotes] = useState([])

    useEffect(() => {
        getNotes()
    }, [])

    const getNotes = () => {
        fetch('/api/notes/')
        .then(res => res.json())
        .then(result => {
            setNotes(result)
        } )
    }

    // const getNotes = async () => {
    //     const response = await fetch('http://localhost:8000/notes/')
    //     const data = await response.json()
    //     setNotes(data)
    // }

    return (
        <div className='notes'>
            <div className='notes-header'>
                <h2 className="notes-title">&#9782; Notes</h2>
                <p className="notes-count">{notes.length}</p>
            </div>

            <div className="notes-list">
                {notes.map((note, index) => (
                    <ListItem key={index} note={note} />
                ))}
            </div>
            <AddButton />
        </div>
    )
}

export default NotesListPage

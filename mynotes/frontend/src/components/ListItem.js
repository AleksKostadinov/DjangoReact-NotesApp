import React from 'react';
import { Link } from 'react-router-dom';

const getDate = (note) => {
    return new Date(note.updated).toLocaleDateString()
}

const getTitle = (note) => {
    const title = note.body.split('\n')[0]

    if (title.length > 30) {
        return title.slice(0, 30)
    }

    return title
}

const getContent = (note) => {
    const title = getTitle(note)
    let content = note.body.replaceAll('\n', ' ')
    content = content.replaceAll(title, '')

    if (title.length > 30) {
        return title.slice(0, 30) + '...'
    } else {
        return content
    }
}

const ListItem = ({ note }) => {
    return (
        <Link to={`/note/${note.id}`}>
            <div className="notes-list-item">
                <h3>{getTitle(note)}</h3>
                <p><span>{getDate(note)}</span>{getContent(note)}</p>
            </div>
        </Link>
    )
}

export default ListItem

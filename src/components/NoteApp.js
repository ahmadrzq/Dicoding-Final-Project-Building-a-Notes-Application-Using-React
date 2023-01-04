import React from 'react';
import NoteList from './NoteList';
import { getInitialData } from '../utils/data';
import NoteInput from './NoteInput';

class NoteApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }

    onArchiveHandler(id) {
        const updateStatusNotes = [...this.state.notes];
        const noteIndex = updateStatusNotes.findIndex(note => note.id === id);
        if (updateStatusNotes[noteIndex].archived === true) {
            updateStatusNotes[noteIndex].archived = false;
        } else {
            updateStatusNotes[noteIndex].archived = true;
        }
        this.setState({notes: updateStatusNotes});
    }

    onAddNoteHandler({ title, body }) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        archived: false,
                        createdAt: new Date()
                    }
                ]
            }
        });
    }

    render() {
        return (
            <React.Fragment>
                <div className="note-app__header">
                    <h1>Notes</h1>
                    <div className="note-search">
                        <input type="text" placeholder="Cari catatan ..." value="" />
                    </div>
                </div>
                <div className="note-app__body">
                    <NoteInput addNote={this.onAddNoteHandler} />
                    <h2>Catatan Aktif</h2>
                    <NoteList notes={this.state.notes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
                    <h2>Archive</h2>
                </div>
            </React.Fragment>
        );
    }
}

export default NoteApp;
import React from 'react';

class NoteInput extends React.Component {
    constructor(props) {
        super(props);

        // inisialisasi state
        this.state = {
            title: '',
            body: '',
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        this.setState(() => {
            return {
                title: event.target.value,
            }
        });
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            }
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
    }

    render() {
        return (
            <div className='note-input'>
                <h2>Buat catatan</h2>
                <form onSubmit={this.onSubmitEventHandler}>
                    <p className="note-input__title__char-limit">Sisa karakter: 50</p>
                    <input className='note-input__title' type="text" placeholder="Masukkan judul catatan..." value={this.state.title} onChange={this.onTitleChangeEventHandler} required />
                    <input className='note-input__body' type="text" placeholder="Masukkan isi catatan..." value={this.state.body} onChange={this.onBodyChangeEventHandler} required />
                    <button type="submit">Buat</button>
                </form>
            </div>
        )
    }
}

export default NoteInput;
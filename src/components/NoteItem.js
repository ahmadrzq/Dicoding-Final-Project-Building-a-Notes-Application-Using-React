import React from 'react';
import NoteItemContent from './NoteItemContent';
import NoteAction from './NoteAction';
import { showFormattedDate } from '../utils/data';

 
function NoteItem({ title, createdAt, body, id, onDelete, onArchive }) {
 return (
   <div className="note-item">
     <NoteItemContent title={title} createdAt={showFormattedDate(createdAt)} body={body} />
     <NoteAction id={id} onDelete={onDelete} onArchive={onArchive} />
   </div>
 );
}
 
export default NoteItem;
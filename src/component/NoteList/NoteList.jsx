import React from "react";
import NoteItem from "../NoteItem/NoteItem";
import PropTypes from "prop-types";

export default function NoteList({ notes }) {
  return notes.length > 0 ? (
    <section className="notes-list">
      {notes.map((note) => {
        return (
          <article key={note.id} className="note-item">
            <NoteItem
              id={note.id}
              title={note.title}
              createdAt={note.createdAt}
              body={note.body}
            />
          </article>
        );
      })}
    </section>
  ) : (
    <section className="notes-list-empty">
      <p className="notes-list__empty-message">Tidak ada catatan</p>
    </section>
  );
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

import React from "react";
import { Link } from "react-router-dom";
import { showFormattedDate } from "../../utils/FormatedDate";
import PropTypes from 'prop-types'

export default function NoteItem({ id, title, createdAt, body }) {
  return (
    <>
      <h3 className="note-item__title">
        <Link to={`/notes/${id}`}>{title}</Link>
      </h3>
      <p className="note-item__createdAt">{showFormattedDate(createdAt)}</p>
      <p className="note-item__body">{body}</p>
    </>
  );
}

NoteItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
}
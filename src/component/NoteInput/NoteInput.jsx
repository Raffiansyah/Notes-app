import React from "react";
import { useNavigate } from "react-router-dom";
import useInput from "../../hooks/UseInput";
import PropTypes from 'prop-types'

export default function NoteInput({ addNote }) {
  const navigate = useNavigate();

  const [title, setTitle] = useInput([]);
  const [body, setBody] = useInput([]);

  const onSubmit = (event) => {
    event.preventDefault()
    addNote({title, body}).then(() => {
        try {
            alert('Notes Has Been created')
            navigate('/')
        } catch (error) {
            alert(error)
        }
    })
  }

  return (
    <div className="add-new-page__input">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          className="add-new-page__input__title"
          placeholder="Title Note Here..."
          onChange={setTitle}
          value={title}
        />
        <textarea
          className="add-new-page__input__body"
          placeholder="Description Note Here..."
          onChange={setBody}
          value={body}
        />
        <div className="add-new-page__action">
            <button type="submit" className="action">+</button>
        </div>
      </form>
    </div>
  );
}

NoteInput.propTypes = {
    addNote: PropTypes.func.isRequired
}
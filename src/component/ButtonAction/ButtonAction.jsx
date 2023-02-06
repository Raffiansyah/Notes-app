import React from "react";
import ArchiveBtn from "../ArchiveBtn/ArchiveBtn";
import DeleteBtn from "../DeleteBtn/DeleteBtn";
import UnarchiveBtn from "../UnarchiveBtn/UnarchiveBtn";
import PropTypes from "prop-types";

export default function ButtonAction({
  id,
  archived,
  archiveNote,
  unarchiveNote,
  deleteNote,
}) {
  return (
    <div className="detail-page__action">
      {!archived ? (
        <ArchiveBtn id={id} archiveNote={archiveNote} />
      ) : (
        <UnarchiveBtn id={id} unarchiveNote={unarchiveNote} />
      )}
      <DeleteBtn deleteNote={deleteNote} id={id} />
    </div>
  );
}

ButtonAction.propTypes = {
  id: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  archiveNote: PropTypes.func.isRequired,
  unarchiveNote: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired,
};

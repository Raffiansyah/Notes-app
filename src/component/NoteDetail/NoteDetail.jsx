import React from 'react'
import { showFormattedDate } from '../../utils/FormatedDate'
import PropTypes from 'prop-types'

export default function NoteDetail({ title, createdAt, body}) {
  return (
    <>
    <h3 className='detail-page__title'>{title}</h3>
      <p className='detail-page__createdAt'>{showFormattedDate(createdAt)}</p>
      <div className='detail-page__body'>
        {body}
      </div>
    </>
  )
}


NoteDetail.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
}
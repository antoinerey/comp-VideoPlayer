import React, { PropTypes } from 'react'

const Thumbnail = ({ url, ...props }) => (
  <img { ...props } src={ url } />
)

Thumbnail.propTypes = {
  url: PropTypes.string,
}

export default Thumbnail

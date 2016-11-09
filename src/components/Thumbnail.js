import React, { PropTypes } from 'react'

const Thumbnail = ({ url, ...props }) => {
  const styles = {
    container: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundImage: `url(${ url })`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      cursor: 'pointer',
    },
  }

  return (
    <div { ...props } style={ styles.container } />
  )
}

Thumbnail.propTypes = {
  url: PropTypes.string,
}

export default Thumbnail

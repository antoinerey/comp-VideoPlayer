import React, { PropTypes } from 'react'

const Thumbnail = ({ loading, url, ...props }) => {
  const styles = {
    container: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: `url(${ url }) center / cover no-repeat`,
      cursor: 'pointer',
    },
    play: {
      display: loading ? 'none': 'block',
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '25%',
      filter: 'drop-shadow(0px 1px 6px rgba(0, 0, 0, 0.117647)) drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.117647))',
      transform: 'translate(-50%, -50%)',
    },
  }

  return (
    <div { ...props } style={ styles.container }>
      <svg style={ styles.play } viewBox="0 0 200 200" alt="Play video">
        <polygon points="70, 55 70, 145 145, 100" fill="#fff"/>
      </svg>
    </div>
  )
}

Thumbnail.propTypes = {
  loading: PropTypes.bool.isRequired,
  url: PropTypes.string,
}

Thumbnail.defaultProps = {
  loading: false,
}

export default Thumbnail

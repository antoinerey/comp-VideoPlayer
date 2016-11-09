import React from 'react'
import BeatLoader from 'halogen/BeatLoader'

const styles = {
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.2)',
    zIndex: 1,
  },
  inner: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
}

const Loader = () => (
  <div style={ styles.container }>
    <div style={ styles.inner }>
      <BeatLoader />
    </div>
  </div>
)

export default Loader

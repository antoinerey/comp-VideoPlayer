import React from 'react'
import Loading from 'react-loading'

const styles = {
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.2)',
    zIndex: 9999,
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
      <Loading type={ 'bubbles' } color={ 'white' } width={ 96 } height={ 96 } />
    </div>
  </div>
)

export default Loader

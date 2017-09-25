import React, { PropTypes } from 'react'

const Iframe = ({ loading, onLoad, url }) => {
    const styles = {
        iframe: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',

            ...(loading && {
                top: -9999,
                left: -9999,
                width: 0,
                height: 0,
                visibility: 'hidden',
            }),
        },
    }

    return (
        <iframe allowFullScreen frameBorder={0} onLoad={onLoad} src={url} style={styles.iframe} />
    )
}

Iframe.propTypes = {
    loading: PropTypes.bool.isRequired,
    onLoad: PropTypes.func.isRequired,
    url: PropTypes.string.isRequired,
}

Iframe.defaultProps = {
    loading: true,
}

export default Iframe

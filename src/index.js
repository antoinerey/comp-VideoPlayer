import React, { PropTypes } from 'react'

import * as dailymotion from './strategies/dailymotion'
import * as twitch from './strategies/twitch'
import * as vimeo from './strategies/vimeo'
import * as youtube from './strategies/youtube'

import Iframe from './components/Iframe'
import Loader from './components/Loader'
import Thumbnail from './components/Thumbnail'

const strategies = [
  dailymotion,
  twitch,
  vimeo,
  youtube,
]

const getStrategy = (url) => {
  return strategies.find(strategy => strategy.getRegex().test(url))
}

const styles = {
  container: {
    position: 'relative',
    width: '100%',
    paddingTop: 'calc(9 / 16 * 100%)',
  },
}

class VideoPlayer extends React.Component {

  state = {
    embedUrl: null,
    thumbnailUrl: null,
    status: 'hidden',
  }

  componentDidMount() {
    this.computeState(this.props)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.url !== this.props.url) {
      this.computeState(nextProps)
    }
  }

  computeState = (props) => {
    const strategy = getStrategy(props.url)

    if (strategy) {
      this.setState({
        status: 'hidden',
        embedUrl: strategy.getEmbedUrl(props.url),
      })

      return strategy.getThumbnailUrl(props.url)
        .then(url => this.setState({ thumbnailUrl: url }))
    }

    this.setState({ status: 'failure' })
  }

  handleIframeLoad = () => this.setState({ status: 'ready' })
  handlePlayClick = () => this.setState({ status: 'loading' })

  hasFailed = () => this.state.status === 'failure'
  isHidden = () => this.state.status === 'hidden'
  isLoading = () => this.state.status === 'loading'
  isReady = () => this.state.status === 'ready'

  render() {
    if (this.hasFailed()) {
      return null
    }

    return (
      <div style={ styles.container }>
        { this.isLoading() && <Loader /> }
        { (this.isHidden() || this.isLoading()) && (
          <Thumbnail
            loading={ this.isLoading() }
            onClick={ this.handlePlayClick }
            url={ this.state.thumbnailUrl }
          />
        ) }
        { (this.isLoading() || this.isReady()) && (
          <Iframe
            loading={ this.isLoading() }
            onLoad={ this.handleIframeLoad }
            url={ this.state.embedUrl }
          />
        ) }
      </div>
    )
  }
}

VideoPlayer.propTypes = {
  url: PropTypes.string.isRequired,
}

export default VideoPlayer

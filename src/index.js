import React, { PropTypes } from 'react'

import * as dailymotion from './strategies/dailymotion'
import * as vimeo from './strategies/vimeo'
import * as youtube from './strategies/youtube'

import Iframe from './components/Iframe'
import Loader from './components/Loader'
import Thumbnail from './components/Thumbnail'

const strategies = [
  dailymotion,
  vimeo,
  youtube,
]

const getStrategy = (url) => {
  return strategies.find(strategy => strategy.getRegex().test(url))
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
    const videoId = strategy.getVideoIdentifier(props.url)

    this.setState({
      status: 'hidden',
      embedUrl: strategy.getEmbedUrl(videoId),
    })

    strategy.getThumbnailUrl(videoId)
      .then(url => this.setState({ thumbnailUrl: url }))
  }

  handleIframeLoad = () => this.setState({ status: 'ready' })
  handlePlayClick = () => this.setState({ status: 'loading' })

  isHidden = () => this.state.status === 'hidden'
  isLoading = () => this.state.status === 'loading'
  isReady = () => this.state.status === 'ready'

  render() {
    return (
      <div>
        { this.isLoading() && <Loader/> }
        { this.isHidden() && (
          <Thumbnail
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

import * as dailymotion from './dailymotion'

const videoId = 'x4p2cnd'

const fixtures = [
  `https://www.dailymotion.com/playlist/x4mzxx_saxiubqxqi_sad-music-sad-music-sad-music/1#video=${ videoId }`,
  `https://www.dailymotion.com/embed/video/${ videoId }`,
  `https://www.dailymotion.com/video/${ videoId }`,
  `https://dai.ly/${ videoId }`,
]

describe('Dailymotion strategy', () => {

  it('exposes a correct regex', () => {
    fixtures.forEach(url => {
      const actual = dailymotion.getRegex().test(url)
      expect(actual).toBe(true)
    })
  })

  it('extract the video identifier', () => {
    fixtures.forEach(url => {
      const actual = dailymotion.getVideoIdentifier(url)
      expect(actual).toBe(videoId)
    })
  })

  it('computes the embed url', () => {
    const actual = dailymotion.getEmbedUrl(videoId)
    const expected = `https://www.dailymotion.com/embed/video/${ videoId }`
    expect(actual).toBe(expected)
  })

  it('computes the thumbnail url', () => {
    return dailymotion.getThumbnailUrl(videoId)
      .then(url => expect(url).toBeTruthy())
  })

})

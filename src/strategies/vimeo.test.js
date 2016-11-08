import * as vimeo from './vimeo'

const videoId = '62092214'

const fixtures = [
  `https://vimeo.com/${ videoId }`,
  `http://vimeo.com/${ videoId }`,
  `https://www.vimeo.com/${ videoId }`,
  `https://vimeo.com/channels/documentaryfilm/${ videoId }`,
  `http://vimeo.com/channels/documentaryfilm/${ videoId }`,
  `https://vimeo.com/groups/musicvideo/videos/${ videoId }`,
  `http://vimeo.com/groups/musicvideo/videos/${ videoId }`,
  `https://vimeo.com/${ videoId }?query=foo`,
]

describe('Vimeo strategy', () => {

  it('exposes a correct regex', () => {
    fixtures.forEach(url => {
      const actual = vimeo.getRegex().test(url)
      expect(actual).toBe(true)
    })
  })

  it('extract the video identifier', () => {
    fixtures.forEach(url => {
      const actual = vimeo.getVideoIdentifier(url)
      expect(actual).toBe(videoId)
    })
  })

  it('computes the embed url', () => {
    const actual = vimeo.getEmbedUrl(videoId)
    const expected = `https://player.vimeo.com/video/${ videoId }`
    expect(actual).toBe(expected)
  })

  it('computes the thumbnail url', () => {
    return vimeo.getThumbnailUrl(videoId)
      .then(url => expect(url).toBeTruthy())
  })

})

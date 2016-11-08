export const getRegex = () => {
  return /(http|https)?:\/\/(www\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|)(\d+)(?:|\/\?)/
}

export const getVideoIdentifier = (url) => {
  return getRegex().exec(url)[4]
}

export const getEmbedUrl = (id) => {
  return `https://player.vimeo.com/video/${ id }`
}

export const getThumbnailUrl = (id) => {
  return fetch(`http://vimeo.com/api/v2/video/${ id }.json`)
    .then(res => res.json())
    .then(res => res[0].thumbnail_large)
}

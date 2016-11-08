export const getRegex = () => {
  return /(?:dailymotion\.com\/(?:(?:embed\/)?video\/|(?:playlist\/[\w-]+\/\d+#video=))|(?:dai\.ly\/))(\w+)/
}

export const getVideoIdentifier = (url) => {
  return getRegex().exec(url)[1]
}

export const getEmbedUrl = (id) => {
  return `https://www.dailymotion.com/embed/video/${ id }`
}

export const getThumbnailUrl = (id) => {
  return fetch(`https://api.dailymotion.com/video/${ id }?fields=thumbnail_large_url`)
    .then(res => res.json())
    .then(res => res.thumbnail_large_url)
}

export const getRegex = () => {
  return /(?:dailymotion\.com\/(?:(?:embed\/)?video\/|(?:playlist\/[\w-]+\/\d+#video=))|(?:dai\.ly\/))(\w+)/
}

export const getEmbedUrl = (url) => {
  const videoId = getRegex().exec(url)[1]
  return `https://www.dailymotion.com/embed/video/${ videoId }?autoplay=1`
}

export const getThumbnailUrl = (url) => {
  const videoId = getRegex().exec(url)[1]
  return fetch(`https://api.dailymotion.com/video/${ videoId }?fields=thumbnail_large_url`)
    .then(res => res.json())
    .then(res => res.thumbnail_large_url)
}

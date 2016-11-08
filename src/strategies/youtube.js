export const getRegex = () => {
  return /(?:youtube\.com\/\S*(?:(?:\/e(?:mbed))?\/|watch\/?\?(?:\S*?&?v\=))|youtu\.be\/)([a-zA-Z0-9_-]{6,11})/
}

export const getVideoIdentifier = (url) => {
  return getRegex().exec(url)[1]
}

export const getEmbedUrl = (id) => {
  return `https://www.youtube.com/embed/${ id }`
}

export const getThumbnailUrl = (id) => {
  return Promise.resolve(`https://img.youtube.com/vi/${ id }/0.jpg`)
}

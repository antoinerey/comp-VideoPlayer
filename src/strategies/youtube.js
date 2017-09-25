export const getRegex = () => {
    return /(?:youtube\.com\/\S*(?:(?:\/e(?:mbed))?\/|watch\/?\?(?:\S*?&?v\=))|youtu\.be\/)([a-zA-Z0-9_-]{6,11})/
}

export const getEmbedUrl = url => {
    const videoId = getRegex().exec(url)[1]
    return `https://www.youtube.com/embed/${videoId}?autoplay=1`
}

export const getThumbnailUrl = url => {
    const videoId = getRegex().exec(url)[1]
    return Promise.resolve(`https://img.youtube.com/vi/${videoId}/0.jpg`)
}

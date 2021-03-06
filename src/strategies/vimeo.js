export const getRegex = () => {
    return /(http|https)?:\/\/(www\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|)(\d+)(?:|\/\?)/
}

export const getEmbedUrl = url => {
    const videoId = getRegex().exec(url)[4]
    return `https://player.vimeo.com/video/${videoId}?autoplay=1`
}

export const getThumbnailUrl = url => {
    const videoId = getRegex().exec(url)[4]
    return fetch(`https://vimeo.com/api/v2/video/${videoId}.json`)
        .then(res => res.json())
        .then(res => res[0].thumbnail_large)
}

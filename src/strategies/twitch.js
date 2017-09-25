export const getRegex = () => {
    return /twitch\.tv\/(?:(?:\?channel=)?(\w+)|\?video=v)(?:\/v\/)?(\d+)?/
}

export const getEmbedUrl = url => {
    const [, channelId, videoId] = getRegex().exec(url)

    return videoId
        ? `https://player.twitch.tv/?video=v${videoId}`
        : `https://player.twitch.tv/?channel=${channelId}`
}

export const getThumbnailUrl = url => {
    const videoId = getRegex().exec(url)[2]
    const headers = {
        'Client-ID': '75s9yajs2ni6hw50880dtkcrsqq4w0o',
    }

    if (videoId) {
        return fetch(`https://api.twitch.tv/kraken/videos/v${videoId}`, { headers })
            .then(res => res.json())
            .then(res => res.thumbnails[0].url)
    }

    return Promise.resolve('https://be-angels.fr/wp-content/uploads/2016/06/twitch.jpg')
}

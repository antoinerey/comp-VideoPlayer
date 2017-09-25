import * as twitch from './twitch'

const channelId = 'eclypsiatvlol'
const videoId = '99975402'

const channelFixtures = [
    `https://www.twitch.tv/${channelId}`,
    `https://player.twitch.tv/?channel=${channelId}`,
]

const videoFixtures = [
    `https://www.twitch.tv/${channelId}/v/${videoId}`,
    `https://player.twitch.tv/?video=v${videoId}`,
]

describe('Twitch strategy', () => {
    it('exposes a correct regex', () => {
        channelFixtures.concat(videoFixtures).forEach(url => {
            const actual = twitch.getRegex().test(url)
            expect(actual).toBe(true)
        })
    })

    it('extracts the entity identifier', () => {
        channelFixtures.forEach(url => {
            const actual = twitch.getRegex().exec(url)[1]
            expect(actual).toBe(channelId)
        })

        videoFixtures.forEach(url => {
            const actual = twitch.getRegex().exec(url)[2]
            expect(actual).toBe(videoId)
        })
    })

    it('computes the embed url', () => {
        channelFixtures.forEach(url => {
            const actual = twitch.getEmbedUrl(url)
            const expected = `https://player.twitch.tv/?channel=${channelId}`
            expect(actual).toBe(expected)
        })

        videoFixtures.forEach(url => {
            const actual = twitch.getEmbedUrl(url)
            const expected = `https://player.twitch.tv/?video=v${videoId}`
            expect(actual).toBe(expected)
        })
    })

    // it('computes the thumbnail url', () => {
    //     const channelExpected = 'https://be-angels.fr/wp-content/uploads/2016/06/twitch.jpg'
    //     const channelPromises = channelFixtures.map(url => {
    //         return twitch.getThumbnailUrl(url).then(actual => expect(actual).toBe(channelExpected))
    //     })

    //     const videoPromises = videoFixtures.map(url => {
    //         return twitch.getThumbnailUrl(url).then(actual => expect(actual).toBeTruthy())
    //     })

    //     return Promise.all([...channelPromises, ...videoPromises])
    // })
})

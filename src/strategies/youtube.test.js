import * as youtube from './youtube'

const videoId = '0EWbonj7f18'

const fixtures = [
    `youtu.be/${videoId}`,
    `youtu.be/${videoId}`,
    `youtube.com/user/sandervandoorntv/watch?v=${videoId}`,
    `youtube.com/user/sandervandoorntv/watch?v=${videoId}&feature=related`,
    `youtube.com/user/sandervandoorntv/watch?feature=related&v=${videoId}`,
    `youtube.com/watch?v=${videoId}`,
    `youtube.com/watch?feature=related&v=${videoId}`,
    `youtube.com/watch?v=${videoId}&feature=related`,
    `youtube.com/embed/watch?v=${videoId}`,
    `youtube.com/embed/watch?feature=related&v=${videoId}`,
    `youtube.com/embed/v/${videoId}`,
    `youtube.com/e/v/${videoId}`,
    `youtube.com/e/watch?v=${videoId}`,
    `youtube.com/e/watch?feature=related&v=${videoId}`,
    `youtube.com/attribution_link?u=/user/sandervandoorntv/watch?v=${videoId}`,
    `youtube.com/attribution_link?u=/user/sandervandoorntv/watch?v=${videoId}&feature=related`,
    `youtube.com/attribution_link?u=/user/sandervandoorntv/watch?feature=related&v=${videoId}`,
    `youtube.com/attribution_link?u=/watch?v=${videoId}`,
    `youtube.com/attribution_link?u=/watch?feature=related&v=${videoId}`,
    `youtube.com/attribution_link?u=/watch?v=${videoId}&feature=related`,
    `youtube.com/attribution_link?u=/embed/watch?v=${videoId}`,
    `youtube.com/attribution_link?u=/embed/watch?feature=related&v=${videoId}`,
    `youtube.com/attribution_link?u=/embed/v/${videoId}`,
    `youtube.com/attribution_link?u=/e/v/${videoId}`,
    `youtube.com/attribution_link?u=/e/watch?v=${videoId}`,
    `youtube.com/attribution_link?u=/e/watch?feature=related&v=${videoId}`,
    `youtube.com/user/sandervandoorntv/watch/?v=${videoId}`,
    `youtube.com/user/sandervandoorntv/watch/?v=${videoId}&feature=related`,
    `youtube.com/user/sandervandoorntv/watch/?feature=related&v=${videoId}`,
    `youtube.com/watch/?v=${videoId}`,
    `youtube.com/watch/?feature=related&v=${videoId}`,
    `youtube.com/watch/?v=${videoId}&feature=related`,
    `youtube.com/embed/watch/?v=${videoId}`,
    `youtube.com/embed/watch/?feature=related&v=${videoId}`,
    `youtube.com/e/watch/?v=${videoId}`,
    `youtube.com/e/watch/?feature=related&v=${videoId}`,
    `youtube.com/attribution_link?u=/user/sandervandoorntv/watch/?v=${videoId}`,
    `youtube.com/attribution_link?u=/user/sandervandoorntv/watch/?v=${videoId}&feature=related`,
    `youtube.com/attribution_link?u=/user/sandervandoorntv/watch/?feature=related&v=${videoId}`,
    `youtube.com/attribution_link?u=/watch/?v=${videoId}`,
    `youtube.com/attribution_link?u=/watch/?feature=related&v=${videoId}`,
    `youtube.com/attribution_link?u=/watch/?v=${videoId}&feature=related`,
    `youtube.com/attribution_link?u=/embed/watch/?v=${videoId}`,
    `youtube.com/attribution_link?u=/embed/watch/?feature=related&v=${videoId}`,
    `youtube.com/attribution_link?u=/embed/v/${videoId}`,
    `youtube.com/attribution_link?u=/e/v/${videoId}`,
    `youtube.com/attribution_link?u=/e/watch/?v=${videoId}`,
    `youtube.com/attribution_link?u=/e/watch/?feature=related&v=${videoId}`,
]

describe('Youtube strategy', () => {
    it('exposes a correct regex', () => {
        fixtures.forEach(url => {
            const actual = youtube.getRegex().test(url)
            expect(actual).toBe(true)
        })
    })

    it('extracts the video identifier', () => {
        fixtures.forEach(url => {
            const actual = youtube.getRegex().exec(url)[1]
            expect(actual).toBe(videoId)
        })
    })

    it('computes the embed url', () => {
        const expected = `https://www.youtube.com/embed/${videoId}?autoplay=1`

        fixtures.forEach(url => {
            const actual = youtube.getEmbedUrl(url)
            expect(actual).toBe(expected)
        })
    })

    it('computes the thumbnail url', () => {
        const expected = `https://img.youtube.com/vi/${videoId}/0.jpg`
        const promises = fixtures.map(url => {
            return youtube.getThumbnailUrl(url).then(url => expect(url).toBe(expected))
        })

        return Promise.all(promises)
    })
})

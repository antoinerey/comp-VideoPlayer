import React from 'react'
import { shallow } from 'enzyme'
import Thumbnail from './Thumbnail'

describe('Thumbnail component', () => {
    it('renders correctly', () => {
        shallow(<Thumbnail />)
        shallow(<Thumbnail url={'https://img.youtube.com/vi/0EWbonj7f18/0.jpg'} />)
    })
})

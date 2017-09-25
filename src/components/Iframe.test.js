import React from 'react'
import { shallow } from 'enzyme'
import Iframe from './Iframe'

describe('Iframe component', () => {
    it('renders correctly', () => {
        shallow(<Iframe onLoad={jest.fn()} url={'https://www.youtube.com/embed/0EWbonj7f18'} />)
    })
})

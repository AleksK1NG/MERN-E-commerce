import React from 'react'
import { shallow } from 'enzyme'
import { MenuItem } from './MenuItem'

describe('MenuItem component', () => {
  let wrapper
  let mockMatch
  let mockHistory
  const linkUrl = '/hats'
  const size = 'large'
  const imageUrl = 'testimage'
  const title = 'hats'

  beforeEach(() => {
    mockMatch = {
      url: '/shop'
    }

    mockHistory = {
      push: jest.fn()
    }

    const mockProps = {
      match: mockMatch,
      history: mockHistory,
      linkUrl,
      size,
      title,
      imageUrl
    }

    wrapper = shallow(<MenuItem {...mockProps} />)
  })

  it('should render menuItem component', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should call history.push with the right string when MenuItemContainer clicked', () => {
    wrapper.find('MenuItemContainer').simulate('click')

    expect(mockHistory.push).toHaveBeenCalled()
    expect(mockHistory.push).toHaveBeenCalledWith(`${mockMatch.url}${linkUrl}`)
  })

  it('should pass size to MenuItemContainer as the prop size', () => {
    expect(wrapper.find('BackgroundImageContainer').prop('imageUrl')).toBe(imageUrl)
  })

  it('should ContentTitle have title', () => {
    expect(wrapper.find('ContentTitle').text()).toBe(title.toUpperCase())
  })
})

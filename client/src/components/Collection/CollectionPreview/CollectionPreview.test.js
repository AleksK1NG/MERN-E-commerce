import React from 'react'
import { shallow } from 'enzyme'
import { CollectionPreview } from './CollectionPreview'
import CollectionItem from '../CollectionItem/CollectionItem'

describe('Test CollectionPreview component', () => {
  let wrapper
  let mockMatch
  let mockHistory
  const mockRouteName = 'hats'

  beforeEach(() => {
    mockMatch = {
      path: '/shop'
    }

    mockHistory = {
      push: jest.fn()
    }

    const mockProps = {
      title: 'hats',
      items: [],
      history: mockHistory,
      match: mockMatch,
      routeName: mockRouteName
    }

    wrapper = shallow(<CollectionPreview {...mockProps} />)
  })

  it('should render CollectionPreview component', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should call history.push with the right string when TitleContainer clicked', () => {
    wrapper.find('TitleContainer').simulate('click')
    expect(mockHistory.push).toHaveBeenCalled()
    expect(mockHistory.push).toHaveBeenCalledWith(`${mockMatch.path}/${mockRouteName}`)
  })

  it('should render CollectionItem array', () => {
    const mockProps = {
      title: 'hats',
      items: [{ id: 1 }, { id: 2 }, { id: 3 }],
      history: mockHistory,
      match: mockMatch,
      routeName: mockRouteName
    }

    const newWrapper = shallow(<CollectionPreview {...mockProps} />)

    expect(newWrapper.find('PreviewContainer').find(CollectionItem).length).toEqual(mockProps.items.length)
  })
})

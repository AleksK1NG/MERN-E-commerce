import React from 'react'
import { shallow } from 'enzyme'
import { CollectionsOverview } from './CollectionsOverview'
import CollectionPreview from '../CollectionPreview/CollectionPreview'

describe('CollectionsOverview component', () => {
  let wrapper
  let mockCollections

  beforeEach(() => {
    mockCollections = [{ id: 0 }, { id: 1 }, { id: 2 }]

    wrapper = shallow(<CollectionsOverview collections={mockCollections} />)
  })

  it('should render CollectionsOverview component', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should render CollectionPreview components', () => {
    expect(wrapper.find(CollectionPreview).length).toEqual(mockCollections.length)
  })
})

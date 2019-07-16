import React from 'react'
import { shallow } from 'enzyme'
import { CollectionItem } from './CollectionItem'

describe('Test CollectionItem component', () => {
  let wrapper
  let mockAddCartItem

  const mockItem = { name: 'black hat', price: 250, imageUrl: 'www.testImage.com' }

  beforeEach(() => {
    mockAddCartItem = jest.fn()

    const mockProps = {
      item: mockItem,
      addCartItem: mockAddCartItem
    }

    wrapper = shallow(<CollectionItem {...mockProps} />)
  })

  it('should render CollectionItem component', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should call addItem when AddButton clicked', () => {
    wrapper.find('AddButton').simulate('click')
    expect(mockAddCartItem).toHaveBeenCalled()
  })

  it('should render imageUrl as a prop on BackgroundImage', () => {
    expect(wrapper.find('BackgroundImage').prop('imageUrl')).toBe(mockItem.imageUrl)
  })

  it('should render name prop in NameContainer', () => {
    expect(wrapper.find('NameContainer').text()).toBe(mockItem.name)
  })

  it('should render price prop in PriceContainer', () => {
    const price = parseInt(wrapper.find('PriceContainer').text())
    expect(price).toBe(mockItem.price)
  })
})

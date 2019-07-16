import React from 'react'
import { shallow } from 'enzyme'
import { CheckoutItem } from './CheckoutItem'

describe('Test CheckoutItem component', () => {
  let wrapper
  let mockClearItem
  let mockAddItem
  let mockRemoveItem

  beforeEach(() => {
    mockClearItem = jest.fn()
    mockAddItem = jest.fn()
    mockRemoveItem = jest.fn()

    const mockProps = {
      cartItem: {
        imageUrl: 'www.testImage.com',
        price: 10,
        name: 'hats',
        quantity: 2
      },
      clearItemFromCart: mockClearItem,
      addCartItem: mockAddItem,
      deleteCartItem: mockRemoveItem
    }

    wrapper = shallow(<CheckoutItem {...mockProps} />)
  })

  it('should CheckoutItem component', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should call clearItem when remove button is clicked', () => {
    wrapper.find('RemoveButtonContainer').simulate('click')

    expect(mockClearItem).toHaveBeenCalled()
  })

  it('should call addCartItem when left arrow is clicked', () => {
    wrapper
      .find('QuantityContainer')
      .find('div')
      .at(1)
      .simulate('click')

    expect(mockAddItem).toHaveBeenCalled()
  })

  it('should call deleteCartItem when left arrow is clicked', () => {
    wrapper
      .find('QuantityContainer')
      .find('div')
      .at(0)
      .simulate('click')

    expect(mockRemoveItem).toHaveBeenCalled()
  })
})

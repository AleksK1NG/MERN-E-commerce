import React from 'react'
import { shallow } from 'enzyme'
import { CartIcon } from './CartIcon'

import 'jest-styled-components'

describe('CartIcon component', () => {
  let wrapper
  let mockToggleCartHidden

  beforeEach(() => {
    mockToggleCartHidden = jest.fn()

    const mockProps = {
      cartItemsCount: 0,
      toggleCartHidden: mockToggleCartHidden
    }

    wrapper = shallow(<CartIcon {...mockProps} />)
  })

  it('should render CartIcon component', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should call toggleCartHidden when icon is clicked', () => {
    wrapper.find('CartContainer').simulate('click')
    console.log(wrapper.debug())
    console.log(wrapper.find('ShoppingIcon'))

    expect(mockToggleCartHidden).toHaveBeenCalled()
  })

  it('should render the itemCount as the text', () => {
    const itemCount = parseInt(wrapper.find('ItemCountContainer').text())
    expect(itemCount).toBe(0)
  })
})

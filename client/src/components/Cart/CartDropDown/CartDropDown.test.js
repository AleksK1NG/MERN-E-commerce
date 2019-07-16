import React from 'react'
import { shallow } from 'enzyme'
import { CartDropDown } from './CartDropDown'
import CartItem from '../CartItem/CartItem'

describe('CartDropdown component', () => {
  let wrapper
  let mockHistory
  let mockDispatch
  const mockCartItems = [{ id: 1 }, { id: 2 }, { id: 3 }]

  beforeEach(() => {
    mockHistory = {
      push: jest.fn()
    }

    mockDispatch = jest.fn()

    // completed mock props
    const mockProps = {
      cartItems: mockCartItems,
      history: mockHistory,
      toggleCartHidden: mockDispatch
    }

    wrapper = shallow(<CartDropDown {...mockProps} />)
  })

  it('should render CartDropdown component', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should render CartItem array ', () => {
    expect(wrapper.find(CartItem).length).toEqual(mockCartItems.length)
  })

  it('should call history.push when button is clicked', () => {
    wrapper.find('CartDropdownButton').simulate('click')
    expect(mockHistory.push).toHaveBeenCalled()
  })

  it('should render EmptyMessageContainer if cartItems is empty', () => {
    const mockProps = {
      cartItems: [],
      history: mockHistory,
      toggleCartHidden: mockDispatch
    }
    const newWrapper = shallow(<CartDropDown {...mockProps} />)

    expect(newWrapper.find('EmptyMessageContainer').length).toEqual(1)
    expect(newWrapper.exists('EmptyMessageContainer')).toBe(true)
  })
})

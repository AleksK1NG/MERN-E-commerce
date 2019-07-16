import React from 'react'
import { shallow } from 'enzyme'
import { Header } from './Header'
import CartDropDown from '../../Cart/CartDropDown/CartDropDown'

describe('Header component', () => {
  let wrapper
  let mockSighOutFbAuth
  let mockShowCartIcon

  beforeEach(() => {
    mockSighOutFbAuth = jest.fn()
    mockShowCartIcon = false

    const mockProps = {
      user: {
        uid: '123'
      },
      sighOutFbAuth: mockSighOutFbAuth,
      showCartIcon: mockShowCartIcon
    }

    wrapper = shallow(<Header {...mockProps} />)
  })

  it('should render FormInput component', () => {
    expect(wrapper).toMatchSnapshot()
  })

  describe('if currentUser is present', () => {
    it('should render sign out link', () => {
      expect(
        wrapper
          .find('OptionLink')
          .at(2)
          .text()
      ).toEqual('SIGN OUT')
    })

    it('should call signOutStart method when link is clicked', () => {
      wrapper
        .find('OptionLink')
        .at(2)
        .simulate('click')

      expect(mockSighOutFbAuth).toHaveBeenCalled()
    })
  })

  describe('if currentUser is null', () => {
    const mockProps = {
      user: null,
      sighOutFbAuth: mockSighOutFbAuth,
      showCartIcon: mockShowCartIcon
    }

    const newWrapper = shallow(<Header {...mockProps} />)

    it('should render sign out link', () => {
      expect(
        newWrapper
          .find('OptionLink')
          .at(2)
          .text()
      ).toEqual('SIGN IN')
    })
  })

  describe('if showCartIcon is true', () => {
    it('should not render CartDropdown', () => {
      expect(wrapper.exists(CartDropDown)).toBe(false)
    })
  })

  describe('currentUser is null', () => {
    it('should render CartDropdown', () => {
      const mockProps = {
        user: null,
        sighOutFbAuth: mockSighOutFbAuth,
        showCartIcon: true
      }

      const newWrapper = shallow(<Header {...mockProps} />)

      expect(newWrapper.exists(CartDropDown)).toBe(true)
    })
  })
})

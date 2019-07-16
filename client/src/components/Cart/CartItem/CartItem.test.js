import React from 'react'
import { shallow } from 'enzyme'
import { CartItem } from './CartItem'

describe('test CartItem component', () => {
  const mockItem = {
    imageUrl: '',
    price: 1,
    name: 'hats',
    quantity: 1
  }

  const wrapper = shallow(<CartItem item={mockItem} />)

  it('should render CartItem component', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should have span with name', () => {
    expect(
      wrapper
        .find('span')
        .first()
        .text()
    ).toEqual(mockItem.name)
  })
})

import React from 'react'
import { shallow } from 'enzyme'
import { sections } from './sections'
import Directory from './Directory'
import MenuItem from '../MenuItem/MenuItem'

describe('Directory component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Directory />)
  })

  it('should render Directory component', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should render MenuItem components', () => {
    expect(wrapper.find(MenuItem).length).toEqual(sections.length)
  })
})

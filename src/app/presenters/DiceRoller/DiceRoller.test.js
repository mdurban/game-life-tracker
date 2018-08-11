import DiceRoller from './'
import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe("DiceRoller", () => {

  it('renders with text based on numberOfSides prop', () => {
    const wrapper = shallow(<DiceRoller numberOfSides={1234} />)

    expect(wrapper.find('Text').get(1).props.children).toContain(1234)
  })
  
  it('onClick rolls virtual die', () => {
    // using 1 here so that rng is deterministic
    const wrapper = shallow(<DiceRoller numberOfSides={1} />)

    wrapper.find('Text').first().simulate('click')

    expect(wrapper.find('Text').get(2).props.children).toEqual(1)
  })

  it('renders result of die roll', () => {
    const wrapper = shallow(<DiceRoller numberOfSides={1234} />)

    wrapper.setState({ dieRoll: 777 })

    expect(wrapper.find('Text').get(2).props.children).toEqual(777)
  })
})

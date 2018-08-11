import LifeTracker from './LifeTracker.js'
import DiceRoller from '../DiceRoller'
import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe("LifeTracker", () => {

  it('renders DiceRoller element', () => {
    const wrapper = shallow(<LifeTracker />)

    expect(wrapper.find(DiceRoller).length).toEqual(1)
  })

  it('renders life total', () => {
    const wrapper = shallow(<LifeTracker />)

    wrapper.setState({ lifeTotal: 999 })

    expect(wrapper.find('Text').get(0).props.children).toEqual(999)
  })

  xit('pressing buttons change rendered life total', () => {
    const wrapper = shallow(<LifeTracker />)

    wrapper.setState({ lifeTotal: 10 })
    wrapper.find('Text').at(3).simulate('click')
    wrapper.update()

    expect(wrapper.find('Text').get(0).props.children).toEqual(11)
  })
})

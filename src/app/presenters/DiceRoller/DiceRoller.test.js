import {shallow} from 'enzyme'
import DiceRoller from './DiceRoller.js'
import React from 'react';
import renderer from 'react-test-renderer';
import { configure, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

//configure({ adapter: new Adapter() });
configure({ adapter: new Adapter() })

describe("DiceRoller", () => {

  it('renders without crashing', () => {
    //const wrapper = shallow(<DiceRoller numberOfSides={1} />)
    //expect(wrapper.find('Text').length).toEqual(2)
    const rendered = renderer.create(<DiceRoller />).toJSON();
    expect(rendered).toEqual(1)
  })

  it('enzyme', () => {
    const wrapper = shallow(<DiceRoller numberOfSides={1} />)
    expect(wrapper.find('Text').length).toEqual(3)
  })
})

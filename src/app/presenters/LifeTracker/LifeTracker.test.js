import React from 'react';
import LifeTracker from './LifeTracker.js';

import renderer from 'react-test-renderer';

xit('renders without crashing', () => {
  const rendered = renderer.create(<LifeTracker />).toJSON();
  expect(false).toBeTruthy();
});

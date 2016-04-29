/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;
import createComponent from 'helpers/shallowRenderHelper';
import React, {
  PropTypes
} from 'react';
import expect from 'expect'
import Main from 'components/Main';
import SchoolsList from 'components/SchoolsList';


describe('MainComponent', () => {
  let MainComponent;

  beforeEach(() => {
    MainComponent = createComponent(Main);
  });

  it('should render the SchoolsList', () => {
    expect(MainComponent.type).toBeA(Function)
  });
});

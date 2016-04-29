/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

import {ADD_SCHOOL,DELETE_SCHOOL} from 'actions/const';
import * as actions from 'actions/index'


describe('schools actions', () => {
  it('addSchool should create ADD_SCHOOL action', () => {
    expect(actions.addSchool('Use Redux')).to.equal({
      school: 'Use Redux',
      type: ADD_SCHOOL
    })
  })

  it('deleteSchool should create DELETE_SCHOOL action', () => {
    expect(actions.deleteSchool(1)).to.equal({
      school: 1,
      type: DELETE_TODO
    })
  })

})

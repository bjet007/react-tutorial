require('normalize.css/normalize.css');
require('styles/App.css');
require('bootstrap');
require("../../node_modules/bootstrap/dist/css/bootstrap.css");

import React from 'react';
import SchoolsList from './SchoolsList.jsx';
import schoolsStore from '../stores/schoolsStore';

//main.jsx
var _schools = schoolsStore.getSchools();
schoolsStore.onChange(function(schools){
  _schools = schools;
  render();
});

class AppComponent extends React.Component {

  render() {
    return (
      <SchoolsList schools={_schools} />
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;

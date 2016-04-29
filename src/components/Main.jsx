require('normalize.css/normalize.css');
require('styles/App.css');
require("bootstrap-webpack");
import React, {
  Component,
  PropTypes
} from 'react';

import SchoolsList from './SchoolsList.jsx';

class AppComponent extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    const {schools,actions} = this.props;
    return (
      <SchoolsList schools={schools} actions={actions}/>
    );
  }
}

AppComponent.defaultProps = {
  schools: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

export default AppComponent;

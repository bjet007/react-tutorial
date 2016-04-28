require("../node_modules/bootstrap/dist/css/bootstrap.min.css")
import React from 'react';
import ReactDOM from 'react-dom';
import SchoolsList from './components/SchoolsList.jsx';
import schoolsStore from './stores/schoolsStore';

//main.jsx
var _schools = schoolsStore.getSchools();
schoolsStore.onChange(function(schools){
    _schools = schools;
    render();
});

function render(){
    ReactDOM.render();
}

render();

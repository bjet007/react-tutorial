const redux = require('redux');
const reducers = require('../reducers');
const config = require('config');

module.exports = function(initialState) {
  const store = redux.createStore(reducers, initialState, ( config.default.appEnv === 'dev' && window.devToolsExtension ) ? window.devToolsExtension() : undefined );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}

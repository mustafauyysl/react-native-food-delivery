import React from 'react';
import BearNavigator from './navigation/BearNavigator';
import configureStore from './redux/reducers/configureStore';
import {Provider} from 'react-redux';

const store = configureStore();

const App = props => {
  return(
    <Provider store={store}>
      <BearNavigator />
    </Provider>
    
  )
}

export default App;
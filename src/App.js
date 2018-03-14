import React, { Component } from 'react'
import {
    View,
    Text
} from 'react-native'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'

/**
 * @reducers
 */
import reducers from './redux/'
 /**
  * @saga
  */
import RootSaga from './saga/Root'
/**
 * @components
 */
import Main from './container/Main'

  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(reducers,{}, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(RootSaga)
export default class App extends Component{
    render(){        
        return(
            <Provider store={store}>
                <View style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
                    <Main />
                </View>
            </Provider>
        );
    }
}
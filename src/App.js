import React, {Component} from 'react';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm'

class App extends Component {

    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyAWn5WsgEX_iUOR4gsBVFrBUw-mtmNrXdQ',
            authDomain: 'manager-33dfe.firebaseapp.com',
            databaseURL: 'https://manager-33dfe.firebaseio.com',
            projectId: 'manager-33dfe',
            storageBucket: 'manager-33dfe.appspot.com',
            messagingSenderId: '158928662016'
          };

          firebase.initializeApp(config);
    }



    render()
    {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return(
            <Provider store={store}>
                <LoginForm/>
            </Provider>
        );
    }
}

export default App;
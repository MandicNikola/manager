//reducer for handling email and password authentication
//initial state for work with app
import { EMAIL_CHANGED,
     PASSWORD_CHANGED
} from '../actions/types';

const INITIAL_STATE =
 { email: '',
  password : ''
};


//returning new state object that components can render again
export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case EMAIL_CHANGED:
            return {...state, email:action.payload };
        case PASSWORD_CHANGED:
            return {...state, password:action.payload }; 
        default:
            return state;
    }

};

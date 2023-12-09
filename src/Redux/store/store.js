import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore,
  createStore
} from "redux";
import {Provider} from 'react-redux';
import {thunk} from 'redux-thunk';
import { authReducer } from "../authentication/auth.reducer";
import { filterReducer } from "../filter/filter.reducer";
import { ticketReducer } from "../ticket/ticket.reducer";


const rootReducer = combineReducers({
  auth: authReducer,
  filter: filterReducer,
  ticket: ticketReducer,
  
});



// const createCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


// const store = createStore(rootReducer, compose(applyMiddleware(thunk)), applyMiddleware(thunk))



const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk)),
);
export default store;
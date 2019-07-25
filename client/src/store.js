import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk'
import matches from './reducers/matches'
import currentUser from './reducers/currentUser'
import loginForm from './reducers/loginForm'
import signupForm from './reducers/signupForm'
import tournaments from './reducers/tournaments'
import opponents from './reducers/opponents'
import welcomeWindow from './reducers/welcomeWindow'

const reducer = combineReducers({
  matches,
  currentUser,
  loginForm,
  signupForm,
  tournaments,
  opponents,
  welcomeWindow
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store

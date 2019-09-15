import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const init = {
  count: 0
}

const ADD = 'add'

function reducer(state = init, action) {
  switch (action.type) {
    case ADD:
      return { count: state.count + 1 }
    default:
      return state
  }
}


const initPerson = {
  name: 'szy',
  age: 30,
}

const UPDATE_PERSON = 'update'

function personReducer(state = initPerson, action) {
  switch (action.type) {
    case UPDATE_PERSON:
    return {
      ...state,
      ...action.data

    }
    default:
      return state
  }
}

// action creators
const updatePerson = params => ({
  type: UPDATE_PERSON,
  data: params,
})




const allReducers = combineReducers({
  counter: reducer,
  person: personReducer
})

// const store = createStore(allReducers, {
//   counter: '不穿入的话 就是使用默认值',
//   person: initPerson
// })

const store = createStore(
  allReducers,
  // applyMiddleware(thunk)
  composeWithDevTools(applyMiddleware(thunk))

)

// store.dispatch({
//   type: ADD
// })
//
//

// store.dispatch({
//   type: UPDATE_PERSON,
//   data: {
//     age: 18
//   }
// })

store.subscribe(() => {
  console.log('change:', store.getState())
})

const asyncUpdate = (age) => {
  return (dispatch, getState) => {
    setTimeout(() => {
      console.log(getState)
      console.log(dispatch)
      dispatch(updatePerson({age}))
    }, 1000)
  }
}

//异步action redux-thunk 将函数执行，并将dispatch getState 传给异步函数
store.dispatch(asyncUpdate(5))

export default store

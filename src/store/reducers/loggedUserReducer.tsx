/*
 * @Author: Mcqueen.qiumaoyun 
 * @Date: 2018-04-20 14:54:09 
 * @About: 登陆用户reducer
 */
const initialState = {
  logged: false,
  pending: true,
  userInfo: {}
}

const loggedUserReducer = (state = initialState, action: {type: string,info: object}) => {
  if(action.type === 'GET_LOGGED_USER') {
    return Object.assign({}, state, {
      pending: false
    })
  }
  if(action.type === 'SET_LOGGED_USER') {
    return Object.assign({}, state, {
      logged: true,
      pending: false,
      userInfo: action.info
    })
  }
  return state
}

export default loggedUserReducer

const callApi = (name) => {
    //cosnole.log(name)
    return fetch(`http://www.reddit.com/r/${name}.json`)
        .then(
                response => response.json()
        ).then((json) => json)
}

export const CALL_API = 'Call API'


// A Redux middleware that interprets actions with CALL_API info specified.
// Performs the call and promises when such actions are dispatched.
export default store => next => action => {

  const callAPI = action[CALL_API]
  if (typeof callAPI === 'undefined') {
    return next(action)
  }
  let { name, types } = callAPI

  const actionWith = data => {
      
    const finalAction = Object.assign({}, action, data)
    delete finalAction[CALL_API]
    return finalAction
  }

  const [ requestType, successType, failureType ] = types
  next(actionWith({ type: requestType }))
  return callApi(name).then(
    response => next(actionWith({
      response,
      type: successType
    })),
    error => next(actionWith({
      type: failureType,
      error: error.message || 'Something bad happened'
    }))
  )
}
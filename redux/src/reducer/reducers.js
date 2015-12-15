import {ADD_TODO, VisibilityFilters, COMPLETE_TODO, SET_VISIBILITY_FILTER} from '../action/actions'

import {combineReducers} from 'redux'

const { SHOW_ALL } = VisibilityFilters



function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}
const initialState = [
    {
        text: 'Use Redux',
        completed: false
    }
]

function todos(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return [...state, {
                text : action.text,
                completed: false
            }]
        case COMPLETE_TODO:
            return [
                ...state.slice(0, action.index),
                Object.assign({}, state[action.index], {
                    completed: true
                }),
                ...state.slice(action.index + 1)
                ]
        default :
            return state
    }
}

const todoApp = combineReducers({
    visibilityFilter,
    todos
})

/* equals
*  export default todoApp(state, action) {
*       return {
*           visibilityFilter: visibilityFilter(state.visibilityFilter, action)
*           todos: todos(state.todos, action)
*       }
*  }
*
* */

export default todoApp

/*
 function todoApp(state = initialState, action) {
 switch (action.type){
 case SET_VISIBILITY_FILTER:
 return Object.assign({}, state, {
 visibilityFilter: action.filter
 })
 case ADD_TODO:
 return Object.assign({}, state, {
 todos: [...state.todos, {
 text: action.text,
 complete: false
 }]
 })

 case COMPLETE_TODO:
 return Object.assign({}, state, {
 todos: [
 ...state.todos.slice(0, action.index),
 Object.assign({}, state.todos[action.index], {
 completed: true
 }),
 ...state.todos.slice(action.index + 1)
 ]
 })

 default:
 return state
 }

 }*/
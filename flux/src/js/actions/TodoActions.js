import TodoDispatcher from '../dispatcher/TodoDispatcher'
import TodoConstants from '../constants/TodoConstants'

var TodoActions = {
    create:(text) => {
        TodoDispatcher.dispatch({
            actionType: TodoConstants.TODO_CREATE,
            text: text
        })
    }
}

export default TodoActions;
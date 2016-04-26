import {EventEmitter} from 'events'
import TodoDispatcher from '../dispatcher/TodoDispatcher'
import TodoConstants from  '../constants/TodoConstants'

const EVENT_CHANGE = 'change'
var todos = {};

function create(text) {
    var id = new Date();
    console.log(text)
    todos[id] = {
        id: id,
        text: text
    }
    console.log(todos);
}

class AppStore extends EventEmitter {
    getAll() {
        return todos
    }
    emitChange() {
        this.emit(EVENT_CHANGE)
    }
    addChangeEventListener(callback) {
        this.on(EVENT_CHANGE, callback)
    }
    removeChangeEventListener() {
        thie.removeEndEventListener(EVENT_CHANGE, callback)
    }
}

var appStore = new AppStore();

TodoDispatcher.register((action) => {
    switch (action.actionType) {
        case TodoConstants.TODO_CREATE:
            if (action.text != '') {
                create(action.text)
            }
            appStore.emitChange()
            break
    }
})

export default appStore

import {EventEmitter} from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';
import TodoConstants from '../constants/TodoConstants';

const CHANGE_EVENT = "change";
var _todos = {};
function create(text){
    var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    _todos[id] = {
        id: id,
        text: text
    };
}

class AppStore extends EventEmitter{
    getAll() {
        return _todos;
    }
    emitChange(){
        this.emit(CHANGE_EVENT);
    }

    addChangeListener(callback){
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback){
        this.removeListener(CHANGE_EVENT, callback);
    }
}
var appStore = new AppStore();
//注册事件
AppDispatcher.register(function(action) {
    var text;

    switch(action.actionType) {
        case TodoConstants.TODO_CREATE:
            text = action.text.trim();
            if (text !== '') {
                create(text);
            }
            //触发事件
            appStore.emitChange();
            break;
    }
})
export default appStore;
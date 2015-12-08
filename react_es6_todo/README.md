
###es6 & react
    使用 extends React.Components 代替  React.createClass
    使用 constructor 代替 getInitialState

 ```
  constructor(props) {
      super(props);
      this.state = {count: props.initialCount};
    }
 ```
###react
     es6  定义propTypes 和 defaultProps 作为一个properties
     TextInput.propTypes = {id: React.propTypes.string}
     TextInput.defaultProps = {value: ''}


###flux
  flux 是一种设计模式 来辅助react的单项数据流
  flux 实际时提供一个 Dispatcher的function, 其实是一个全局的发布和订阅模式
  flux Dispatcher 和 Nodejs 的EventEmitter 组合实现单项的数据流模式
  通过Dispatcher 注册事件，而所有事件的触发都交给EventEmitter来完成
  
 ```
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
 ```
 flux 开发的典型目录
 
  ![image](https://cloud.githubusercontent.com/assets/10190366/11296515/8f1fe9a2-8fad-11e5-84b2-03befd46f544.png)

  Action  事件与数据交互的口子，用来触发dispatcher

  ```
    var TodoActions = {
        create:(text) => {
            TodoDispatcher.dispatch({
                actionType: TodoConstants.TODO_CREATE,
                text: text
            })
        }
      }
  ```
  dispacther 注册事件
  ```
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

  ```
  dispacther 收到 action的动作，分发到注册的callback
  
  在组件的中注册事件
  ```
    componentDidMount() {
        Appstore.addChangeEventListener(this._onChange.bind(this))
    }
    componentWillUnmount(){
        Appstore.removeChangeEventListener(this._onChange.bind(this))
    }
  ```
  
  store 的功能加入了 EventEmitter, 可以监听和广播事件
  ```
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
  ```
  
  flux 整个流程
  
  ![flux](https://cloud.githubusercontent.com/assets/10190366/11647166/cd6d24f4-9d9f-11e5-844c-21f340125e84.png)

 可以看出
### Action Creator
 作为全部数据改变和交互的入口，更改数据或者view的时候出发Action
 Action Creator把 type 和 payload 封装成一个Action,type 是定义的多个(常量)之一

### Dispatcher
   是函数回调的绑定中心，连接着action和store，Action Creator给过来的action，会传给
   store

### Store
如果store 在 dispatcher 中注册。action 会传递到store，
在 store 中，通常会使用一个 switch 语句来判断 action 的类型，
决定是否对这个 action 做出相应。如果 store 关心这个 action，
就会根据 action 找出需要变化的部分，更新 state。然后触发change
事件，改变视图




  


  
 

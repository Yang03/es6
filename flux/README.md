### es6 & react

    使用 extends React.Components 代替  React.createClass
    使用 constructor 代替 getInitialState

     ```
      constructor(props) {
          super(props);
          this.state = {count: props.initialCount};
        }
     ```
### react
     * es6  定义propTypes 和 defaultProps 作为一个properties
     * TextInput.propTypes = {id: React.propTypes.string}
     * TextInput.defaultProps = {value: ''}


# flux
flux 是一种设计模式 来辅助react的单项数据流








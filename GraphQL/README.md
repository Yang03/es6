### 什么是nvm
nvm全称Node Version Manager,可以方便的管理node version

### 设置NODE_ENV
export NODE_ENV = development

#### 如何安装nvm
```
    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash
```

* 设置path  export PATH=/Users/baixing/npm/bin:$PATH
* . ~/.nvm/nvm.sh

现在可以使用nvm,常见的cmd

    * nvm list (node version list)
    * nvm install v4.2.1 (安装node)
    * nvm use v4.2.1 (切换到v4.2.1)
    * node -harmony --help 查看es6 es7支持

### nodemon


####安装：
```
 npm install -g nodemon
```
#### cmd
* nodemon server.js (启动)
* rs可以重启

### 如何在node 里面使用es6(use babel)
* babel-preset-es2015

```
    install babel-preset-es2015 --save-dev
```

* 编译

```
    nodemon index.js --exec babel-node --presets es2015
```

### babel-register
* install babel-core, babel-preset-ex2015

* bind hook

```
  require("babel-register")({
      // This will override `node_modules` ignoring - you can alternatively pass
      // an array of strings to be explicitly matched or a regex / glob
      ignore: false
  });
```
* add .babelrc

```
    {
        "presets": ["es2015"]
    }
```















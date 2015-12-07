### nvm?
nvm全称Node Version Manager,可以方便的管理node version


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

```install babel-preset-es2015 --save-dev
```

* 编译

```nodemon index.js --exec babel-node --presets es2015
```












